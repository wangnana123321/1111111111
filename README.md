# 预测市场指南 · Polymarket 中文新手站

以 **Polymarket 新手教程** 为流量入口、以 **交易所邀请返佣** 为变现目标的中文 SEO 静态站。

- 技术栈：[Astro 5](https://astro.build) + MDX，纯静态输出，无数据库、无服务器
- 页面：首页、4 个栏目（Polymarket 教程 / 充值提现 / 交易所返佣 / 进阶玩法）、30 篇文章、3 个工具、热门市场看板、关于/免责/隐私/联系
- SEO：每页 canonical、Open Graph、JSON-LD 结构化数据（Article / FAQPage / BreadcrumbList / WebApplication），自动生成 sitemap、RSS 和 robots.txt
- 推广：全站推广按钮都指向 `/go/<交易所>/`，链接只在一个配置文件里管理

---

## 一、上线前必须改的 3 个地方

### 1. 邀请链接：`src/config/affiliates.ts`

```ts
okx: {
  inviteUrl: 'https://www.okx.com/join/XXXX',   // 你的专属邀请链接
  inviteCode: 'XXXX',                           // 邀请码（页面上会显示）
  inviteeRebate: 0.2,                           // 被邀请人手续费返还比例，0.2 = 20%；不确定就保持 null
},
```

- `inviteUrl` 留空时，`/go/okx/` 会跳到交易所官网首页，网站照常可用。
- `inviteeRebate` 必须和你在交易所后台给下级设置的返还比例一致。留 `null` 时，页面统一写“以注册页面为准”，不会宣传具体比例。
- `polymarket.inviteUrl` 填好后，热门市场页每个市场的链接会自动带上同样的邀请参数。请从 polymarket.com/refer 复制真实链接，不要自己拼。
- `FEATURED_ORDER` 决定全站主推顺序：第 1 个用于首页大按钮和手机端悬浮条，前 3 个出现在推荐卡片里。默认是 OKX → 币安 → Bitget → Gate → Bybit。币安 2026-10-29 安全事件后提币还在分阶段恢复，所以暂时没排第一。

### 2. 域名：`src/config/site.ts`

把 `url` 改成正式域名，例如 `https://www.yourdomain.com`，也可以在部署平台设置环境变量 `SITE_URL`。不改的话 canonical 和 sitemap 都会指向占位的 example.com，构建时会给出警告。

同一个文件里还可以设置：站点名称、联系邮箱、社交账号、Google Analytics 4、Cloudflare Web Analytics、Google Search Console 验证码。

### 3. 分享图（可选）

改了站点名称后，重新生成分享图和图标：

```bash
node scripts/generate-images.mjs
```

这一步需要 Playwright。

---

## 二、本地开发

需要 Node.js 20.3 或更高版本（推荐 22）。

```bash
npm install
npm run dev          # 本地预览 http://localhost:4321
npm run build        # 构建到 dist/，并自动检查站内链接
npm run check        # TypeScript / Astro 类型检查
node scripts/validate-content.mjs   # 检查全部文章（frontmatter、MDX 语法、内链、合规用语）
```

离线环境构建时可以跳过热门市场数据：`SKIP_MARKETS_FETCH=1 npm run build`。

---

## 三、部署（推荐 Cloudflare Pages）

### 方式 A：Cloudflare Pages 直接连接 GitHub 仓库（最简单）

1. Cloudflare 控制台 → Workers & Pages → 创建 → Pages → 连接到 Git，选择本仓库。
2. 构建设置：
   - 构建命令：`npm run build`
   - 输出目录：`dist`
   - 环境变量：`SITE_URL=https://你的域名`、`NODE_VERSION=22`
3. 绑定自定义域名。
4. **定时刷新热门市场**：在 Pages 项目设置里创建一个 Deploy Hook。然后用任意定时服务（例如 GitHub Actions 的 schedule，或 cron-job.org）每 6 小时请求一次这个 Hook。

`/go/` 的跳转会使用构建时生成的 `dist/_redirects`（302 服务端跳转）。缓存和安全响应头配置在 `public/_headers`。

### 方式 B：GitHub Actions 构建并部署

仓库已经带了 `.github/workflows/deploy.yml`：push 到 `main` 时，以及每 6 小时，会自动构建并部署。需要在仓库 Settings → Secrets and variables → Actions 中配置：

- Secrets：`CLOUDFLARE_API_TOKEN`、`CLOUDFLARE_ACCOUNT_ID`
- Variables：`SITE_URL`、`CF_PAGES_PROJECT`

没有配置 Secrets 时，工作流只构建、不部署，可以当作 CI 检查使用。

### 其他平台

Netlify、Vercel 或任何静态托管都可以，构建命令 `npm run build`，输出目录 `dist`。不支持 `_redirects` 的平台会自动使用 `/go/xxx/` 页面里的跳转代码，功能不受影响。

---

## 四、上线后的 SEO 清单

1. 在 Google Search Console 添加站点，提交 `https://你的域名/sitemap-index.xml`。
2. 在 Bing Webmaster Tools 同样提交 sitemap（Bing 可以直接导入 GSC 的数据）。
3. 在 `site.ts` 配置统计代码。推广按钮的点击会作为 `affiliate_click` 事件发送到 GA4，包含交易所和按钮位置两个参数。
4. 每月核对一次 `docs/research-facts.md` 末尾的「待核实清单」，并更新：
   - 手续费、地区限制等数据；
   - `src/config/site.ts` 里的 `factsCheckedAt`。

---

## 五、内容怎么维护

- 文章放在 `src/content/articles/<栏目>/<slug>.mdx`，访问地址是 `/<栏目>/<slug>/`。
  - 栏目只能是 `polymarket`、`deposit`、`exchange`、`strategy`。
- 写作规范、合规红线、可用组件：`docs/content-style-guide.md`。
- 唯一事实来源：`docs/research-facts.md`。整理于 2026-11，标注了置信度和来源。
  - 这一轮联网核验没有完成，上线前请看文件开头的说明和末尾的待核实清单。
- 关键词规划：`docs/keyword-map.md`。
- 文章规划与简报：`docs/article-plan.json`。
- 文章里可以直接使用的组件（不需要 import）：

| 组件 | 作用 |
|---|---|
| `<CTA exchange="okx" />` | 单个交易所推广条 |
| `<CTAGroup ids="okx,binance" />` | 多个交易所卡片 |
| `<ExchangeTable />` | 交易所对比表 |
| `<DepositFlow />` | 入金流程图 |
| `<PolymarketCTA />` | 前往 Polymarket |
| `<Callout type="warning" title="…">…</Callout>` | 提示框 |

- 交易所的费率、网络等数据集中在 `src/data/exchanges.ts`；Polymarket 的数据集中在 `src/data/polymarket.ts`。改这两个文件后，对比表、计算器和卡片会一起更新。

---

## 六、目录结构

```
src/
  config/        site.ts（站点）、affiliates.ts（邀请链接）
  data/          exchanges.ts、polymarket.ts、categories.ts
  content/       articles/<栏目>/*.mdx
  components/    推广卡片、对比表、FAQ、目录等组件
  layouts/       BaseLayout、ArticleLayout、PageLayout
  lib/           文章工具函数、SEO 结构化数据、Polymarket 市场数据
  pages/         路由（首页、栏目、文章、工具、热门市场、/go 跳转、RSS、robots）
  styles/        global.css（亮/暗色自动切换）
scripts/         check-links.mjs、validate-content.mjs、generate-images.mjs
docs/            事实库、关键词规划、文章规划、写作规范
```

---

## 七、风险与合规说明

- 本站面向中国大陆以外的中文读者。所有页面都带风险提示和推广披露，不提供任何规避地区限制的方法。
- Polymarket 国际站对美国、英国、新加坡、台湾、泰国等多个地区限制交易；台湾、新加坡、韩国等地还有执法或封锁措施。按地区投放广告或推广之前，请先确认当地法律。
- 推广链接都带 `rel="sponsored nofollow"`，`/go/` 路径在 robots.txt 中禁止抓取。
