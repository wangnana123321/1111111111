# 关键词地图与内容规划（2026-11）

> **数据可靠性**：本轮 SEO 调研没能拿到实时 SERP 和搜索量数据（工作流共用的 WebSearch 额度已用完）。下表的"需求"和"难度"都是**规划用的估计**，竞争对手也只是推测的网站类型。上线前请在 google.com.hk、google.com.tw、google.com.sg 上分别用简体和繁体复查，最好再用 Ahrefs、Semrush 或 Keyword Planner（香港、台湾、新加坡、马来西亚地区）补上真实搜索量。
> 事实性内容一律以 `docs/research-facts.md` 为准，并遵守其中的"写作红线"。
>
> 图例：
> - 意图：信息型 / 商业型 / 交易型 / 导航型。
> - 需求、难度：高 / 中 / 低，均为估计。
> - ⚠️ 表示合规敏感，写作时要特别注意。
> - 🆕 表示本次根据研究结果新增的词。

## 1. 关键词表（已去重，同义词合并到同一行）

### A. Polymarket 品牌与基础

| 关键词（含变体） | 意图 | 需求 | 难度 | 目标页面 | 备注 |
|---|---|---|---|---|---|
| polymarket | 导航型 | 高 | 高 | 首页 | 品牌词，前几位是官网、维基和新闻。首页做品牌加"中文指南"的组合 |
| polymarket 是什么 / 是什麼(繁) | 信息型 | 高 | 中 | what-is-polymarket | 新手入口词，主要对手是中文加密媒体和交易所学院 |
| 预测市场 是什么 | 信息型 | 中 | 中 | what-is-polymarket（单独一节） | 上位主题词 |
| polymarket 怎么玩 / 怎麼玩(繁) | 信息型 | 高 | 中 | how-to-use-polymarket | 一步一步写的教程格式胜出 |
| polymarket 教程 / 新手教程 | 信息型 | 高 | 中 | how-to-use-polymarket（支柱页） | — |
| polymarket 注册 / 注册教程 | 交易型 | 中 | 低-中 | how-to-use-polymarket#注册 | 注册方式：Google、Email、钱包 |
| polymarket 钱包 / metamask | 信息型 / 交易型 | 低-中 | 低 | how-to-use-polymarket#钱包 | 讲清代理钱包和外部钱包的区别 |
| polymarket app / app 下载 | 导航型 | 中 | 中 | polymarket-app | ⚠️ 只链官方渠道，提醒假 App；国际版官方建议用浏览器 |

### B. 入金、出金（核心导流）

| 关键词（含变体） | 意图 | 需求 | 难度 | 目标页面 | 备注 |
|---|---|---|---|---|---|
| polymarket 充值 / 入金 | 交易型 | 高 | 中 | polymarket-deposit-usdc | **核心导流词**：交易所买 USDC → 选 Polygon 提币 → 自动转成 pUSD |
| polymarket 怎么充值 usdc | 交易型 | 中 | 低 | polymarket-deposit-usdc | — |
| polymarket 币安 充值 / okx 充值 | 交易型 | 中 / 低-中 | 低 | polymarket-deposit-usdc（分交易所的小节） | ⚠️ 币安在 2026-10-29 被盗后提币分阶段恢复，要写日期 |
| polymarket 提现 / 出金 / 提现到币安 | 交易型 | 中 | 低-中 | polymarket-withdraw | 要讲：提 USDC 而不是 pUSD、核对合约地址 |
| 🆕 polymarket pusd / pusd 是什么 | 信息型 | 低-中（上升） | 低 | polygon-usdc-explained#pusd | 2026-04-28 起的新抵押品，中文内容几乎没有 |
| 🆕 polymarket 入金 最低 / 到账时间 | 信息型 | 低 | 低 | polymarket-deposit-usdc#FAQ | 不写固定数字，写"以入金页为准" |
| 🆕 polymarket 转错链 / 充值没到账 | 信息型 | 低-中 | 低 | wrong-network-withdrawal | 讲官方恢复工具，提醒冒充恢复服务的诈骗 |

### C. 费用与机制

| 关键词（含变体） | 意图 | 需求 | 难度 | 目标页面 | 备注 |
|---|---|---|---|---|---|
| polymarket 手续费 / gas费 | 信息型 | 中 / 低 | 低-中 | polymarket-fees | 2026 年起大部分类别收 taker 费，地缘政治类免费。给公式，注明日期 |
| polymarket 赔率 / 概率怎么看 / 价格 含义 | 信息型 | 中 | 低 | polymarket-odds-explained | 讲"价格就是概率"，内容缺口大 |
| polymarket 怎么下单 | 信息型 | 低-中 | 低 | how-to-use-polymarket#下单 | 限价单和"市价单" |
| polymarket 结算 规则 | 信息型 | 低 | 低 | polymarket-odds-explained#结算 | UMA 预言机；有争议时可能要数天 |
| polymarket 怎么赚钱 / 套利 | 信息型 | 中 | 中 | polymarket-strategies | ⚠️ 必须写风险；不推荐永续合约杠杆 |

### D. 地区、合规、信任

| 关键词（含变体） | 意图 | 需求 | 难度 | 目标页面 | 备注 |
|---|---|---|---|---|---|
| polymarket 中国能用吗 / 大陆 | 信息型 | 高 / 中 | 中 | polymarket-availability-regions | ⚠️ 大陆禁止加密货币交易，本站不面向大陆 |
| polymarket 台湾 | 信息型 | 中 | 低-中 | polymarket-availability-regions#台湾 | ⚠️ 网域已被封锁，对选举下注有刑事追诉 |
| polymarket 香港 | 信息型 | 中 | 低-中 | polymarket-availability-regions#香港 | ⚠️ 投委会警告可能构成非法赌博 |
| polymarket 新加坡 | 信息型 | 低-中 | 低 | polymarket-availability-regions#新加坡 | ⚠️ GRA 已封锁 |
| 🆕 polymarket 马来西亚 / 日本 / 韩国 | 信息型 | 低 | 低 | polymarket-availability-regions | 韩国已封锁；日本前端只能平仓 |
| polymarket 需要vpn吗 | 信息型 | 中 | 中 | polymarket-availability-regions#VPN | ⚠️ **只写官方 ToS 明确禁止**，不教任何绕过方法 |
| polymarket 安全吗 / 靠谱吗 | 信息型 | 中 / 低-中 | 低-中 | is-polymarket-safe | 写 2026 年两次前端供应链攻击、防钓鱼 |
| polymarket 合法吗 | 信息型 | 中 | 中 | is-polymarket-safe#合法性 | 写 CFTC 历史和 Polymarket US |
| polymarket 骗局 | 信息型 | 低 | 低 | is-polymarket-safe#防骗 | 假空投、假 App、假邮件 |

### E. 代币与空投

| 关键词（含变体） | 意图 | 需求 | 难度 | 目标页面 | 备注 |
|---|---|---|---|---|---|
| polymarket 空投 / 空投 怎么撸 | 信息型 | 高（有热点时） / 中 | 中-高 | polymarket-airdrop-token | ⚠️ 尚未发币；写"不保证"，以防骗为主 |
| polymarket 代币 / 发币 | 信息型 | 中 | 中 | polymarket-airdrop-token | 需要持续更新 |

### F. Polymarket 美国版、邀请、对比

| 关键词（含变体） | 意图 | 需求 | 难度 | 目标页面 | 备注 |
|---|---|---|---|---|---|
| polymarket 美国版 / polymarket us 区别 | 信息型 | 中 / 低 | 低-中 | polymarket-us-vs-international | 只有美国居民能用，费率另算 |
| polymarket 邀请码 | 交易型 | 中 | 低-中 | polymarket-referral（或首页 FAQ） | ⚠️ 没有官方的被邀请人福利，不要承诺折扣 |
| polymarket kalshi 区别 | 商业型 | 低-中 | 低 | polymarket-vs-kalshi | — |
| 预测市场 平台 推荐 | 商业型 | 低-中 | 低-中 | polymarket-vs-kalshi / prediction-markets-compared | 可以带上 Opinion、predict.fun、Limitless、Myriad |
| 🆕 币安 预测市场 / okx 事件合约 | 信息型 | 低-中 | 低 | prediction-markets-compared | Binance Wallet 接的是 predict.fun；OKX 只有加密价格涨跌合约 |
| 🆕 gate polymarket / bybit prediction | 交易型 | 低（上升） | 低 | exchange-built-in-polymarket | 在交易所里直接参与 Polymarket 市场，不用自己提币 |

### G. USDC 与网络

| 关键词（含变体） | 意图 | 需求 | 难度 | 目标页面 | 备注 |
|---|---|---|---|---|---|
| usdc 是什么 | 信息型 | 高 | 中-高 | what-is-usdc | 交易所学院和百科占位 |
| usdc 和 usdt 区别 | 信息型 | 中 | 中 | what-is-usdc | 对比格式 |
| usdc 怎么买 / 购买 教程 | 交易型 | 高 / 中 | 中 | how-to-buy-usdc | **核心导流词** |
| usdc polygon / usdc.e 和 usdc 区别 | 信息型 | 中 / 低-中 | 低-中 | polygon-usdc-explained | 附两个合约地址 |
| polygon 网络 是什么 | 信息型 | 中 | 中 | polygon-usdc-explained | 交易所界面里的 MATIC 和 POL 网络名 |
| 币安 提币 polygon / okx 提币 polygon | 交易型 | 中 / 低-中 | 低 | 各交易所的注册教程#提币 + polymarket-deposit-usdc | 带截图的教程容易胜出 |
| 提币选错网络 / 选错了怎么办 | 信息型 | 中 | 低-中 | wrong-network-withdrawal | 痛点词，用 FAQ 格式 |

### H. 交易所（注册、邀请码、对比）

| 关键词（含变体） | 意图 | 需求 | 难度 | 目标页面 | 备注 |
|---|---|---|---|---|---|
| 币安 注册 / 注册教程 | 交易型 | 高 | 高 | binance-register-guide | 返佣站非常拥挤；靠"带 Polygon 提币"做差异化 |
| 币安 邀请码 / 幣安 推薦碼(繁) / 币安 返佣 | 交易型 / 商业型 | 高 / 中 / 中 | 高 / 中-高 / 高 | binance-register-guide#邀请码 | ⚠️ 返佣比例只写"以注册页为准" |
| 币安 手续费 | 信息型 | 中 | 中-高 | binance-register-guide#手续费 | 现货 0.1%，用 BNB 抵扣 0.075% |
| 币安 台湾 能用吗 / 币安 香港 | 信息型 | 中 | 中 | binance-register-guide#地区 + 地区页 | ⚠️ 香港无牌；马来西亚已封锁 |
| okx 注册 / 欧易 注册教程 | 交易型 | 高 / 中-高 | 高 | okx-register-guide | — |
| okx 邀请码 | 交易型 | 中-高 | 高 | okx-register-guide#邀请码 | ⚠️ 被邀请人返佣 0–20%，由邀请方设定 |
| okx 手续费 | 信息型 | 中 | 中 | okx-register-guide#手续费 | 现货 0.08% / 0.10% |
| bitget 注册 / 邀请码 | 交易型 | 中 | 中 | bitget-register-guide | — |
| gate 注册教程 / 邀请码 | 交易型 | 中 / 低-中 | 中 | gate-register-guide | 写清新域名 gate.com |
| bybit 注册 / 邀请码 | 交易型 | 中 / 低-中 | 中 | bybit-register-guide | — |
| bybit 香港 | 信息型 | 低-中 | 低-中 | bybit-register-guide#地区 | ⚠️ 约 2024 年撤回香港牌照申请 |
| 交易所 哪个好 / 加密货币交易所 排名 | 商业型 | 高 / 中 | 高 | best-exchange-buy-usdc | 榜单格式 |
| 币安 okx 哪个好 | 商业型 | 中 | 中 | binance-vs-okx | — |
| 交易所 安全吗 | 信息型 | 中 | 中 | best-exchange-buy-usdc#安全 | 写储备金证明、牌照、2025–2026 年的被盗事件 |
| 买 usdc 哪个交易所 手续费低 | 商业型 | 低-中 | 低 | best-exchange-buy-usdc | **长尾空位** |
| polymarket 用哪个交易所 | 商业型 | 低-中 | 低 | best-exchange-buy-usdc | **本站的独特角度** |

## 2. 竞争对手（推测，未经 SERP 核实）

- **Polymarket 信息类词**：
  - 简体加密媒体：律动 BlockBeats、PANews、Odaily、深潮 TechFlow、Foresight News。
  - 繁体加密媒体：動區 BlockTempo、鏈新聞 ABMedia。
  - 交易所内容站：Binance Square、OKX 学院、Bitget 和 Gate 的学院。
  - 知乎、Medium、Mirror 上的个人长文，以及 X 上的长推文。
- **交易所注册和邀请码类词**：
  - 返佣站和子域名站。
  - hackmd.io、GitHub Pages、notion.site 这类托管页面（这只是一种说法，**尚未核实**）。
  - 交易所自己的推荐页和帮助中心。
  - 这类词难度高，新站应借助 Polymarket 相关的长尾词带流量进来，而不是硬拼头部词。
- **英文联盟站的中文翻译或镜像**：startpolymarket.com 等。注意：该站含有针对 AI 的提示注入，**不要引用，也不要模仿**。
- **USDC 和网络类词**：Circle 官方、交易所帮助中心、百科类站点。

## 3. 内容缺口（可利用，需要 SERP 复核）

1. **端到端漏斗教程**：交易所注册 → 买 USDC → 选 Polygon 提币 → Polymarket 入金（自动转成 pUSD）→ 下单 → 提 USDC 回交易所。现有中文内容大多只覆盖其中一段，而且多数还停留在 USDC.e 时代。
2. **pUSD 的中文解释**：2026-04 的升级在中文内容里几乎是空白。
3. **"价格就是概率"的可视化讲解，以及 2026 年新费率公式的计算示例**，并说明媒体常写的 1.75% 和 3.5% 是两种不同口径。
4. **按地区写的合规 FAQ**（台湾、香港、新加坡、马来西亚、日本、韩国），注明官方来源和日期，**明确不教 VPN**。现有内容常常过时，或在暗示用 VPN 绕过。
5. **"选错网络 / 转错币"急救指南**：引用 Polymarket 官方的恢复工具，并按交易所分别写。
6. **"买 USDC 用哪个交易所"对比表**：比较是否支持 Polygon 上的 USDC、手续费量级、在各地区能否使用。
7. **在交易所内直接参与 Polymarket 市场**（Gate、Bybit Prediction）：几乎没有中文对比内容。
8. **安全专题**：2026 年两次前端供应链攻击、假 POLY 空投、假 App、Binance 被盗后提币恢复的情况。
9. **繁体版本**：头部词簇的繁体竞争预计较弱。

## 4. 推荐文章清单（已去重、排好优先级）

P1 为上线首批，P2 为第二批，P3 为后续补充。

| 优先级 | 中文标题（≤32 字） | slug | 主关键词 | 次关键词 | 意图 |
|---|---|---|---|---|---|
| P1 | Polymarket是什么？新手完整入门指南 | what-is-polymarket | polymarket 是什么 | 预测市场 是什么, polymarket 教程 | 信息型 |
| P1 | Polymarket怎么玩：从注册到下单全流程 | how-to-use-polymarket | polymarket 怎么玩 | 注册教程, 怎么下单, 钱包 | 信息型 |
| P1 | Polymarket怎么充值：交易所提USDC教程 | polymarket-deposit-usdc | polymarket 充值 | 入金, 币安 提币 polygon, okx 充值 | 交易型 |
| P1 | Polymarket提现教程：USDC提回交易所 | polymarket-withdraw | polymarket 提现 | 出金, 提现到币安 | 交易型 |
| P1 | 买USDC用哪个交易所？五大平台对比 | best-exchange-buy-usdc | polymarket 用哪个交易所 | 交易所 哪个好, 买 usdc 手续费低 | 商业型 |
| P1 | USDC怎么买？新手购买教程 | how-to-buy-usdc | usdc 怎么买 | usdc 购买 教程 | 交易型 |
| P1 | Polymarket在台湾、香港、新加坡能用吗？ | polymarket-availability-regions | polymarket 中国能用吗 | 台湾, 香港, 新加坡, 需要vpn吗 | 信息型 |
| P1 | 币安注册教程（含提币到Polygon） | binance-register-guide | 币安 注册教程 | 币安 邀请码, 币安 手续费 | 交易型 |
| P1 | OKX欧易注册教程与邀请码说明 | okx-register-guide | okx 注册 | 欧易 注册教程, okx 邀请码 | 交易型 |
| P2 | Bitget注册教程与邀请码 | bitget-register-guide | bitget 注册 | bitget 邀请码 | 交易型 |
| P2 | Gate注册教程与邀请码 | gate-register-guide | gate 注册教程 | gate 邀请码 | 交易型 |
| P2 | Bybit注册教程与邀请码 | bybit-register-guide | bybit 注册 | bybit 邀请码, bybit 香港 | 交易型 |
| P2 | Polymarket赔率怎么看：价格就是概率 | polymarket-odds-explained | polymarket 概率怎么看 | 赔率, 价格 含义, 结算 规则 | 信息型 |
| P2 | Polymarket手续费全解析（2026新规） | polymarket-fees | polymarket 手续费 | gas费 | 信息型 |
| P2 | Polymarket安全吗？合法吗？风险与防骗 | is-polymarket-safe | polymarket 安全吗 | 合法吗, 骗局, 靠谱吗 | 信息型 |
| P2 | 提币选错网络怎么办？急救指南 | wrong-network-withdrawal | 提币选错网络 | 选错网络怎么办, polymarket 转错链 | 信息型 |
| P2 | USDC是什么？和USDT有什么区别 | what-is-usdc | usdc 是什么 | usdc 和 usdt 区别 | 信息型 |
| P2 | Polygon、USDC、USDC.e与pUSD一次讲清 | polygon-usdc-explained | usdc polygon | usdc.e 和 usdc 区别, pusd 是什么 | 信息型 |
| P2 | Polymarket空投与代币：现状与防骗 | polymarket-airdrop-token | polymarket 空投 | 代币, 发币 | 信息型 |
| P2 | 币安和OKX哪个好？新手对比 | binance-vs-okx | 币安 okx 哪个好 | 交易所 哪个好 | 商业型 |
| P2 | Polymarket是什麼？新手入門（繁體） | zh-hant/what-is-polymarket | polymarket 是什麼 | polymarket 怎麼玩 | 信息型 |
| P3 | 在交易所里玩Polymarket：Gate与Bybit | exchange-built-in-polymarket | gate polymarket | bybit prediction | 交易型 |
| P3 | Polymarket怎么赚钱？策略与风险 | polymarket-strategies | polymarket 怎么赚钱 | 套利 | 信息型 |
| P3 | Polymarket美国版与国际版区别 | polymarket-us-vs-international | polymarket 美国版 | polymarket us 区别 | 信息型 |
| P3 | Polymarket App下载与防假冒指南 | polymarket-app | polymarket app 下载 | polymarket app | 导航型 |
| P3 | Polymarket与Kalshi对比 | polymarket-vs-kalshi | polymarket kalshi 区别 | 预测市场 平台 推荐 | 商业型 |
| P3 | 预测市场平台对比：Kalshi、Opinion等 | prediction-markets-compared | 预测市场 平台 推荐 | 币安 预测市场, okx 事件合约 | 商业型 |

**内链建议**：
- 所有教程都链回支柱页 how-to-use-polymarket。
- 入金页链到 best-exchange-buy-usdc 和各交易所的注册教程。
- 每篇涉及地区的文章都链到 polymarket-availability-regions。
- 交易所注册页的推荐链接按地区展示：可用性未核实的地区先不展示，或者只给出风险提示。
