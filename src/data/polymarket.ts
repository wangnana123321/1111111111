/**
 * Polymarket 相关资料（入金网络、费用、地区限制等）
 * ------------------------------------------------------------
 * 数据整理于 2026-11，来源见 docs/research-facts.md（主要为 Polymarket 官方文档与帮助中心）。
 * 平台规则变化快，页面统一提示“以官方页面为准”。
 */

export const POLYMARKET = {
  officialUrl: 'https://polymarket.com/',
  /** 从交易所提币时最推荐的网络（手续费低、到账快） */
  recommendedNetwork: 'Polygon',
  /** 推荐充值资产 */
  depositAsset: 'USDC',
  /** 账户内的交易余额币种：2026-04-28 起由 USDC.e 换成 pUSD（与 USDC 1:1 锚定） */
  collateral: 'pUSD',
  collateralSince: '2026-04-28',
  signupMethods: ['Google 账号', '邮箱 + 6 位验证码', '加密钱包（MetaMask、Rabby、Phantom 等）'],
  /** 充值桥支持的网络（充值后自动换成 pUSD） */
  depositNetworks: ['Polygon', 'Arbitrum', 'Base', 'Optimism', 'Solana', 'Ethereum', 'BNB Chain', 'Tron', 'Bitcoin'],
  depositMinimumNote:
    '官方文档给出的最低充值额约为：Polygon / Arbitrum / Base / Optimism / Solana 约 2 美元，以太坊主网约 7 美元，比特币和 Tron 上的 USDT 约 9 美元（以充值页面显示为准）。',
  /** Polymarket 自身不收充值、提现费；交易 Gas 由平台代付 */
  platformDepositFee: 0,
  platformWithdrawFee: 0,
  /**
   * 吃单（Taker）手续费率参数（官方公式：手续费 = 份数 × 费率 × 价格 × (1 − 价格)）
   * 挂单（Maker）不收手续费。数据整理于 2026-11，以下单页面显示为准。
   */
  takerFeeRates: [
    { key: 'geopolitics', label: '地缘政治 / 国际局势', rate: 0 },
    { key: 'politics', label: '政治 / 财经 / 科技 / 提及类', rate: 0.04 },
    { key: 'sports', label: '体育 / 经济 / 文化 / 天气 / 其他', rate: 0.05 },
    { key: 'crypto', label: '加密货币', rate: 0.07 },
  ],
  feeFormula: '手续费 = 份数 × 费率 × 价格 × (1 − 价格)',
} as const;
