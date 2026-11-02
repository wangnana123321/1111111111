#!/usr/bin/env node
/**
 * 文章内容校验（不需要完整构建，可并行运行）
 * 用法：
 *   node scripts/validate-content.mjs                 # 校验全部文章
 *   node scripts/validate-content.mjs <file.mdx> ...  # 校验指定文章
 *
 * 检查项：frontmatter 字段与长度、MDX 语法、组件白名单、站内链接、推广组件数量、
 * 禁用词与合规红线、正文 H1、篇幅。错误（✖）必须修复，警告（⚠）建议修复。
 */
import { readFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import yaml from 'js-yaml';
import { compile } from '@mdx-js/mdx';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const ARTICLES_DIR = path.join(ROOT, 'src/content/articles');
const CATEGORIES = ['polymarket', 'deposit', 'exchange', 'strategy'];
const EXCHANGES = ['binance', 'okx', 'bitget', 'gate', 'bybit'];
const COMPONENTS = ['CTA', 'CTAGroup', 'ExchangeTable', 'Callout', 'DepositFlow', 'PolymarketCTA'];
const STATIC_ROUTES = [
  '/',
  '/polymarket/',
  '/deposit/',
  '/exchange/',
  '/strategy/',
  '/tools/',
  '/tools/odds-calculator/',
  '/tools/rebate-calculator/',
  '/tools/deposit-route/',
  '/markets/',
  '/about/',
  '/disclaimer/',
  '/privacy/',
  '/contact/',
];

const FORBIDDEN = [
  { re: /稳赚|躺赚|暴富|稳赢|包赚|百分百赚|100%\s*胜率|零风险|(?:保证|承诺|稳定|绝对)\s*保本|保本保息/g, msg: '禁用的收益承诺用语' },
  { re: /官方合作|独家内部|内部渠道/g, msg: '不得暗示官方合作或内部渠道' },
  { re: /翻墙|科学上网|梯子|挂代理|换\s*IP|改\s*IP|切换节点/gi, msg: '不得出现规避地区限制的方法' },
  { re: /(?:用|使用|开|挂|借助|通过)\s*VPN\s*(?:就|即可|可以|来|访问|注册|登录|绕过)/gi, msg: '疑似在教用 VPN 规避限制' },
  { re: /大陆(?:用户)?(?:也)?(?:可以|能够|能)\s*(?:正常)?(?:使用|注册|访问|玩)/g, msg: '不得暗示中国大陆用户可以使用' },
];

/** 只在“非警示语境”下才算违规的说法（按句子判断） */
const CONTEXTUAL = [
  { re: /领取\s*POLY|POLY\s*(?:代币)?\s*领取地址|空投\s*领取\s*入口/i, ok: /警惕|骗|诈|不要|别(?:去|信|点|碰|用|轻信|相信)|假|钓鱼|尚未|没有|不存在|切勿|小心|一律|私信|社群|陌生|“[^”]*(?:领取|空投)[^”]*”/, msg: '疑似提供空投领取入口' },
  { re: /无风险/, ok: /不是|并非|没有|不存在|不等于|看似|所谓|号称|宣称|声称|误以为|以为|不能|并不|绝非|哪有|“无风险”/, msg: '“无风险”只能出现在否定或提醒语境中' },
];

async function listAll() {
  const out = [];
  for (const cat of CATEGORIES) {
    const dir = path.join(ARTICLES_DIR, cat);
    let files = [];
    try {
      files = await readdir(dir);
    } catch {
      continue;
    }
    for (const f of files) if (/\.mdx?$/.test(f)) out.push(path.join(dir, f));
  }
  return out;
}

async function plannedRoutes() {
  const routes = new Set(STATIC_ROUTES);
  try {
    const plan = JSON.parse(await readFile(path.join(ROOT, 'docs/article-plan.json'), 'utf8'));
    for (const a of plan.articles) routes.add(a.path);
  } catch {
    /* 没有规划文件时仅用现有文章 */
  }
  for (const file of await listAll()) {
    const rel = path.relative(ARTICLES_DIR, file).replace(/\\/g, '/').replace(/\.mdx?$/, '');
    routes.add(`/${rel}/`);
  }
  return routes;
}

function cjkCount(text) {
  return (text.match(/[一-鿿]/g) || []).length;
}

function stripCode(text) {
  return text.replace(/```[\s\S]*?```/g, '').replace(/`[^`\n]*`/g, '');
}

async function validate(file, routes) {
  const errors = [];
  const warns = [];
  const raw = await readFile(file, 'utf8');
  const rel = path.relative(ROOT, file);
  const relToArticles = path.relative(ARTICLES_DIR, file).replace(/\\/g, '/');
  const cat = relToArticles.split('/')[0];
  if (!CATEGORIES.includes(cat)) errors.push(`文件必须放在 ${CATEGORIES.join(' / ')} 目录下`);
  if (!/^[a-z0-9-]+\.mdx$/.test(path.basename(file))) errors.push('文件名只能用小写字母、数字和连字符，扩展名 .mdx');

  const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!m) {
    errors.push('缺少 frontmatter（文件开头的 --- ... ---）');
    return { rel, errors, warns };
  }
  let fm;
  try {
    fm = yaml.load(m[1]);
  } catch (e) {
    errors.push(`frontmatter YAML 解析失败：${e.message.split('\n')[0]}`);
    return { rel, errors, warns };
  }
  const body = m[2];

  // ---- frontmatter ----
  const str = (v) => typeof v === 'string' && v.trim().length > 0;
  if (!str(fm.title)) errors.push('缺少 title');
  else if ([...fm.title].length > 40) warns.push(`title 偏长（${[...fm.title].length} 字），建议 ≤ 32`);
  if (fm.seoTitle !== undefined && (!str(fm.seoTitle) || [...fm.seoTitle].length > 40))
    warns.push('seoTitle 建议 ≤ 32 字');
  if (!str(fm.description)) errors.push('缺少 description');
  else {
    const n = [...fm.description].length;
    if (n < 30 || n > 200) errors.push(`description 长度 ${n}，必须在 30–200 之间（建议 70–120）`);
    else if (n < 60 || n > 140) warns.push(`description 长度 ${n}，建议 70–120`);
  }
  if (!Array.isArray(fm.keywords) || fm.keywords.length === 0) errors.push('keywords 至少 1 个');
  if (!Array.isArray(fm.tldr) || fm.tldr.length < 3 || fm.tldr.length > 5) errors.push('tldr 需要 3–5 条');
  if (!Array.isArray(fm.faq) || fm.faq.length < 4 || fm.faq.length > 6) errors.push('faq 需要 4–6 组');
  else
    fm.faq.forEach((item, i) => {
      if (!item || !str(item.q) || !str(item.a)) errors.push(`faq 第 ${i + 1} 组缺少 q 或 a`);
    });
  if (!fm.publishDate || isNaN(new Date(fm.publishDate).getTime())) errors.push('publishDate 无效（格式 2026-11-02）');
  if (fm.featuredExchanges !== undefined) {
    if (!Array.isArray(fm.featuredExchanges) || fm.featuredExchanges.some((e) => !EXCHANGES.includes(e)))
      errors.push(`featuredExchanges 只能是 ${EXCHANGES.join(', ')}`);
    else if (fm.featuredExchanges.length > 3) warns.push('featuredExchanges 建议最多 3 个');
  }
  if (fm.order !== undefined && typeof fm.order !== 'number') errors.push('order 必须是数字');

  // ---- body ----
  const code = stripCode(body);
  if (/^#\s/m.test(code)) errors.push('正文不要使用 H1（# 标题），从 ## 开始');
  if (/<!--/.test(code)) errors.push('MDX 不支持 HTML 注释 <!-- -->');
  const h2 = (code.match(/^##\s/gm) || []).length;
  if (h2 < 4) warns.push(`H2 只有 ${h2} 个，建议 5–9 个`);
  if (/^##\s*(常见问题|FAQ)/im.test(code)) warns.push('正文不需要 FAQ 小节（布局会根据 frontmatter 自动渲染）');

  const tags = [...code.matchAll(/<([A-Z][A-Za-z0-9]*)\b/g)].map((x) => x[1]);
  for (const t of new Set(tags)) if (!COMPONENTS.includes(t)) errors.push(`未知组件 <${t}>（可用：${COMPONENTS.join(', ')}）`);
  const lower = [...code.matchAll(/<([a-z][a-z0-9]*)\b/g)].map((x) => x[1]);
  for (const t of new Set(lower)) if (!['br', 'b', 'strong', 'em', 'sup', 'sub', 'kbd'].includes(t)) warns.push(`正文里出现 HTML 标签 <${t}>，请改用 Markdown`);
  const ctaCount = tags.filter((t) => t === 'CTA' || t === 'CTAGroup' || t === 'PolymarketCTA').length;
  if (ctaCount === 0) warns.push('正文没有推广组件（<CTA /> 等），确认是否合适');
  if (ctaCount > 3) errors.push(`推广组件共 ${ctaCount} 个，正文最多 3 个`);
  for (const mm of code.matchAll(/<CTA[^>]*exchange="([^"]+)"/g))
    if (!EXCHANGES.includes(mm[1])) errors.push(`<CTA exchange="${mm[1]}"> 交易所 id 无效`);

  // 站内链接
  const links = [
    ...[...code.matchAll(/\]\((\/[^)\s#]*)(#[^)\s]*)?\)/g)].map((x) => x[1]),
    ...[...code.matchAll(/href="(\/[^"#]*)/g)].map((x) => x[1]),
  ];
  for (const l of links) {
    const norm = l.endsWith('/') ? l : `${l}/`;
    if (!routes.has(norm)) errors.push(`站内链接不存在：${l}`);
  }
  const uniq = new Set(links.map((l) => (l.endsWith('/') ? l : `${l}/`)));
  if (uniq.size < 4) warns.push(`站内链接只有 ${uniq.size} 个，建议至少 4 个`);
  const selfPath = `/${relToArticles.replace(/\.mdx?$/, '')}/`;
  if (uniq.has(selfPath)) warns.push('文章链接到了自己');

  // 外链：禁止链接推广站和交易所带参数的链接（推广链接统一走 /go/）
  for (const mm of code.matchAll(/\]\((https?:\/\/[^)\s]+)\)/g)) {
    const url = mm[1];
    if (/startpolymarket|ref=|referral|invite|\?via=|\?r=|affiliate/i.test(url))
      errors.push(`不要在正文里放推广/邀请外链：${url}（推广统一用 <CTA /> 组件）`);
  }

  // 禁用词
  const plain = code.replace(/<[^>]+>/g, ' ');
  for (const rule of FORBIDDEN) {
    const hits = plain.match(rule.re);
    if (hits) errors.push(`${rule.msg}：${[...new Set(hits)].slice(0, 3).join('、')}`);
  }
  for (const sent of plain.split(/[。！？\n]/)) {
    for (const rule of CONTEXTUAL) {
      if (rule.re.test(sent) && !rule.ok.test(sent)) errors.push(`${rule.msg}：「${sent.trim().slice(0, 60)}」`);
    }
  }
  // 提到 VPN 的句子必须带否定/禁止语气
  for (const sent of plain.split(/[。！？\n]/)) {
    if (/VPN/i.test(sent) && !/不要|禁止|不得|违反|切勿|不能|不建议|不可|风险|受限|封|冻结|限制|别(?:用|去|碰|信)|勿|查到|追诉|起诉|识别/.test(sent))
      warns.push(`提到 VPN 的句子缺少否定/风险语气：「${sent.trim().slice(0, 60)}」`);
  }

  // 篇幅
  const chars = cjkCount(plain);
  if (chars < 1200) warns.push(`正文约 ${chars} 个汉字，偏短（建议 ≥ 1500）`);

  // MDX 语法
  try {
    await compile(body, { development: false });
  } catch (e) {
    const where = e.line ? `第 ${e.line + (m[1].split('\n').length + 2)} 行附近：` : '';
    errors.push(`MDX 语法错误：${where}${String(e.reason || e.message).split('\n')[0]}`);
  }

  return { rel, errors, warns, chars };
}

const args = process.argv.slice(2);
const files = args.length ? args.map((f) => path.resolve(f)) : await listAll();
if (!files.length) {
  console.error('未找到任何文章：' + ARTICLES_DIR);
  process.exit(1);
}
const routes = await plannedRoutes();
let errorCount = 0;
for (const file of files) {
  const { rel, errors, warns, chars } = await validate(file, routes);
  const status = errors.length ? '✖' : warns.length ? '⚠' : '✔';
  console.log(`${status} ${rel}${chars ? `（约 ${chars} 字）` : ''}`);
  for (const e of errors) console.log(`    ✖ ${e}`);
  for (const w of warns) console.log(`    ⚠ ${w}`);
  errorCount += errors.length;
}
console.log(`\n${files.length} 篇文章，${errorCount} 个错误`);
process.exit(errorCount ? 1 : 0);
