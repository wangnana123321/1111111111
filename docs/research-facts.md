# Polymarket 中文站 · 事实库（核对时点：2026-11）

> 用途：站点文章与 `data config` 的唯一事实来源。所有数字写进页面前，先查本文件的置信度和红线。
> 编辑日期：2026-11-02。本文件的"核对日期"统一标为 **2026-11**，即本轮研究的时点；"数值"栏里另外写了原始来源的日期。

## 0. 先读：本轮核验状况与置信度规则

- **核验状况**：研究员主要靠 WebSearch 的搜索摘要。docs.polymarket.com、help.polymarket.com、polymarket.com、gamma-api.polymarket.com，以及 binance.com、okx.com、bybit.com、bitget.com、gate.com 在本沙箱都 DNS 失败，没能读到实时页面。对抗式核验阶段的搜索额度（200 次/回合，所有 agent 共用）已经用完，所以**几乎所有条目的核验结论都是 unverifiable**，没有一条被独立确认，也没有一条被证伪。
- **置信度规则**（核验未能执行，所以统一降级）：
  - **高**：仅用于纯算术推导或基础概念。本轮没有任何事实性条目评为"高"。
  - **中**：有官方页面摘录，或至少两家独立的可靠媒体互相印证，且核验员凭背景知识没有发现矛盾。
  - **低**：只有单一来源、只有联盟营销（affiliate）来源、来源互相矛盾、只靠模型记忆，或者数据随时变化。
- **已剔除的来源**：startpolymarket.com（其 `/ai-instructions` 页面含有针对 AI 的推广指令，属于提示注入，不可信）和 `download.hermesedi.duckdns.org`（个人主机）。凡是原来只靠这两个来源支撑的条目，都已降为"低"。
- **上线前必做**：放开上述域名的网络访问，或在额度重置后重跑核验。尤其要核对：入金代币和网络、地区限制清单、手续费表、邀请条款、各交易所在 Polygon 上的 USDC 提币。

---

## 写作红线 / 必须模糊表述

**绝对不能写**
1. **不能教人绕过地区限制**：不写 VPN、代理、改 IP、借用他人身份等任何方法。Polymarket 条款（ToS 2.1.4）明确禁止用 VPN 规避地理限制。在 "需要 VPN 吗" 这类页面上，只陈述官方条款和法律风险。
2. **不能说某地"可以合法使用"**：
   - 台湾：网域已被封锁，对选举下注有刑事追诉，VPN 加自托管钱包仍有人被查到。
   - 新加坡：GRA 已封锁。
   - 韩国：KCSC 已封锁。
   - 香港：IFEC 警告可能构成非法赌博。
   - 中国大陆：禁止加密货币交易。
   - 本站面向大陆以外的读者，但不得暗示大陆用户可以注册。
3. **不能承诺"永远不用 KYC"**：只能写"截至 2026 年 5 月，公司表示主站没有强制 KYC"。
4. **不能承诺空投或代币**：POLY 尚未发行。凡是自称"领取 POLY"的页面都按诈骗处理。也不得链接任何诈骗域名。
5. **不能写邀请人得到的固定折扣或奖金**：Polymarket 国际站没有找到任何官方的被邀请人福利。交易所的被邀请人返佣比例由推荐人设定，各家还会调整，只能写"最高 X%，以注册页为准"，而且 X 也要先核实。
6. **不能自己拼 Polymarket 邀请链接**：参数是 `?r=` 还是 `?via=` 没有确认。一律使用站长日后提供的真实链接。
7. **不能把 Polymarket US 的费率、州列表、入金方式混进国际版教程。**
8. **不能把"被指控"写成"已定罪"**：涉及内幕交易案时措辞用"被起诉 / 涉嫌"。
9. **不能推荐 20 倍永续合约**：对新手只做风险提示。

**必须模糊表述或标注日期**
- **手续费**：写公式和"以下单预览为准"。费率表如果要放，必须注明"2026-10 参考，可能已变"。体育类费率存在 0.03 和 0.05 的例外。
- **入金最低额**：官方文档约为 $2 / $7 / $9，第三方写的是 $3 / $10，两者冲突。页面上一律写"以入金页面显示的最低额为准"。
- **交易所提币手续费和最低额**：全部是动态数据，各个追踪站之间也有冲突。写"通常约 1 USDC 或更低，以提币页显示为准"，不要写具体数字。
- **Polymarket 提现回交易所用的代币**：写"选择 USDC（Polygon），不要把 pUSD 或 USDC.e 直接发到交易所"，并提示读者在交易所充值页核对合约地址：
  - 原生 USDC：`0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359`
  - USDC.e：`0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174`
- **Protocol V2 上线日期**：2 日还是 9 日存在冲突，写"计划于 2026 年 11 月上线（以官方公告为准）"。
- **安全事件金额**：写区间，例如"约 250 万–270 万美元"。不点名第三方供应商。
- **Binance 2026-10-29 被盗事件和提币恢复**：事态还在快速变化。凡是提到 Binance 的入金教程，都要附上日期，并链接官方公告。
- **国家或地区的具体限制等级**（全封锁 / 仅可平仓）：来源互相冲突，统一写"无法开新仓"。
- **各交易所在香港、台湾、新加坡、马来西亚是否可用**：大多未核实。按地区展示推荐链接之前必须查清。
- **交易量、估值、市场份额**：各家口径不同，只能写"据 某某 报道"，并注明日期。

---

## 1. Polymarket 平台机制

| 项目 | 数值 | 置信度 | 核对日期 | 来源 |
|---|---|---|---|---|
| 注册方式 | Google、Email（6 位验证码）、加密钱包（MetaMask、Rabby、Phantom）。钱包注册需要签名两次：一次连接，一次启用交易。Coinbase Wallet 只出现在第三方指南中 | 中 | 2026-11 | https://help.polymarket.com/en/articles/13369877-how-to-sign-up ; https://docs.polymarket.com/polymarket-learn/get-started/how-to-signup |
| 钱包性质 | Email 和 Google 账户使用非托管的代理钱包（由 Magic 提供），私钥可以导出。每个用户有自己的入金地址，每次都要从 Deposit 页重新复制 | 低 | 2026-11 | 核验员背景知识，无来源 |
| 主站 KYC | 2026-05-27，The Information 报道 Polymarket 在推身份验证。工程副总裁 Josh Stevens 回应："No KYC is being added to any part of existing polymarket.com"，ID 验证只用于一个 beta 新产品。截至 2026-10，未见主站强制 KYC 的报道。部分账户可能在合规审查中被要求提交资料（只有第三方说法） | 中（属公司声明） | 2026-11 | https://coinmarketcap.com/academy/article/polymarket-kyc-beta-product ; https://www.crowdfundinsider.com/2026/05/282200-prediction-markets-polymarket-pushes-for-trader-identity-verification-due-to-regulatory-and-sanctions-pressures/ ; https://www.cryptotimes.io/2026/05/28/polymarket-denies-mandatory-kyc-plans-for-main-platform/ |
| 移动 App | 官方帮助中心说明：polymarket.com 面向美国以外的用户，用浏览器访问；iOS App Store 上的 App 是美国版，Android 显示 "Coming soon"。第三方另有说法称 2026-05 起 iOS 对所有人开放，两者冲突。站内写法："以官网指引为准，谨防假 App" | 低 | 2026-11 | https://help.polymarket.com/en/articles/15458828-website-vs-app-what-s-the-difference ; https://polymarket.review/app/ |
| 年龄要求 | 18 岁以上（或当地法定年龄）。ToS 当前原文未核实 | 低 | 2026-11 | 核验员背景知识，无来源 |
| 份额机制 | 每份价格在 $0–$1 之间，结果正确时兑付 $1，否则为 $0。价格可以理解为市场隐含概率。采用 CLOB（中央限价订单簿），结算前可随时卖出 | 中（长期基础机制） | 2026-11 | https://docs.polymarket.com/trading/orders/overview ; https://docs.polymarket.com/trading/ctf/overview |
| 订单类型 | 所有订单在技术上都是限价单，"市价单"是可立即成交的限价单。每个市场有自己的 tick（0.1 / 0.01 / 0.001 / 0.0001）和最小下单份数，文档示例是 5 份。"市价单最低 $1" 只是第三方说法 | 中（tick 和市价单定义）；低（最小额） | 2026-11 | https://docs.polymarket.com/trading/orders/create ; https://docs.polymarket.com/trading/place-orders |
| 多结果市场（neg-risk） | 赢家通吃的多结果事件，可以把任一结果的 1 份 NO 转换成其余每个结果各 1 份 YES。Protocol V2 下称为 "atomic neg-risk"，描述方式可能会变 | 中 | 2026-11 | https://docs.polymarket.com/concepts/negative-risk ; https://docs.polymarket.com/advanced/neg-risk |
| 结算（UMA） | 使用 UMA Optimistic Oracle：提案人缴纳保证金（约 $750），之后有 2 小时挑战期。第一次争议后重新提案，第二次争议进入 UMA 持币人投票（约 48 小时）。有争议的市场可能要 4–6 天。参数可以通过治理修改。站内写"有争议时可能需要数天"，不写具体数字 | 低 | 2026-11 | https://crypto.news/how-prediction-markets-resolve-uma-optimistic-oracle/ ; https://www.polycatalog.io/how-polymarket-resolution-works |
| UMA 争议 | 2026-05 WSJ 调查：多数争议市场里，前 10 大钱包的票数过半，约 1/5 的争议中有投票人持有该市场的仓位。公司称只有约 0.2% 的市场进入 UMA 投票 | 低（WSJ 原文未读到） | 2026-11 | https://cryptobriefing.com/polymarket-dispute-resolution-scrutiny/ |
| Gas | Polymarket 的 relayer 代付 Polygon 上的 gas，包括部署钱包、授权、拆分、合并和赎回，用户不需要持有 POL | 中 | 2026-11 | https://docs.polymarket.com/trading/gasless |
| 抵押品 pUSD | 2026-04-28 11:00 UTC 进行 "Exchange Upgrade"（CTF Exchange V2 / CLOB v2），抵押品由 USDC.e 换成 **pUSD**。pUSD 是 Polygon 上的 ERC-20，官方说法是 1:1 由 USDC 支持（Simmer 写的是 USDC.e，与官方冲突）。网页用户签一次名即可 1:1 免费转换，升级前的挂单全部清空。最早报道的计划日期是 04-22 | 中 | 2026-11 | https://docs.polymarket.com/concepts/pusd ; https://help.polymarket.com/en/articles/14762452-polymarket-exchange-upgrade-april-28-2026 ; https://www.cryptotimes.io/2026/04/28/polymarkets-clob-v2-goes-live-with-1m-rewards-new-pusd-token/ |
| Protocol V2 | 2026-10-05 宣布：用单一的 ERC-1155 PositionManager 合约取代 Gnosis CTF，pUSD 作为唯一抵押品，支持 Chainlink 加 UMA 双预言机。新市场切换日期：官方原定 2026-11-02（标注为 tentative），另有 KuCoin 快讯说推迟到 **11-09**，以避开美国中期选举那一周。两者冲突。旧仓位不迁移，用户可能需要重新授权 | 低 | 2026-11 | https://docs.polymarket.com/protocol-v2-migration ; https://coingape.com/polymarket-unveils-protocol-v2-targets-nov-2-switch-to-a-single-pusd-market/ ; https://www.kucoin.com/news/flash/polymarket-delays-protocol-v2-launch-to-november-9-to-avoid-u-s-midterm-election-week |
| 自有链 | 2025-12 宣布要从 Polygon 迁到自建的以太坊 L2（据称名为 POLY）。截至 2026-09 尚未上线，没有时间表，目前仍在 Polygon 上 | 低 | 2026-11 | https://www.kucoin.com/news/flash/polymarket-to-migrate-from-polygon-launches-own-ethereum-layer2-network |
| 永续合约 | 只对国际用户开放，最高 20 倍杠杆。2026-04-21 宣布，约 05-28 进入 beta，约 09-03 正式上线。各来源给的日期不一致。不要向新手推荐 | 低 | 2026-11 | https://www.cnbc.com/2026/04/21/polymarket-launches-trading-of-heavily-leveraged-perps-contracts.html ; https://www.blockhead.co/2026/09/07/polymarket-launches-perpetual-futures-with-up-to-20x-leverage-across-crypto-stocks-commodities/ |
| 持仓奖励 | 2025-09 起，部分长期市场按年化约 4% 发放持仓奖励。2026-11 是否还在运行未知，不要当作现行福利来写 | 低 | 2026-11 | https://www.cryptopolitan.com/polymarket-starts-paying-out-4-rewards/ |
| 流动性奖励 | 挂单做市者每日 00:00 UTC 领取奖励，2026 年有多期专项活动。与 maker rebate 是两回事，主要面向进阶用户 | 低 | 2026-11 | https://docs.polymarket.com/programs/liquidity-rewards |
| 安全事件 2026-06 | 第三方依赖向前端注入恶意脚本，诱导用户签署有害授权，约 $2.9M–3.1M 被盗。公司承诺赔付，智能合约本身未受影响 | 低（各来源金额不一） | 2026-11 | https://www.bleepingcomputer.com/news/security/polymarket-customers-lose-3-million-in-supply-chain-attack/ ; https://coinmarketcap.com/academy/article/polymarket-hackers-drain-2-9m-user-wallets-refunds |
| 安全事件 2026-10-29 | 第三方供应商被入侵，约 $2.5M–2.73M 被盗，涉及约 710–737 个钱包。国际站进入 cancel-only 约 1 小时。公司宣布约 $3.9M 的赔付方案（其中约 $1.2M 用于补偿停盘期间的损失），损失超过 $10k 的用户据报需要签署免责书。赔付是否已完成未确认。研究员关联到 DebugBear，但公司没有点名，**站内不点名** | 中（多家媒体报道，数字取区间） | 2026-11 | https://www.theblock.co/news/defi/2026-10-29-polymarket-exploit-2-5-million-cancel-only-mode-432158 ; https://www.coindesk.com/markets/2026/10/29/polymarket-suspends-trading-after-third-party-breach-leads-to-user-losses ; https://thehackernews.com/2026/11/hackers-steal-about-27-million-from.html |

---

## 2. 入金与出金

| 项目 | 数值 | 置信度 | 核对日期 | 来源 |
|---|---|---|---|---|
| 推荐路线（本站漏斗） | 在交易所买 USDC，选 **Polygon** 网络提币到 Polymarket 的入金地址，资金会自动转成 pUSD。这条路线最简单、成本最低。正式发布前必须在 Deposit 页实测确认 | 中（路线）；低（细节） | 2026-11 | https://docs.polymarket.com/trading/bridge/deposit |
| 多链入金桥 | 支持 Ethereum、Polygon、Base、Arbitrum、Optimism、Solana、Bitcoin、Tron、BNB Chain 等链，全部自动换成 Polygon 上的 pUSD。官方说支持的资产清单会变。镜像文档还列出了 HyperEVM、Abstract、Monad | 中 | 2026-11 | https://docs.polymarket.com/trading/bridge/supported-assets ; https://docs.polymarket.com/trading/bridge/deposit |
| USDT 入金 | 官方支持资产清单里有多条链上的 USDT（包括 Tron），会自动转换。写"USDC 走 Polygon 最稳，其他组合以入金页面为准" | 低 | 2026-11 | https://docs.polymarket.com/trading/bridge/supported-assets |
| 原生 USDC 和 USDC.e | 据称网页入金时，Polygon 上的原生 USDC 和 USDC.e 都会 1:1 转成 pUSD。没有找到覆盖所有入金流程的官方说法。Simmer 文档警告：API 的 "Deposit Wallet" 收到 Polygon 上 USDC.e 和 pUSD 以外的资产可能无法找回 | 低 | 2026-11 | https://docs.simmer.markets/v2-migration ; https://www.swopme.co/blog/usdc-vs-usdce |
| 入金最低额 | 官方桥文档：Base、Solana、Polygon、Arbitrum、Optimism 约 $2；Ethereum 约 $7；Bitcoin 和 Tron USDT 约 $9。第三方写 $3 / $10，**两者冲突**。低于最低额的入金不处理，或一直挂起 | 低 | 2026-11 | https://docs.polymarket.com/trading/bridge/supported-assets ; https://blog.predictefy.com/polymarket-deposit-guide-2026-every-method |
| 到账时间 | 通常几分钟，取决于链上确认和交易所的处理速度。没有官方数字 | 低 | 2026-11 | https://predictreport.io/blog/how-to-deposit-polymarket |
| 刷卡入金 | 通过 MoonPay（支持 Apple Pay、Google Pay），另有 Coinbase 账户连接。MoonPay 手续费约 1–4.5%（第三方数据），是否可用要看所在国家。Polymarket 本身不收入金费 | 低 | 2026-11 | https://predscope.com/guide/how-to-deposit-on-polymarket ; https://laikalabs.ai/prediction-markets/how-to-deposit-on-polymarket |
| 转错币或转错链 | Ethereum 上转错的资产可以用 recovery.polymarket.com 找回；Polygon 上非 pUSD 的代币可以试 Polygon 恢复工具；Base、Arbitrum、Optimism、BSC 需联系客服；其他链目前无法找回。**转到 CTF Exchange 合约的资金永久丢失**。注意冒充"恢复服务"的诈骗 | 中 | 2026-11 | https://help.polymarket.com/en/articles/13364241-recover-missing-deposit |
| 提现手续费 | Polymarket 收 $0。用户仍要承担网络或桥的费用（Polygon gas 不到 $0.01），以及交易所那一端的费用 | 中 | 2026-11 | https://docs.polymarket.com/trading/bridge/withdraw |
| 提现链和代币 | 官方桥文档支持 EVM、Solana、BTC、Tron 地址；界面默认是 Polygon 上的 USDC，也可以直接提 pUSD。部分第三方说只能提到 Polygon，与官方冲突。另有来源对提出来的是原生 USDC 还是 USDC.e 说法不一。**建议**：提回交易所时选 USDC（Polygon），不要提 pUSD，并在交易所核对合约地址 | 低 | 2026-11 | https://docs.polymarket.com/trading/bridge/withdraw ; https://pm.wiki/learn/polymarket-withdrawal-guide |
| 提现时间 | 链上确认后几分钟到账。银行 ACH 或电汇 1–4 个工作日只适用于 Polymarket US | 低 | 2026-11 | https://docs.polymarket.com/trading/bridge/withdraw |
| 最低提现额 | unknown。第三方说 Polymarket 没有最低额，但桥和交易所各自有最低额 | 低 | 2026-11 | https://blog.predictefy.com/polymarket-withdrawal |

---

## 3. 手续费

| 项目 | 数值 | 置信度 | 核对日期 | 来源 |
|---|---|---|---|---|
| 2026 年费用时间线 | 约 2026-01-05 起，15 分钟加密市场收 taker 费；约 03-06 扩展到所有加密时间框；02-18 起体育市场开始收（先是 NCAAB 和 Serie A）；**2026-03-30 起几乎所有类别都收 taker 费** | 中 | 2026-11 | https://www.theblock.co/post/384461/polymarket-adds-taker-fees-to-15-minute-crypto-markets-to-fund-liquidity-rebates ; https://www.crowdfundinsider.com/2026/03/268884-polymarket-to-impose-taker-fees-on-nearly-all-trading-categories/ |
| 免费类别 | Geopolitics / 世界事件仍然免手续费，是唯一的免费类别 | 中 | 2026-11 | https://docs.polymarket.com/trading/fees ; https://www.crowdfundinsider.com/2026/03/268884-polymarket-to-impose-taker-fees-on-nearly-all-trading-categories/ |
| 公式 | fee = 份数 × feeRate × p × (1 − p)。价格 50¢ 时手续费最高，结果保留 5 位小数，maker 不收费。约 03-31 至 04-01 期间公式出错，天气和经济类市场一度出现极端费率（据报最高 94.8%），之后已修正 | 中 | 2026-11 | https://docs.polymarket.com/trading/fees ; https://www.kucoin.com/news/flash/polymarket-fee-formula-change-sparks-94-8-fee-spike |
| 各类别 feeRate | Crypto 0.07；Sports 0.05；Finance、Politics、Tech、Mentions 0.04；Economics、Culture、Weather、Other 0.05；Geopolitics 0。数据只来自中文文档页。**例外**：老的体育市场仍是 0.03；另有单一来源称 10 月起 NFL 和大学橄榄球单场市场回到 0.03 | 低 | 2026-11 | https://docs.polymarket.com/cn/programs/maker-rebates ; https://docs.polymarket.com/trading/fees |
| 每 100 份在 50¢ 时的最高费用 | 按公式推算：0.07 档 $1.75，0.05 档 $1.25，0.04 档 $1.00，分别相当于 $50 成本的 3.5%、2.5%、2%。**算术本身可靠，但依赖的费率未核实** | 低 | 2026-11 | 由上面的公式推导 |
| 媒体常见百分比的口径 | 媒体写的"加密最高约 1.8%、体育约 0.75%"，是按每份 $1 名义金额算的（0.07×0.25=1.75%；0.03×0.25=0.75%，用的是旧体育费率），和按成本算的 3.5% 并不矛盾。**页面上不要混用两种口径** | 中（推导） | 2026-11 | https://www.gamblinginsider.com/news/150287/polymarket-fees-expansion-referral-program |
| 体育费率调整 | 2026-07（一说 07-10）由 0.03 调到 0.05，maker rebate 由 25% 降到 15% | 低 | 2026-11 | https://docs.polymarket.com/changelog ; https://igamingbusiness.com/prediction-markets/polymarket-sports-fee-hike-2026/ |
| Maker rebate | maker 不收费，并按比例分得 taker 费：Crypto 20%、Sports 15%、其他多数类别 25%，每日发放。也有媒体写"20–50%"，与此冲突。新手文章不必写具体比例 | 低 | 2026-11 | https://docs.polymarket.com/programs/maker-rebates |
| Builder 费 | 第三方前端可以在平台费之外再加最多 100 bps（1%），默认为 0 | 低（单一官方摘录） | 2026-11 | https://docs.polymarket.com/programs/builders/fees |
| 入金和出金费 | Polymarket 收 $0。实际成本来自交易所的提币费、链上 gas、桥或兑换的价差，以及刷卡通道的手续费 | 中 | 2026-11 | https://docs.polymarket.com/trading/bridge/withdraw |

---

## 4. 地区限制与合规

| 项目 | 数值 | 置信度 | 核对日期 | 来源 |
|---|---|---|---|---|
| 三级限制 | 开发者文档分三级：(1) 完全封锁，不能下单也不能平仓；(2) 前端和 API 都只能平仓；(3) 只在前端限制为仅可平仓，API 不受限（例如马耳他只限体育市场，日本也在这一级） | 低 | 2026-11 | https://docs.polymarket.com/api-reference/geoblock |
| 检测端点 | `GET https://polymarket.com/api/geoblock`，返回 `blocked`（布尔值）、`ip`、`country`（ISO 两位代码）、`region` | 中（2025 年版文档与背景知识一致） | 2026-11 | https://docs.polymarket.com/api-reference/geoblock |
| 帮助中心清单 | 标题写 39 国，表格里列了 40 国；据报 2026-08-14 更新；另有对新加坡、波兰"仅可平仓"的单独说明。页面内部自相矛盾，**站内不写具体国家数** | 低 | 2026-11 | https://help.polymarket.com/en/articles/13364163-geographic-restrictions |
| 2026 年分级变化 | 2026 年 9–10 月的追踪站称，现在只有 OFAC 制裁地区完全封锁：古巴、伊朗、朝鲜、叙利亚，以及乌克兰的克里米亚、顿涅茨克、卢甘斯克，有的来源还加上俄罗斯。美、英、法、德、意、比、澳、波兰、新加坡、泰国、台湾，以及加拿大的安大略、阿尔伯塔、BC、魁北克等地据报改为仅可平仓。**对新用户来说，结果都是不能开新仓** | 低 | 2026-11 | https://www.coinperps.com/learn/polymarket-restricted-countries ; https://www.datawallet.com/crypto/polymarket-restricted-countries |
| VPN | Polymarket "strictly prohibits the use of VPNs or similar tools to bypass geographic restrictions"（ToS 2.1.4），违反者可能被限制为仅可平仓，或账户被处理 | 中 | 2026-11 | https://help.polymarket.com/en/articles/13364163-geographic-restrictions |
| 台湾 | 在 Polymarket 限制清单内（仅可平仓或封锁，等级说法不一）。网域 2023 年就被封过，2026-05 苗栗地院再次封锁，2026-10-07 南投地院要求 TWNIC 停止解析。对 2026 九合一选举下注的人已有刑事追诉，第一起起诉在 2026-05-08（742.96 USDC，通过 MAX 交易所的 KYC 查到本人，用了 VPN 也没用）。适用法条据称是公职人员选举罢免法 §103-1（最高 6 个月），**条号需到全国法规资料库核对** | 中（封锁和追诉）；低（条号和限制等级） | 2026-11 | https://www.blocktempo.com/taiwan-blocks-polymarket-election-betting-prosecution-vpn-onchain-tracking/ ; https://www.cryptocity.tw/news/polymarket-2026-taiwan-election-betting-arrested |
| 新加坡 | GRA 自 2025-01 起要求 ISP 封锁（依据 Gambling Control Act），Polymarket 也将其列为受限。据报在无牌平台赌博的个人最高可罚 SGD 10,000 和/或监禁 6 个月（罚则未核实） | 中（封锁）；低（罚则） | 2026-11 | https://www.bloomberg.com/news/articles/2025-01-15/singapore-thailand-move-to-block-crypto-betting-site-polymarket ; https://www.bangkokpost.com/business/general/2940482/singapore-thailand-move-to-block-polymarket |
| 泰国 | 2025-01 泰国警方提议封禁，Polymarket 据报将其列为仅可平仓 | 中（提议封禁）；低（限制等级） | 2026-11 | https://www.theblock.co/news/regulation/2025-01-15-thailand-proposes-banning-polymarket-amid-online-gambling-crackdown-334678 |
| 香港 | 不在 Polymarket 限制清单内（只有第三方追踪站这么说）。2026-04-16/17，投委会（IFEC，证监会旗下的投资者教育机构，**不是监管命令**）警告：参与预测市场交易可能构成非法赌博，且不受《证券及期货条例》保障。没有封锁的报道 | 中（警告）；低（不在清单内） | 2026-11 | https://agbrief.com/news/hong-kong/18/04/2026/hong-kong-flags-prediction-markets-as-potential-illegal-gambling-activity/ ; https://www.stheadline.com/daily-hongkong/3563257/ ; https://polykal.net/availability/hong-kong/ |
| 马来西亚和澳门 | 据第三方追踪站，不在 Polymarket 限制清单内。马来西亚赌博法规严格，属于灰色地带。**不要写"可以用"** | 低 | 2026-11 | https://www.coinrithm.com/en/blog/polymarket-countries-and-availability |
| 中国大陆 | Polymarket 自己的清单上有没有大陆，各来源说法冲突。实际上被防火墙挡住，且 2021 年人民银行已宣布虚拟货币交易为非法金融活动。本站不面向大陆 | 中（禁令）；低（是否在清单） | 2026-11 | https://www.finextra.com/blogposting/31345/where-are-prediction-markets-legal-polymarket-kalshi-and-pariflow-availability-by-country |
| 日本 | 前端仅可平仓（约 2026-04 起），是平台自己的决定。2026-06 bitbank 警告：与 Polymarket 相关的转账可能导致账户被停用 | 低 | 2026-11 | https://docs.polymarket.com/api-reference/geoblock ; https://news.bitcoin.com/bitbank-drops-polymarket-warning-japan-traders-face-account-suspension-over-betting-deposits/ |
| 韩国 | 2026-08-18，KCSC 决定由 ISP 全国封锁（访问时显示 HTTP 451）。警方立案 26 人，据报 18 人已移送检方。Polymarket 自己是否也封锁韩国，说法不一 | 中 | 2026-11 | https://www.gambling.com/news/south-korea-orders-nationwide-polymarket-block ; https://news.sbs.co.kr/english/article.do?news_id=N1008709988 |
| 菲律宾 | 2026-05-14，PAGCOR 据报把网域交给 ISP 封锁 | 低 | 2026-11 | 只有第三方来源 |
| 美国 | 国际站限制美国 IP，美国居民被引导到单独的 Polymarket US | 中 | 2026-11 | https://help.polymarket.com/en/articles/13364163-geographic-restrictions |
| 英国、欧盟主要国家、澳洲 | 都受限（不能开新仓）。法国 ANJ 2024-11 下令封锁；荷兰 Ksa 2026-01 下令停止服务，Polymarket 约 2026-02 封锁荷兰 IP，案件已进入诉讼 | 低（限制等级）；中（受限这一点） | 2026-11 | https://help.polymarket.com/en/articles/13364163-geographic-restrictions ; https://sbcnews.co.uk/europe/2026/10/05/polymarket-netherlands/ |
| 加拿大 | 安大略省自 2025 年起受限（OSC 和解），阿尔伯塔、BC、魁北克约在 2026-07 加入 | 低 | 2026-11 | https://sigma.world/news/polymarket-faces-wider-restrictions-across-canada/ |
| 其他用 ISP 封锁的国家 | 阿根廷（2026-03）、西班牙、葡萄牙、匈牙利、乌克兰、印尼、印度。每个国家都要单独找来源核实 | 低 | 2026-11 | https://www.coindesk.com/policy/2026/03/17/argentina-joins-growing-list-of-countries-blocking-polymarket-access |

---

## 5. Polymarket US

| 项目 | 数值 | 置信度 | 核对日期 | 来源 |
|---|---|---|---|---|
| 法律主体 | 2025-07 以 $112M 收购受 CFTC 监管的 QCEX，以 QCX LLC 名义运营；CFTC 于 2025-11 发出修订后的指定令 | 中 | 2026-11 | https://fortune.com/2025/07/22/polymarket-returning-to-us-qcx-qc-clearing/ ; https://bitcoinmagazine.com/markets/polymarket-rolls-out-us-app |
| 上线 | iOS App 于 2025-12-02/03 上线，先对候补名单开放，从体育市场开始。据单一来源，2026-05 取消了候补名单 | 中（上线）；低（取消候补） | 2026-11 | https://www.coindesk.com/markets/2025/12/03/polymarket-launches-app-with-cftc-green-light-in-u-s-return |
| 与国际版的区别 | 账户完全独立，不能迁移。只限美国居民，需完整 KYC（证件、SSN、住址）。支持法币入金（借记卡、ACH、电汇）和 USDC。市场类别更少 | 低 | 2026-11 | https://help.polymarket.com/en/articles/15458828-website-vs-app-what-s-the-difference ; https://www.polymarket101.com/en/docs/guides/polymarket-us-vs-international-2026/ |
| 可用州 | 有争议，且随诉讼变化。内华达最常被列为不可用；密歇根同意在 2026-11-25 前结束体育合约；俄亥俄、纽约等州有诉讼。**站内不写州列表** | 低 | 2026-11 | https://www.michigan.gov/mgcb/news/2026/10/28/polymarket-backs-down-in-michigan ; https://www.cbssports.com/prediction/news/prediction-market-legal-states/ |
| 费率 | 有单独的费率和返利表，2026-10-19 做过调整。**不适用于国际版**，不要混写 | 低 | 2026-11 | https://docs.polymarket.us/changelog |
| 推荐计划 | 美国版有自己的 Refer-A-Friend：被邀请人需在 30 天内入金 $10。与国际版计划无关 | 低 | 2026-11 | https://www.cftc.gov/filings/orgrules/rules01162637349.pdf ; https://docs.polymarket.us/faqs/refer-a-friend-faqs |

---

## 6. 邀请 / 返佣计划（Polymarket 国际版）

| 项目 | 数值 | 置信度 | 核对日期 | 来源 |
|---|---|---|---|---|
| 生效日期 | 新条款 2026-05-28 生效 | 中（只有官方文档摘录，未实时核对） | 2026-11 | https://docs.polymarket.com/programs/referral-program ; https://help.polymarket.com/en/articles/14174498-referral-program |
| 佣金比例 | 直接邀请拿**净手续费**的 10%，间接邀请拿 5%。净手续费是被邀请人自己的等级返利扣掉之后、Polymarket 实际留下的部分。**发布前必须核实** | 中（官方摘录）；核验员要求复核 | 2026-11 | https://docs.polymarket.com/programs/referral-program ; https://help.polymarket.com/en/articles/14174498-referral-program |
| 已过时的条款 | 2026-03 的初版是直接 30%、间接 10%、持续 180 天，**已被取代**。第三方页面仍在引用旧条款 | 中 | 2026-11 | https://cryptobriefing.com/polymarket-referral-program-expanded-fees/ ; https://www.gamblinginsider.com/news/150287/polymarket-fees-expansion-referral-program |
| 推荐人资格 | 累计交易量满 $10,000 才开始有收益。没达标也可以先分享链接，不需要申请 | 中 | 2026-11 | https://help.polymarket.com/en/articles/14174498-referral-program |
| 每个被邀请人的收益期 | 被邀请人达到 Platinum 等级或注册满 30 天，以先到者为准（Gold 及以下等级适用） | 中 | 2026-11 | https://docs.polymarket.com/programs/referral-program |
| 归因窗口 | 被邀请人点击链接后 30 天内注册才算 | 中（单一官方来源） | 2026-11 | https://help.polymarket.com/en/articles/14174498-referral-program |
| 发放 | 每天 00:00 UTC 以 pUSD 发到账户 | 中 | 2026-11 | https://docs.polymarket.com/programs/referral-program |
| 排除项 | 免费市场（如 Geopolitics）不产生佣金 | 中 | 2026-11 | https://docs.polymarket.com/programs/referral-program |
| 违规 | 自我邀请、关联账户、虚假交易会被取消资格或追回佣金。条款可以不经通知修改。"禁止竞价品牌词、禁止在评论区刷链接"只出自单一第三方 | 中（官方部分）；低（第三方部分） | 2026-11 | https://docs.polymarket.com/programs/referral-program |
| 被邀请人福利 | **没有找到官方的被邀请人奖励或折扣**。所谓"10%/20% 手续费折扣码""$25 奖金"都来自联盟营销站，其中 $25 是美国版的活动 | 中（没找到官方福利）；**站内不得承诺任何福利** | 2026-11 | https://help.polymarket.com/en/articles/14174498-referral-program |
| 获取链接 | 登录后在 polymarket.com/refer 获取，或用市场页、个人主页上的分享按钮 | 中 | 2026-11 | https://docs.polymarket.com/programs/referral-program |
| 链接格式 | **未确认**。联盟站上能看到 `polymarket.com/?r=<code>` 和 `polymarket.com?via=<code>` 两种（`?via=` 是 Dub.co 的格式）。站点只使用站长提供的真实链接 | 低 | 2026-11 | https://icoda.io/referral-codes/polymarket/ |
| Dub.co 联盟计划 | 2025-11 上线（partners.dub.co/polymarket），2026 年的状态不明 | 低 | 2026-11 | https://x.com/steventey/status/1992678397466804554 |
| Builders Program | 面向在 CLOB 订单上附带 builder code 的应用，按等级每周发 USDC 奖励，资助池据报超过 $2.5M。联系 builder@polymarket.com | 低 | 2026-11 | https://docs.polymarket.com/developers/builders/builder-tiers ; https://builders.polymarket.com/ |

---

## 7. Gamma API（开发者用）

| 项目 | 数值 | 置信度 | 核对日期 | 来源 |
|---|---|---|---|---|
| Base 和鉴权 | `https://gamma-api.polymarket.com`，公开只读，不需要鉴权。端点包括 `/events`、`/markets`、`/tags`、`/public-search`、`/events/keyset`，其中后两个未核实 | 中 | 2026-11 | https://docs.polymarket.com/api-reference/events/list-events ; https://docs.polymarket.com/quickstart/fetching-data |
| `/events` 参数 | `limit`、`offset`、`order`（可用逗号分隔多个字段）、`ascending`、`active`、`closed`、`archived`、`tag_id`、`exclude_tag_id`、`related_tags`、`liquidity_min` / `liquidity_max`、`slug`。keyset 版用 `after_cursor` / `next_cursor`，不接受 `offset` | 中（常用参数）；低（exclude、liquidity、keyset） | 2026-11 | https://docs.polymarket.com/api-reference/events/list-events.md |
| 按 24h 成交量取热门 | `/events?active=true&closed=false&order=volume24hr&ascending=false&limit=20`。官方 quickstart 据说写的是 `volume_24hr`。**代码要兼容两种写法**：请求失败就退回客户端按 `volume24hr` 排序，并过滤掉 `endDate` 已过的事件 | 低 | 2026-11 | https://docs.polymarket.com/quickstart/fetching-data ; https://www.codex.io/blog/polymarket-api |
| 字符串化数组 | `outcomes`、`outcomePrices`、`clobTokenIds` 是 JSON 字符串，要 `JSON.parse`，各数组按索引对齐（Yes 在前）。代码要同时容错字符串和数组两种形式 | 中 | 2026-11 | https://nautilustrader.io/docs/rust-api-latest/nautilus_polymarket/http/models/struct.GammaMarket.html ; https://oddspapi.io/blog/?p=2833 |
| Market 字段 | `id`、`question`、`slug`、`outcomes`、`outcomePrices`、`clobTokenIds`、`volume`（字符串）、`volumeNum`、`volume24hr`、`liquidity`、`liquidityNum`、`endDate`、`image`、`icon`、`active`、`closed`、`groupItemTitle`、`negRisk`。读取时都要判空 | 低-中 | 2026-11 | https://docs.polymarket.com/advanced/neg-risk ; https://nautilustrader.io/docs/rust-api-latest/nautilus_polymarket/http/models/struct.GammaMarket.html |
| Event 字段 | `id`、`slug`、`title`、`description`、`startDate`、`endDate`、`image`、`icon`、`active`、`closed`、`liquidity`、`volume`、`volume24hr`、`negRisk`、`tags[]`（含 id、label、slug）、`markets[]` | 低-中 | 2026-11 | https://nautilustrader.io/docs/rust-api-latest/nautilus_polymarket/http/models/struct.GammaEvent.html |
| 页面 URL | 事件页 `https://polymarket.com/event/<event-slug>`。单个市场的 `/market/<slug>` 只有第三方提到过，**一律链接到事件页** | 中 | 2026-11 | https://docs.polymarket.com/concepts |
| 速率限制 | 由 Cloudflare 节流（请求排队延迟，而不是直接拒绝）。Gamma 整体 4,000 次/10 秒；`/events` 500；`/markets` 300；两者合计 900（只见于中文文档）；`/public-search` 350；`/comments`、`/tags` 200 | 低 | 2026-11 | https://docs.polymarket.com/api-reference/rate-limits |
| CORS | 官方没有说明。有一个第三方代理的代码显示只允许 `https://polymarket.com` 跨域。**按浏览器跨域会失败来设计**：在构建时抓取，或走服务端 / edge 代理，并加缓存 | 低 | 2026-11 | https://huggingface.co/spaces/pentarosarium/polyserve/blob/main/server.py |

---

## 8. 代币与空投

| 项目 | 数值 | 置信度 | 核对日期 | 来源 |
|---|---|---|---|---|
| POLY 现状 | **尚未发行**。没有 TGE 日期、快照、资格规则、代码、总量或合约地址。2026 年 10 月最后几周是否有新公告，无法排除 | 中 | 2026-11 | https://www.kucoin.com/news/flash/polymarket-ceo-hints-at-programmable-token-at-token2049-no-launch-plan-revealed ; https://help.polymarket.com/en/articles/13364250-does-polymarket-have-a-token |
| CMO 的说法（2025-10） | Matthew Modabber："There will be a token, there will be an airdrop"，并说会在美国 App 重新上线之后，没有时间表 | 中 | 2026-11 | https://www.theblock.co/post/376048/polymarket-cmo-confirms-poly-token-airdrop-plans ; https://blockworks.com/news/polymarket-cmo-confirms-poly-token |
| TOKEN2049（2026-10-07） | CEO Coplan 提到 "onchain asset with real programmable utility"，没有给出任何发行计划 | 低 | 2026-11 | https://coincentral.com/polymarket-token-or-ipo-ceo-shayne-coplan-hints-at-next-move |
| IPO 还是发币 | 据 Bloomberg 2026-10-13 的转述报道，公司在 IPO 和原生代币之间权衡，估值可能超过 $20B，两者都没有正式宣布 | 低 | 2026-11 | https://en.bloomingbit.io/feed/news/122171 |
| 商标 | 据称母公司 Blockratize 申请了 "POLY" 和 "$POLY" 商标，未在 USPTO 核对，不要发布 | 低 | 2026-11 | https://tangem.com/en/learning-hub/post/polymarket-token-launch/ |
| pUSD 不是 POLY | pUSD 是平台的抵押品代币，不是治理代币或空投 | 中 | 2026-11 | https://docs.polymarket.com/concepts/pusd |
| 诈骗形式 | 假的 "Community Rewards / claim POLY" 页面（连接钱包即被盗）；假的 "Member Access Invitation" 邮件；仿冒域名；伪造的预测平台（操纵结果、不让提现）。**站内只做一般性警示，不链接诈骗域名** | 低-中 | 2026-11 | https://www.pcrisk.com/removal-guides/35382-polymarket-community-rewards-scam ; https://malwaretips.com/blogs/polymarket-member-access-invitation-email-scam/ |
| 刷量背景 | 哥伦比亚大学的预印本（2025-11，未经同行评审）估计，历史成交量中约 25% 有对敲（wash trading）特征，作者认为部分与刷空投有关 | 中 | 2026-11 | https://fortune.com/2025/11/07/polymarket-wash-trading-inflated-prediction-markets-columbia-research ; https://decrypt.co/347842/columbia-study-25-polymarket-volume-wash-trading |

**公司背景（可以在"关于 Polymarket"里简单提一句，注明出处和日期）**

| 项目 | 数值 | 置信度 | 核对日期 | 来源 |
|---|---|---|---|---|
| ICE 投资（2025-10） | 最多 $2B，投后估值约 $9B | 中 | 2026-11 | https://www.theblock.co/post/373641/nyse-parent-firm-ice-eyes-2-billion-investment-in-polymarket-wsj |
| ICE 追加投资（2026-03-27） | 追加 $600M。ICE 累计投入约 $1.6B（另有至多约 $40M 二级市场购买）。**不要写"完成了 $2B 投资"** | 中 | 2026-11 | https://bitcoinmagazine.com/news/ice-announces-600-investment-polymarket |
| 估值 | 2026-04 据报寻求约 $15B（属于洽谈报道）；2026-08-31 Bloomberg 报道 1789 Capital 领投约 $1B、投后 $21B，尚未确认完成。只能写"据报道" | 低 | 2026-11 | https://www.bloomberg.com/news/articles/2026-08-31/polymarket-funding-round-led-by-1789-values-firm-at-21-billion |
| 内幕交易案 | 2026-04 一名美军士兵因 Maduro 相关市场被起诉；2026-05 一名 Google 员工被起诉，涉嫌获利约 $1.2M。措辞用"被起诉 / 涉嫌" | 中 | 2026-11 | https://www.cnbc.com/2026/05/27/google-employee-polymarket-insider-trading.html ; https://fortune.com/2026/05/29/prosecutors-issue-google-insider-trading-charges-employee-polymarket/ |
| 流量和交易量 | Similarweb：2026-03 访问量约 45.3M（峰值）；2026-03 月成交额首次超过 $10B（$10.57B）。各追踪站口径差异很大，只能注明出处引用 | 低 | 2026-11 | https://www.forbes.com/sites/conormurray/2026/04/07/polymarket-kalshi-reach-monthly-traffic-peaks-greater-than-election-fueled-november-2024/ ; https://bitcoinke.io/2026/04/polymarket-in-march-2026/ |

---

## 9. 其他预测市场

| 项目 | 数值 | 置信度 | 核对日期 | 来源 |
|---|---|---|---|---|
| Kalshi | 受 CFTC 监管的美国交易所，需要 KYC，支持加密货币入金（USDC、BTC、SOL、WLD）。自称服务 140+ 国家，但会员协议限制 55 个司法辖区（据聚合站，新加坡、澳洲、印度等在内）。在追踪口径下约占预测市场成交额的 75–80%（2026-10，口径不一）。香港 IFEC 的警告也点名了 Kalshi。港台新马能否使用未核实 | 低-中 | 2026-11 | https://help.kalshi.com/en/articles/13823799-crypto-deposits ; https://predictionnews.com/story/kalshi-holds-76-of-tracked-volume-as-polymarket-us-grows-66 |
| Gate × Polymarket | 2026-03-24 Gate App 接入 Polymarket（公测，v8.12.5+），自称"首家 CEX"。交易所用户直接用现货 USDT，Web3 用户在 Polygon 上用 USDC，订单进入 Polymarket 的订单簿。各地区能否使用未核实 | 中 | 2026-11 | https://news.bitcoin.com/gate-integrates-polymarket-in-first-for-centralized-exchanges/ ; https://www.cryptotimes.io/2026/03/24/gate-integrates-polymarket-for-global-prediction-trading/ |
| Bybit Prediction | 约 2026-06-10 在 Bybit Alpha 内上线，从足球开始，使用 Polymarket 的流动性，直接用 Bybit 账户里的 USDC，订单为 FOK，收取 Polymarket 费用加 Bybit Alpha 服务费。"体育 3%" 这个数字未核实，不要发布 | 中（存在）；低（费用） | 2026-11 | https://announcements.bybit.com/en/article/bybit-prediction-launches-with-global-football-prediction-markets-bltc9ef33b283828c8d/ ; https://www.bybit.com/en/help-center/article/FAQ-Bybit-Prediction |
| Byreal Predict | Bybit 孵化的 Solana DEX，2026-06-09 上线，使用 Polymarket 流动性 | 低 | 2026-11 | https://www.bybit.com/en/learn/bybit-spot/how-prediction-market-works |
| Bitget Wallet × Polymarket | 2026-04 自托管的 Bitget Wallet 接入 Polymarket（带 AI 分析）。Bitget 交易所本身没有预测市场。新闻稿里的成交量数字不要转载 | 低 | 2026-11 | https://www.globenewswire.com/news-release/2026/04/30/3284753/0/en/polymarket-and-bitget-wallet-launch-prediction-markets-report-seeing-rising-retail-activity-reaching-25-7b-monthly-volume.html |
| Binance Wallet 预测市场 | 2026-04-09 上线（2026-03-31 起 beta），接入 BNB Chain 上的 predict.fun。用户要开一个独立的 MPC "Prediction Account"，用 USDT 入金，Binance 不做对手方。不是所有地区都能用。**没有接入 Polymarket** | 中 | 2026-11 | https://www.coindesk.com/markets/2026/04/09/binance-enters-prediction-markets-arena-via-predict-fun-integration ; https://www.theblock.co/news/business/2026-03-31-binance-tests-prediction-market-feature-395817 |
| OKX Event Contracts | 2026-04-20 上线：BTC 和 ETH（之后加了 SOL、5 分钟周期）的涨跌合约，无杠杆，价格 0.01–0.99 USDT，按 OKX 指数结算，上线时面向亚洲、CIS、拉美。**不是综合型预测市场**。OKX Wallet 目前是否接入 Polymarket 未确认 | 中 | 2026-11 | https://www.tradingview.com/news/reuters.com,2026-04-20:newsml_Zaw2xjGYN:0-zawya-okx-launches-event-contracts-providing-a-simpler-way-to-trade-btc-and-eth-price-movements/ ; https://www.okx.com/en-gb/help/okx-event-contract-may-product-update |
| Opinion | BNB Chain 上的宏观类预测市场，YZi Labs 支持，用 USDT 结算的订单簿，只收 taker 费（文档写 0–1%，博客写 0–2%，互相冲突），最小下单 $5。OPN 代币 2026-03-05 上 Binance，之后成交量大幅下滑，有刷量质疑 | 低 | 2026-11 | https://docs.opinion.trade/trade-on-opinion.trade/fees ; https://thedefiant.io/news/defi/bnb-based-prediction-market-opinion-launches-token |
| predict.fun | BNB Chain，2025-12 上线，用 USDT（部分用 USDC），未平仓抵押品放进 Venus 生息（多一层合约风险）。是 Binance Wallet 背后的供应方 | 低 | 2026-11 | https://trustwallet.com/blog/academy/what-is-predict-fun ; https://www.coindesk.com/markets/2026/04/09/binance-enters-prediction-markets-arena-via-predict-fun-integration |
| Limitless | Base 链，用 USDC，Coinbase Ventures 投资。LMTS 代币 2025-10 TGE，2026-03 上 Coinbase。不对美国用户开放（美国 DCM 申请审批中）。成交量说法冲突 | 低 | 2026-11 | https://www.theblock.co/news/markets/2026-06-17-limitless-ceo-no-prediction-market-platform-will-dominate-perpetual-futures-precedent-405086 |
| Myriad | Decrypt 母公司 DASTAN 旗下，2025-03 在 Abstract 上线，后来加了 Linea 和 BNB。采用 AMM，用 USDC.e。可以在 Trust Wallet 里使用，还没有代币 | 低 | 2026-11 | https://decrypt.co/294514 ; https://trustwallet.com/blog/trading/how-to-trade-on-myriad-markets-in-trust-wallet |
| Manifold | 只有游戏币（Mana），2025 年初关闭了真钱模式 Sweepcash | 中 | 2026-11 | https://en.wikipedia.org/wiki/Manifold_(prediction_market) |

---

## 10. Binance（binance.com）

> ⚠️ 2026-10-29 发生大额被盗，提币分阶段恢复中。所有"用币安入金 Polymarket"的内容都必须写明日期，并链接官方公告。

| 项目 | 数值 | 置信度 | 核对日期 | 来源 |
|---|---|---|---|---|
| 官方域名 | binance.com（binance.us 是另一家公司）。官方验证工具在 binance.com/en/official-verification | 中 | 2026-11 | https://www.binance.com/en/official-verification |
| 现货 VIP0 | maker 0.10% / taker 0.10%；用 BNB 抵扣打 75 折，即 0.075% | 中 | 2026-11 | https://cryptopotato.com/binance-fees/ ; https://www.finhay.com.vn/phi-giao-dich-binance |
| U 本位合约 VIP0 | maker 0.02% / taker 0.05%（旧费率 0.04%）。BNB 抵扣 9 折，BNB 需放在合约钱包 | 中 | 2026-11 | https://www.binance.com/en/support/faq/binance-futures-fee-structure-fee-calculations-360033544231 |
| 被邀请人返佣（现货） | 推荐人 BNB 少于 500 枚时，总佣金 20%，可分给被邀请人 0/5/10%；持有 500 枚以上时总佣金 40%，最多分 20%。所以被邀请人的现货返佣最高 20%。FAQ 页面较旧，2026 年的版本未核实 | 低 | 2026-11 | https://www.binance.com/en-NG/support/faq/binance-standard-referral-mode-guide-cbac15853b0243cda4a90c9c03ca0c38 |
| 被邀请人返佣（合约） | 官方 FAQ 写最多 10%；二手来源称 2025-10 改为最多 20% 且只能设置一次。两者冲突，**不要写具体数字**。合约返佣期为开通合约账户后 12 个月 | 低 | 2026-11 | https://www.binance.com/en/learn/referral-pro-mode ; https://coinpopbit.com/en/binance-payback-2026-fee-refunds-referral-rebates-guide/ |
| 返佣终止 | 被邀请人达到 VIP 3 后停止 | 低 | 2026-11 | https://binance.com/en/amp/support/faq/6233094e540b4ea4ac50387d1518911b |
| 补填邀请码 | 一般不能补填，必须在注册时填写 | 低 | 2026-11 | 没有官方页面，只有联盟博客 |
| 推荐人或联盟最高佣金 | 普通推荐 20%（持 500 BNB 以上 40%）；联盟计划现货 41–50%、合约 30%（不同版本的页面写法不一） | 低 | 2026-11 | https://www.binance.com/en/support/faq/cbf9ab9a11fa44a293d44607803c6c2d |
| EEA 用户与推荐计划 | 据单一联盟来源，2026-07-01 起 EEA 用户不能参加推荐计划 | 低 | 2026-11 | https://www.simplifyingtheory.com/binance-referral-id/ |
| Polygon USDC | 支持原生 USDC（自 2023-10 起），**不支持 USDC.e**（已改名为 MATICUSDCE）。提币界面上的网络名可能显示为 "Polygon POS" 或 "POL" | 中 | 2026-11 | https://ambcrypto.com/binance-boosts-polygon-network-with-native-usd-coin-support-assessing/ ; https://www.cryptopolitan.com/binance-integrates-polygons-usdc/ |
| Polygon USDC 提币费和最低额 | 聚合站数据（2026-06 至 08）约 0.12 USDC，最低 3–5 USDC；另有来源写 0.6–1 USDC，互相冲突。站内写"约 1 USDC 或更低，以提币页为准" | 低 | 2026-11 | https://withdrawalfees.com/exchanges/binance |
| 其他网络的 USDC 提币 | BSC、Base、Optimism 最便宜，Ethereum 最贵（约 1.2–5 USDC 以上）。来源冲突，不要发布具体数字 | 低 | 2026-11 | https://withdrawalfees.com/exchanges/binance |
| Polygon USDT | 支持，费用未知 | 低 | 2026-11 | https://cryptoticker.io/en/binance-withdrawals-reopen-phase-one/ |
| 2026-10-29 被盗事件 | 热钱包被盗约 $6.3B，多家媒体称是有记录以来最大的一次。FBI 据报指向朝鲜，Binance 自己没有归因。Binance 表示用户不承担损失，已补足约 90–95%（各家说法不一）。2026-11-01 起提币分阶段恢复，第一阶段 15 个网络，包括 Polygon（POL、USDT、USDC）、Arbitrum、Base、Optimism、Solana、BSC、Ethereum。第二阶段没有给日期 | 中（事件本身）；低（恢复细节，变化很快） | 2026-11 | https://www.cnbc.com/2026/10/31/binance-hack-asset-coverage-withdrawals.html ; https://www.pbs.org/newshour/economy/binance-flags-potential-security-issue-says-approximately-6-3-billion-impacted ; https://cointelegraph.com/news/binance-says-phase-one-of-withdrawals-opens-after-63b-hack |
| P2P 和法币 | P2P 支持约 100–121 种法币，平台不收费；台湾的教程里能选 TWD C2C。不能直接把 TWD 提到台湾银行账户，一般要转到 MAX 或 BitoPro 出金。HKD、SGD、AUD、CAD 在 2026 年是否可用未确认。卡购手续费约 1.8–4.5%（单一第三方来源） | 低 | 2026-11 | https://www.gncrypto.news/news/binance-p2p-review/ ; https://www.datawallet.com/zh/crypto/buy-usdt-taiwan |
| KYC | 全体用户强制 KYC（2021-08 起），未认证账户只能提币 | 中 | 2026-11 | https://www.theblock.co/linked/115166/binance-mandatory-kyc-regulatory-pressure |
| 美国 | binance.com 不服务美国，美国用户用 Binance.US | 中 | 2026-11 | https://www.binance.us/terms-of-use |
| 香港 | 没有任何 Binance 实体持有 SFC 牌照，官网声明产品不面向香港用户 | 中 | 2026-11 | https://www.dlnews.com/articles/markets/binance-coinbase-and-kraken-are-unlicenced-in-hong-kong/ |
| 台湾 | 据单一 2026 来源：没有 FSC 洗钱防制登记，2026-08-10 被列入台湾 VASP 公会的警示名单。2026-06-30 台湾通过《虚拟资产服务法》 | 低 | 2026-11 | https://www.datawallet.com/crypto/best-crypto-exchanges-taiwan |
| 新加坡 | 2021–22 年在 MAS 介入后退出，不服务新加坡居民（资料较旧） | 低 | 2026-11 | https://financialhorse.com/binance-banned-in-singapore-explained-what-this-means-for-singapore-users-what-alternatives-to-use/ |
| 马来西亚 | 无牌，网站和 App 被封（财政部 2026-07 表态）。SC 于 2026-10-08 再次将其列入投资者警示名单。Bloomberg 2026-10-31 报道 Binance 在谈牌照 | 中 | 2026-11 | https://www.freemalaysiatoday.com/category/nation/2026/07/16/binance-still-banned-in-malaysia-says-govt ; https://www.bloomberg.com/news/articles/2026-10-31/binance-in-talks-for-malaysia-license-after-five-year-absence |
| 中国大陆 | 不服务（2017 年退出，2021 年清退）。所谓 2026 年"42 号文"未核实，不要写 | 中 | 2026-11 | https://amp.scmp.com/business/companies/article/3150149/bitcoin-exchanges-binance-and-huobi-stop-taking-mainland-chinese |
| 欧盟 | 2026-06 撤回在希腊的 MiCA 申请，约 2026-07-01 起暂停对 EU/EEA 的新服务 | 低 | 2026-11 | https://www.coindesk.com/policy/2026/07/03/binance-says-mica-should-be-judged-by-who-it-licenses-not-who-it-excludes |
| 英国和加拿大 | 英国：2023 年起不接新用户，2026-08 据报计划向 FCA 申请。加拿大：2023 年退出 | 低（英国）；中（加拿大） | 2026-11 | https://crypto.news/binance-plans-uk-return-with-fca-license-bid/ ; https://blockworks.co/news/binance-leaving-canada |
| 其他监管背景 | 获得 ADGM 牌照（2025-12 宣布）；CZ 于 2025-10-23 获特赦；FINTRAC 2024-05 罚款约 CAD 6M | 低-中 | 2026-11 | https://www.adgm.com/media/announcements/binance-becomes-first-crypto-exchange-to-secure-a-global-license-under-adgm-framework-setting-a-new-standard-in-digital-asset-regulation |
| App 下载 | 只从官方应用商店，或 binance.com 上的 APK 链接下载。各来源给的开发者名不一致，**不要写开发者名** | 低 | 2026-11 | 联盟博客，仅作通用建议 |

---

## 11. OKX（okx.com，中文名"欧易"）

| 项目 | 数值 | 置信度 | 核对日期 | 来源 |
|---|---|---|---|---|
| 官方域名 | okx.com（2022 年由 OKEx 改名），Web3 钱包在 web3.okx.com。建议设置防钓鱼码，不要点搜索广告 | 中 | 2026-11 | https://www.okx.com/ |
| 现货 Regular 等级 | maker 0.08% / taker 0.10%。按主体不同：美国 0.20/0.35%，阿联酋 0.40/0.60%，EEA 另有费率 | 中 | 2026-11 | https://www.okx.com/en-us/help/updates-to-global-fee-framework ; https://www.bitdegree.org/crypto/tutorials/okx-fees |
| 永续 Regular 等级 | maker 0.02% / taker 0.05%。2026-09-09 的调整据报只涉及 VIP 7–8 | 中 | 2026-11 | https://www.okx.com/en-us/help/advance-notice-spot-and-futures-trading-fee-adjustment |
| OKB 折扣 | 最新的二手来源称持有 OKB 已不再有手续费折扣，旧页面仍写有折扣，两者冲突。**不要写 OKB 折扣** | 低 | 2026-11 | https://www.datawallet.com/crypto/okx-review |
| 被邀请人返佣 | 0–20%，由邀请方设定，不是每个邀请码都有。返佣是交易后按净手续费返还，下单时并不打折。在"用户中心 > 我的奖励"查看。有效期未知。联盟站宣传的 30–40% 与这个上限冲突 | 低 | 2026-11 | https://www.okx.com/en-us/help/affiliate-faq ; https://www.okx.com/en-us/help/affiliate-faq-eea |
| 联盟佣金 | 默认 30%，最高 50%（中东地区的活动有 60%），按被邀请人终身计、每小时以 USDT 结算。成为联盟需要邀请 10 名有效用户 | 低 | 2026-11 | https://www.okx.com/en-us/help/okx-affiliate-and-referral-program-faq |
| DEX 推荐 | 和交易所的推荐计划是两回事，被邀请人折扣 0–10%（旧版写 0–20%） | 低 | 2026-11 | https://web3.okx.com/help/whats-dex-referral-program |
| 补填邀请码 | 一般不能补填 | 低 | 2026-11 | 只有联盟博客 |
| Polygon USDC | 支持（还支持 Ethereum、Solana、Base、Arbitrum、Optimism、Avalanche 等）。是原生 USDC 还是 USDC.e，官方没有明确说明，要在 App 里核对合约地址 | 低 | 2026-11 | https://withdrawalfees.com/exchanges/okx ; https://eco.com/support/en/articles/13297213-best-stablecoins-on-okx-2026 |
| Polygon USDC 提币费 | 约 0.013–0.041 USDC，最低约 0.12–1.1 USDC，追踪站之间冲突。站内写"几美分" | 低 | 2026-11 | https://withdrawalfees.com/exchanges/okx |
| Polygon USDT | 网络显示为 "Polygon (USDT0)"，2025-09-09 起支持。手续费约 0.013 USDT、最低约 2 USDT（第三方数据） | 低-中 | 2026-11 | https://www.okx.com/en-us/help/okx-to-support-usdt0 |
| P2P 和法币 | P2P 支持 USD、EUR、AUD 等；卡购（Visa、Mastercard、Apple Pay）支持 30–98 种法币，看地区。**TWD P2P**：2024-06 有台湾用户称已关闭，2026 年的推广教程又说可用，**不要写可用** | 低 | 2026-11 | https://www.okx.com/en-us/learn/what-is-okx-p2p-trading ; https://www.dcard.tw/@tinyminer/post/262098557 |
| KYC | 必须 KYC，各级限额未知 | 低 | 2026-11 | https://web3isgoinggreat.com/single/okx-suddenly-limits-withdrawals |
| 香港 | 2024-05 撤回 VATP 牌照申请，2024-05-31 起停止对香港居民的 CEX 服务，2026 年仍列为受限。在香港只能用 OKX Wallet。"香港可用 HKD/FPS P2P" 的教程不可信 | 中 | 2026-11 | https://www.dlnews.com/articles/regulation/crypto-exchange-okx-withdraws-hong-kong-licence-application/ |
| 新加坡 | 通过 OKX SG（MAS 大型支付机构牌照，2024-09）提供服务，不走全球站 | 低 | 2026-11 | https://capitalmarkets.sg/crypto/okx-sg-pte-ltd/mas-licence/ |
| 台湾 | 可以从境外访问全球站，没有本地实体和 FSC 登记，也没有 TWD 银行通道 | 低 | 2026-11 | https://www.datawallet.com/zh/crypto/buy-usdt-taiwan |
| 马来西亚 | OKX 的风险披露把马来西亚列为禁止地区（来源可信度低） | 低 | 2026-11 | https://www.asiaforexmentor.com/okx-review/ |
| 美国、加拿大、中国大陆 | 美国由独立的 OKX US 服务；加拿大自 2023 年退出；中国大陆不服务 | 中（加拿大）；低（美国细节）；中（大陆） | 2026-11 | https://thelogic.co/briefing/crypto-trading-platform-okx-says-it-will-exit-canada-after-new-regulatory-crackdown/ ; https://technode.com/2022/10/13/chinas-internet-watchdog-takes-down-13-crypto-trading-apps/ |
| 英国 | unknown | 低 | 2026-11 | — |
| 监管记录 | 2025-02-24 在美国 SDNY 认罪（无牌经营汇款业务），罚没合计约 $504M。马耳他 FIAU 罚约 €1.1M，荷兰 DNB 罚约 €2.25M。经马耳他取得 MiCA 牌照 | 中（DOJ）；低（欧盟部分） | 2026-11 | https://www.justice.gov/usao-sdny/pr/okx-pleads-guilty-violating-us-anti-money-laundering-laws-and-agrees-pay-penalties ; https://cointelegraph.com/news/okx-fined-2-6m-netherlands-operating-without-license |
| 安全记录 | 没有找到 2025–2026 年 CEX 被盗的记录（2023-12 OKX DEX 被盗约 $2.7M） | 低 | 2026-11 | https://www.theblock.co/post/267405/okx-dex-suffers-apparent-2-7-million-exploit-following-suspected-private-key-leak |
| 预测类产品 | Event Contracts（只有加密价格涨跌），见第 9 节 | 中 | 2026-11 | https://www.okx.com/en-gb/help/okx-event-contract-may-product-update |

---

## 12. Bitget（bitget.com）

> 本节研究阶段**没有拿到任何实时来源**，全部出自模型背景知识，核验员也无法核对，统一按低置信度处理（有说明的除外）。

| 项目 | 数值 | 置信度 | 核对日期 | 来源 |
|---|---|---|---|---|
| 官方域名 | bitget.com。Bitget Wallet 是另一款自托管产品，App 要分清 | 中 | 2026-11 | https://www.bitget.com/ |
| 现货 VIP0 | 0.1% / 0.1%；用 BGB 抵扣打 8 折，即 0.08% | 低 | 2026-11 | https://www.bitget.com/fee |
| U 本位合约 VIP0 | maker 0.02% / taker 0.06% | 低 | 2026-11 | https://www.bitget.com/fee |
| 被邀请人福利 | 返佣比例 unknown，主要是新用户任务奖励（券、体验金）。不要写数字 | 低 | 2026-11 | https://www.bitget.com/referral |
| 联盟最高佣金 | 常见宣传是"最高 50%"，2026 年数字未知 | 低 | 2026-11 | https://partner.bitget.com/ |
| Polygon USDC | 据信支持；原生还是 USDC.e、手续费、最低额都未知，要在 App 里核对 | 低 | 2026-11 | https://www.bitget.com/ |
| P2P | 有 P2P 市场，具体支持哪些法币未知 | 低 | 2026-11 | https://www.bitget.com/p2p-trade |
| KYC | 必须 KYC（背景知识） | 低 | 2026-11 | — |
| 受限地区 | 据信包括：美国、加拿大、新加坡、中国大陆、香港（约 2023-12 撤回香港申请并退出）、英国（2023-10 起停止接受新用户）。台湾和马来西亚未知 | 低 | 2026-11 | https://www.bitget.com/support/articles/ |
| BWB 并入 BGB | 2024-12 宣布，BWB 持有人转换为 BGB | 低 | 2026-11 | https://www.bitget.com/ |
| 预测市场相关 | Bitget Wallet 于 2026-04 接入 Polymarket，交易所本身没有预测市场（见第 9 节） | 低 | 2026-11 | https://www.globenewswire.com/news-release/2026/04/30/3284753/0/en/polymarket-and-bitget-wallet-launch-prediction-markets-report-seeing-rising-retail-activity-reaching-25-7b-monthly-volume.html |
| 2025–2026 监管和安全事件 | unknown | 低 | 2026-11 | — |

---

## 13. Gate（gate.com，原 Gate.io）

> 本节同样没有实时来源，统一按低置信度处理。

| 项目 | 数值 | 置信度 | 核对日期 | 来源 |
|---|---|---|---|---|
| 官方域名 | 2025 年（约 05 月）品牌升级为 "Gate"，主域名改为 **gate.com**，gate.io 可能会跳转过去。具体日期未核实。防钓鱼提示里两个域名都要写 | 中 | 2026-11 | https://www.gate.com/ |
| 现货 VIP0 | 据信 0.1% / 0.1%（旧费率是 0.2%），用 GT 抵扣有折扣，折扣比例未知 | 低 | 2026-11 | https://www.gate.com/fee |
| 合约 VIP0 | 据信 0.02% / 0.05%，核验员对此没有把握，不要发布 | 低 | 2026-11 | https://www.gate.com/fee |
| 被邀请人福利 | unknown | 低 | 2026-11 | https://www.gate.com/referral |
| 联盟最高佣金 | unknown（以前见过 40–60% 的宣传，未核实） | 低 | 2026-11 | https://www.gate.com/ |
| Polygon USDC | unknown（过去据信支持） | 低 | 2026-11 | https://www.gate.com/ |
| P2P | unknown | 低 | 2026-11 | — |
| KYC | 必须 KYC（背景知识） | 低 | 2026-11 | — |
| 受限地区 | 据信包括美国、加拿大等。研究员说"香港用户转到 Gate.HK"，但核验员指出 Gate.HK 约在 2024-05 撤回了 SFC 的 VATP 申请，这个说法**可能已过时**，应按"香港受限"处理，待核实。2025 年据信经马耳他取得 MiCA 牌照。中国大陆、新加坡、马来西亚、英国未知 | 低 | 2026-11 | https://www.gate.com/user-agreement |
| 站内接入 Polymarket | 2026-03-24 App 内接入 Polymarket（公测），可以直接用现货 USDT 交易，不用自己提币。这对本站漏斗可能有用，但各地区能否使用未核实 | 中 | 2026-11 | https://news.bitcoin.com/gate-integrates-polymarket-in-first-for-centralized-exchanges/ ; https://en.cryptonomist.ch/2026/03/24/gate-io-polymarket-prediction-markets/ |
| 其他 | 2026-08 至 09 推出白标 "Prediction Builder"（$3M 资助），并计划进入美国预测市场 | 低 | 2026-11 | https://www.cryptotimes.io/2026/03/24/gate-integrates-polymarket-for-global-prediction-trading/ |

---

## 14. Bybit（bybit.com）

| 项目 | 数值 | 置信度 | 核对日期 | 来源 |
|---|---|---|---|---|
| 官方域名 | bybit.com（欧盟实体用 bybit.eu，另有 TR、KZ 等地区站） | 中 | 2026-11 | https://www.bybit.com/ |
| 现货 VIP0 | 0.1% / 0.1%（个别交易对有优惠） | 中 | 2026-11 | https://www.bybit.com/en/announcement-info/fee-rate/ |
| USDT 永续 VIP0 | maker 0.02% / taker 0.055% | 中 | 2026-11 | https://www.bybit.com/en/announcement-info/fee-rate/ |
| 平台币折扣 | 没有类似 BNB、BGB、GT 的常规抵扣币。MNT 偶尔有相关的手续费活动。不要写"完全没有折扣" | 低 | 2026-11 | — |
| 被邀请人福利 | 主要是新用户任务奖励（Rewards Hub 里的券），不是固定的长期返佣。金额随活动变化，不要写数字 | 低 | 2026-11 | https://www.bybit.com/en/invite/ |
| 联盟最高佣金 | 常见宣传是"最高 50%"，2026 年数字未知 | 低 | 2026-11 | https://affiliates.bybit.com/ |
| Polygon USDC | 据信支持；原生还是 USDC.e、手续费、最低额都未知 | 低 | 2026-11 | https://www.bybit.com/en/announcement-info/deposit-withdraw/ |
| 站内预测市场 | Bybit Prediction（2026-06）使用 Polymarket 的流动性，直接用账户里的 USDC，见第 9 节 | 中 | 2026-11 | https://www.bybit.com/en/help-center/article/FAQ-Bybit-Prediction |
| P2P | 有 P2P 市场，TWD、HKD、MYR、SGD 等是否支持未知 | 低 | 2026-11 | https://www.bybit.com/fiat/trade/otc/ |
| KYC | 必须 KYC（背景知识） | 低 | 2026-11 | — |
| 受限地区 | 据信包括美国、中国大陆、新加坡、加拿大。香港：约 2024-05 撤回 VATP 申请。马来西亚：SC 于 2023-12 命令 Bybit 停止在马来西亚运营。英国：2023 年退出，2025 年据信通过 FCA 授权的合作方（Archax）重新进入。日本：2025 年底据信暂停新用户注册。台湾据信可以访问 | 低 | 2026-11 | https://www.bybit.com/en/terms-service/ ; https://www.sc.com.my/ |
| 2025-02-21 被盗事件 | ETH 冷钱包被盗约 $1.4–1.5B（Safe 多签的签名界面被篡改），FBI 归因于朝鲜 TraderTraitor（Lazarus）。Bybit 一直正常运营，几天内补足了储备 | 中 | 2026-11 | https://www.ic3.gov/PSA/2025/PSA250226 ; https://announcements.bybit.com/ |
| MiCA | Bybit EU GmbH（维也纳）约在 2025 年取得奥地利 FMA 的 MiCA CASP 牌照 | 低 | 2026-11 | https://www.bybit.eu/ |
| 其他监管 | 2025 年初印度 FIU 罚款约 INR 9.27 crore（背景知识） | 低 | 2026-11 | — |

---

## 15. 跨交易所通用事项（新手教程要写进去）

| 项目 | 数值 | 置信度 | 核对日期 | 来源 |
|---|---|---|---|---|
| 原生 USDC 和 USDC.e | 是两个不同的代币。原生 USDC 合约 `0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359`，USDC.e 合约 `0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174`。Binance 不支持 USDC.e 充值 | 中 | 2026-11 | https://ambcrypto.com/binance-boosts-polygon-network-with-native-usd-coin-support-assessing/ |
| Polygon 网络名 | 2024-09 起 gas 代币从 MATIC 换成 POL。交易所界面可能显示 "Polygon POS"、"Polygon" 或 "POL"，截图要和当前界面一致 | 中 | 2026-11 | 核验员背景知识 |
| 新账户提币限制 | 新账户、刚改过密码或 2FA、刚添加的新地址，常会被临时锁定提币。有些地区要做 Travel Rule 申报（例如确认地址属于本人）。各家规则未核实 | 低 | 2026-11 | — |
| 网络维护 | 交易所会因网络升级临时暂停某条链的充提。提币前看公告 | 中（一般规律） | 2026-11 | https://www.okx.com/en-us/help/okx-to-support-polygon-network-upgrade-1 |
| 各交易所在港台新马的可用性 | **整体未核实**。按地区展示推荐链接前，必须逐家查对方的用户协议 | 低 | 2026-11 | — |

---

## 16. 待核实清单（上线前）

1. 实测 Polymarket 当前的入金页面：Polygon 上的原生 USDC 能否直接入金并自动转成 pUSD？各链最低额是多少？
2. 提现界面能选哪些链和代币？提出来的是原生 USDC 还是 USDC.e？
3. docs.polymarket.com/trading/fees 的英文费率表（尤其是体育类的例外）。
4. 官方地区限制页：台湾、新加坡、泰国、日本、韩国、香港、马来西亚分别属于哪一级。
5. 邀请条款：10% / 5%、净手续费的定义、30 天收益期；真实邀请链接的格式。
6. Protocol V2 是否已在 11-02 或 11-09 上线，对新手的操作有没有影响。
7. Binance 提币第二阶段的恢复情况。
8. 五家交易所在 Polygon 上的 USDC 提币支持、手续费和最低额，以及在港台新马的可用性和牌照情况。
9. Gate 和 Bybit 站内 Polymarket 入口在各地区能否使用。
10. Gamma API 的 CORS 头和 `volume24hr` 的写法（在可以联网的环境里用 curl 测）。
