# 内容写作规范（文章作者必读）

适用于 `src/content/articles/<栏目>/<slug>.mdx` 下的所有文章。新增文章也按本规范写。

## 1. 读者与定位

- 读者：**中国大陆以外**的中文用户（港澳台、新马、海外华人），以新手为主。
- 网站目的：讲清楚 Polymarket，并在“买 USDC / 入金 / 出金 / 选交易所”这些自然需要交易所的环节，引导读者通过本站邀请链接注册交易所。
- 语气：像懂行的朋友，直接、具体、诚实。少用形容词，多给步骤、数字（带日期和出处）和例子。
- 语言：简体中文；产品界面上的英文按钮写成“**Deposit（充值）**”这种形式。
- 禁用营销腔：不写“暴富”“稳赚”“躺赚”“保本”“无风险”“100% 胜率”“官方合作”“独家内部”等。

## 2. 合规红线（违反任一条都必须改）

1. **不教任何绕过地区限制的方法**：不写 VPN、代理、改 IP、借用他人账户或身份。提到 VPN 时，只说“Polymarket 用户协议禁止用 VPN 规避地区限制，可能导致账户受限”。
2. **不说某个受限地区“可以合法使用”**。中国大陆：明确写“禁止虚拟货币交易相关活动，本站不面向中国大陆用户”。
3. **不承诺收益、空投或代币**。POLY 代币未发行（截至 2026-11），任何“领取 POLY”的页面都按诈骗处理。
4. **不写具体的邀请返佣比例或奖金**。各家被邀请人返佣比例取决于邀请人设置。正文只写机制和“最高可达 X%（以注册页为准）”，而且 X 必须来自事实库。具体比例由 `<CTA />` 组件从配置读取，作者不要手写。
5. **不编造邀请码、邀请链接、截图描述**。不要自己拼 Polymarket 邀请链接。
6. **不把 Polymarket US（美国版）的规则混进国际站教程**。
7. **“被起诉 / 涉嫌”不写成“已定罪”**。安全事件金额写区间并注明“据 XX 报道”。
8. **不推荐高杠杆产品**（例如 20 倍永续合约），只做风险提示。

## 3. 事实使用规则

- **唯一事实来源**：`docs/research-facts.md`（2026-11 整理）。不在事实库里的具体数字、日期、政策，**不要写**；需要时写成通用描述加“以官方页面为准”。
- 事实库里标为“低”的条目：不写具体数字，用定性描述或“据第三方资料”。
- 事实库里标为“中”的条目：可以写，但要注明时间（例如“截至 2026 年 11 月”“2026 年 3 月起”），手续费、最低额、提币费一律加“以页面显示为准”。
- 快速变化的事项（币安 2026-10-29 安全事件后的提币恢复、Protocol V2 上线日期、各地区限制）写明“截至 2026 年 11 月初”，并提醒读者看官方公告。
- 官方链接可以用普通 Markdown 链接，例如 `[Polymarket 帮助中心](https://help.polymarket.com/)`。不要链接任何第三方推广站。

## 4. SEO 规则

- `title`（页面 H1）：≤ 30 个汉字左右，主关键词放在前面，可以带“2026”。
- `seoTitle`（可选，用于 `<title>`）：≤ 32 个汉字，含主关键词。
- `description`：70–120 个汉字，含主关键词，写清读者能得到什么。
- 第一段（导语）在 80–150 字内**直接回答**标题里的问题（方便被摘录为精选摘要），然后再展开。
- H2 用读者会搜的问题或关键词来写，例如“## Polymarket 充值最低多少？”。每篇 5–9 个 H2，必要时用 H3 分步骤。
- 正文**不要写 H1**（`# `），布局会自动把 title 渲染成 H1。
- `tldr`：3–5 条要点，每条 ≤ 40 字。
- `faq`：4–6 组问答，问题用口语化的搜索问句，答案 40–120 字。正文里**不要**再写 FAQ 小节（布局会自动渲染）。
- 内链：每篇至少 4 个站内链接，**只能用 `docs/article-plan.json` 里列出的路径**和下面的工具/栏目路径，链接文字要自然、带关键词。
  - 工具：`/tools/odds-calculator/`（赔率/收益计算器）、`/tools/rebate-calculator/`（返佣计算器）、`/tools/deposit-route/`（入金路线查询）、`/markets/`（热门市场）、`/exchange/`（交易所对比）
  - 栏目：`/polymarket/`、`/deposit/`、`/exchange/`、`/strategy/`
- 篇幅：主力教程 2500–4000 字；窄主题 1500–2500 字。宁可具体，不要注水。
- 多用有序列表写步骤、用表格做对比（Markdown 表格），重要提醒用 `<Callout>`。

## 5. 推广组件（MDX，无需 import）

| 组件 | 用法 | 说明 |
|---|---|---|
| `<CTA />` | `<CTA />` 或 `<CTA exchange="okx" />`，可加 `title="..." text="..."` | 单个交易所推广条。不传 exchange 时用全站主推交易所 |
| `<CTAGroup />` | `<CTAGroup />` 或 `<CTAGroup ids="okx,binance" />` | 多个交易所卡片 |
| `<ExchangeTable />` | `<ExchangeTable />` 或 `<ExchangeTable compact />` | 交易所手续费与 USDC 提币对比表 |
| `<DepositFlow />` | `<DepositFlow />` 或 `<DepositFlow exchange="okx" />` | “交易所买 USDC → 提币 → Polymarket 到账”流程图 |
| `<PolymarketCTA />` | `<PolymarketCTA />` | 前往 Polymarket 的按钮条（每篇最多 1 次，放在文末附近） |
| `<Callout>` | 见下方 | 提示框，type = info / tip / warning / danger |

Callout 写法（内容前后各空一行，内容里可以用 Markdown）：

```mdx
<Callout type="warning" title="网络一定要选对">

交易所提币选择的网络，必须和 Polymarket 充值页面显示的网络一致。

</Callout>
```

**放置规则**：
- 推广组件只放在读者自然需要交易所的位置，例如“先在交易所买 USDC”“提现换回法币”“想省手续费”。
- 每篇正文里 `<CTA />`、`<CTAGroup />`、`<PolymarketCTA />` 合计 **最多 3 个**。布局会在文末自动加一组交易所卡片，正文不必在结尾重复。
- 交易所专属文章（例如币安教程）用对应的 `exchange="binance"`。

## 6. MDX 语法注意（否则构建失败）

- 正文里不要出现裸的 `<`、`>`、`{`、`}`。要表达“小于/大于”就用文字，或写 `&lt;` `&gt;`。
- 不要用 HTML 注释 `<!-- -->`。
- 组件名大小写必须完全一致，自闭合组件要写 `/>`。
- frontmatter 是 YAML：含冒号、引号、`#` 的字符串要用双引号包起来；`faq` 用如下格式：

```yaml
faq:
  - q: "Polymarket 充值最低多少？"
    a: "……"
```

## 7. frontmatter 模板

```yaml
---
title: "Polymarket 怎么充值？2026 入金方法全对比"
seoTitle: "Polymarket 怎么充值：USDC 入金教程（2026）"
description: "……"
keywords: ["polymarket 充值", "polymarket 入金", "polymarket usdc"]
tldr:
  - "……"
faq:
  - q: "……"
    a: "……"
publishDate: 2026-11-02
featuredExchanges: ["okx", "binance", "bitget"]
order: 1
---
```

`featuredExchanges` 可选值：okx、binance、bitget、gate、bybit（决定文末和侧边栏推荐哪几家，最多 3 个）。

## 8. 自检

写完运行：

```bash
node scripts/validate-content.mjs src/content/articles/<栏目>/<slug>.mdx
```

脚本会检查 frontmatter、MDX 语法、组件名、内链、篇幅和禁用词，全部通过后再交稿。
