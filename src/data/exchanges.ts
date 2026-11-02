/**
 * 交易所资料（手续费、USDC 提币网络等）
 * ------------------------------------------------------------
 * 数字来自 2026-11 的公开资料整理（来源见 docs/research-facts.md），
 * 交易所会不定期调整，页面上统一提示“以交易所页面为准”。
 * 邀请链接不在这里改，请改 src/config/affiliates.ts。
 */
import { AFFILIATES, FEATURED_ORDER, type AffiliateId } from '../config/affiliates';

export type ExchangeId = Exclude<AffiliateId, 'polymarket'>;

export interface ExchangeData {
  id: ExchangeId;
  name: string;
  nameZh: string;
  /** 徽标上的缩写（不使用官方 Logo，避免商标问题） */
  initials: string;
  color: string;
  textColor: string;
  /** 未配置邀请链接时 /go/ 跳转到这里 */
  officialUrl: string;
  tagline: string;
  /** 编辑评分（满分 5） */
  rating: number;
  bestFor: string;
  fees: {
    /** 百分比数字，0.1 表示 0.1% */
    spotMaker: number;
    spotTaker: number;
    /** null = 未能核实，页面显示“以官网为准” */
    futuresMaker: number | null;
    futuresTaker: number | null;
    tokenDiscount: string;
  };
  usdcPolygon: {
    /** null 表示未能确认 */
    supported: boolean | null;
    fee: string;
    min: string;
    note?: string;
  };
  /** 其他可提 USDC 的低费用网络 */
  usdcNetworks: string[];
  fiat: string;
  kyc: string;
  pros: string[];
  cons: string[];
  /** 站内注册教程 / 评测文章路径（有文章时填写） */
  guidePath?: string;
  /** 站内“从该交易所充值到 Polymarket”教程路径 */
  depositGuidePath?: string;
  /** 交易所 App / 钱包内参与 Polymarket（或其他预测市场）的入口说明；没有则不填 */
  predictionAccess?: string;
  /** 是否在交易所账户内直接使用 Polymarket 的市场与流动性 */
  inAppPolymarket?: boolean;
  /** 需要提醒用户的临时状况（会显示在卡片和对比表里），恢复正常后删掉即可 */
  alert?: string;
}

export const EXCHANGE_DATA: Record<ExchangeId, ExchangeData> = {
  binance: {
    id: 'binance',
    name: 'Binance',
    nameZh: '币安',
    initials: 'BN',
    color: '#F0B90B',
    textColor: '#1E2026',
    officialUrl: 'https://www.binance.com/',
    tagline: '头部交易所，交易品种多，P2P 法币通道覆盖广',
    rating: 4.5,
    bestFor: '需要多种法币 P2P 通道、交易品种多的用户',
    fees: {
      spotMaker: 0.1,
      spotTaker: 0.1,
      futuresMaker: 0.02,
      futuresTaker: 0.05,
      tokenDiscount: '用 BNB 抵扣现货手续费享 25% 折扣',
    },
    usdcPolygon: {
      supported: true,
      fee: '以提币页面显示为准（通常不到 1 USDC）',
      min: '以提币页面显示为准',
      note: '支持 Polygon 原生 USDC（不支持桥接版 USDC.e）。2026 年 10 月底安全事件后，提币于 11 月 1 日起分阶段恢复，操作前请查看官方公告。',
    },
    usdcNetworks: ['Polygon', 'Arbitrum', 'Base', 'Optimism', 'Solana', 'BNB Chain', 'Ethereum'],
    fiat: 'P2P 支持 100+ 种法币（含新台币等），也可银行卡买币',
    kyc: '必须完成身份认证（KYC）',
    pros: ['交易品种多、流动性好', 'P2P 法币通道覆盖广', '支持 Polygon 原生 USDC 提币'],
    alert: '据报道 2026-10-29 发生安全事件，11 月 1 日起分阶段恢复提币，操作前请看官方公告',
    guidePath: '/exchange/binance-register/',
    depositGuidePath: '/deposit/binance-to-polymarket/',
    predictionAccess: 'Binance Wallet 内的预测功能接入的是 predict.fun（非 Polymarket）',
    inAppPolymarket: false,
    cons: [
      '据报道 2026 年 10 月 29 日热钱包遭盗（官方称用户不承担损失），提币分阶段恢复中',
      '不服务美国、英国新用户、加拿大、马来西亚、新加坡、中国大陆等地区，欧盟新业务已暂停',
    ],
  },
  okx: {
    id: 'okx',
    name: 'OKX',
    nameZh: '欧易',
    initials: 'OKX',
    color: '#111111',
    textColor: '#FFFFFF',
    officialUrl: 'https://www.okx.com/',
    tagline: '头部交易所，现货挂单费率低，App 和 Web3 钱包体验好',
    rating: 4.7,
    bestFor: '想要低费率、同时使用链上钱包的用户',
    fees: {
      spotMaker: 0.08,
      spotTaker: 0.1,
      futuresMaker: 0.02,
      futuresTaker: 0.05,
      tokenDiscount: '按用户等级（VIP）阶梯降费',
    },
    usdcPolygon: {
      supported: true,
      fee: '以提币页面显示为准（Polygon 通常只需零点几 USDC）',
      min: '以提币页面显示为准',
      note: '支持 Polygon 网络 USDC 充提，也支持 Base、Arbitrum、Solana 等低费用网络。',
    },
    usdcNetworks: ['Polygon', 'Base', 'Arbitrum', 'Optimism', 'Solana', 'X Layer', 'Ethereum'],
    fiat: 'P2P 法币交易、银行卡买币（可用币种因地区而异）',
    kyc: '必须完成身份认证（KYC）',
    pros: ['现货挂单 0.08%，费率较低', '内置 Web3 钱包，链上操作方便', '支持多条低费用 USDC 网络'],
    guidePath: '/exchange/okx-register/',
    depositGuidePath: '/deposit/okx-to-polymarket/',
    predictionAccess: '提供 BTC / ETH 等涨跌“事件合约”（不是综合预测市场）',
    inAppPolymarket: false,
    cons: [
      '不服务香港（2024 年起）、加拿大、马来西亚、中国大陆等地区，美国用户需用独立的 OKX US',
      '2025 年 2 月其运营实体在美国认罪并缴纳约 5 亿美元罚款',
    ],
  },
  bitget: {
    id: 'bitget',
    name: 'Bitget',
    nameZh: 'Bitget',
    initials: 'BG',
    color: '#1DA2B4',
    textColor: '#FFFFFF',
    officialUrl: 'https://www.bitget.com/',
    tagline: '以跟单交易出名，新用户活动多',
    rating: 4.4,
    bestFor: '想参加新人活动、尝试跟单交易的用户',
    fees: {
      spotMaker: 0.1,
      spotTaker: 0.1,
      futuresMaker: 0.02,
      futuresTaker: 0.06,
      tokenDiscount: '用 BGB 抵扣手续费可享折扣',
    },
    usdcPolygon: {
      supported: null,
      fee: '以提币页面显示为准',
      min: '以提币页面显示为准',
      note: '提币前请在提币页面确认 USDC 是否提供 Polygon 网络；也可以选择 Polymarket 支持的其他网络。',
    },
    usdcNetworks: ['Arbitrum', 'Base', 'Solana', 'BNB Chain', 'Ethereum'],
    fiat: '有 P2P 市场，支持哪些法币以官网为准',
    kyc: '必须完成身份认证（KYC）',
    pros: ['跟单交易生态成熟', '新用户福利活动多', '旗下 Bitget Wallet 已接入 Polymarket'],
    guidePath: '/exchange/bitget-register/',
    depositGuidePath: '/deposit/bitget-to-polymarket/',
    predictionAccess: '自托管的 Bitget Wallet 已接入 Polymarket（交易所账户本身没有）',
    inAppPolymarket: false,
    cons: ['据资料不服务美国、加拿大、新加坡、香港、中国大陆等地区，英国不接受新用户（以官网为准）', '活动规则较多，需仔细看条款'],
  },
  gate: {
    id: 'gate',
    name: 'Gate',
    nameZh: 'Gate',
    initials: 'GT',
    color: '#2354E6',
    textColor: '#FFFFFF',
    officialUrl: 'https://www.gate.com/',
    tagline: '老牌交易所，币种数量多、新币上线快（2025 年起主域名为 gate.com）',
    rating: 4.2,
    bestFor: '喜欢交易小币种、新币的用户',
    fees: {
      spotMaker: 0.1,
      spotTaker: 0.1,
      futuresMaker: null,
      futuresTaker: null,
      tokenDiscount: '用 GT 抵扣手续费可享折扣',
    },
    usdcPolygon: {
      supported: null,
      fee: '以提币页面显示为准',
      min: '以提币页面显示为准',
      note: '提币前请在提币页面确认 USDC 是否提供 Polygon 网络；也可以选择 Polymarket 支持的其他网络。',
    },
    usdcNetworks: ['Arbitrum', 'Base', 'Solana', 'BNB Chain', 'Ethereum'],
    fiat: '法币买币方式以官网为准',
    kyc: '必须完成身份认证（KYC）',
    pros: ['App 内可直接参与 Polymarket 市场（公测）', '上币快、币种多', '理财和活动产品丰富'],
    guidePath: '/exchange/gate-register/',
    predictionAccess: 'Gate App 2026 年 3 月接入 Polymarket，可用现货 USDT 参与（公测，以 App 为准）',
    inAppPolymarket: true,
    cons: ['小币种波动和风险大', '据资料不服务美国、加拿大等地区，香港用户可能受限（以官网为准）'],
  },
  bybit: {
    id: 'bybit',
    name: 'Bybit',
    nameZh: 'Bybit',
    initials: 'BB',
    color: '#F7A600',
    textColor: '#17181E',
    officialUrl: 'https://www.bybit.com/',
    tagline: '老牌交易所，撮合深度好，界面简洁，已上线基于 Polymarket 的预测入口',
    rating: 4.2,
    bestFor: '想在交易所账户里直接参与预测市场的用户',
    fees: {
      spotMaker: 0.1,
      spotTaker: 0.1,
      futuresMaker: 0.02,
      futuresTaker: 0.055,
      tokenDiscount: '按 VIP 等级享受更低费率',
    },
    usdcPolygon: {
      supported: null,
      fee: '以提币页面显示为准',
      min: '以提币页面显示为准',
      note: '提币前请在提币页面确认 USDC 是否提供 Polygon 网络；也可以选择 Polymarket 支持的其他网络。',
    },
    usdcNetworks: ['Arbitrum', 'Base', 'Solana', 'Ethereum'],
    fiat: '有 P2P 市场，支持哪些法币以官网为准',
    kyc: '必须完成身份认证（KYC）',
    pros: ['Bybit Prediction 使用 Polymarket 流动性，可用账户内 USDC 参与', '撮合深度好、运行稳定', '界面简洁'],
    guidePath: '/exchange/bybit-register/',
    predictionAccess: 'Bybit Prediction（2026 年 6 月上线）使用 Polymarket 流动性，用账户内 USDC 参与',
    inAppPolymarket: true,
    cons: [
      '2025 年 2 月冷钱包被盗约 14 亿美元（平台已垫付，未影响用户资产）',
      '据资料不服务美国、新加坡、加拿大、马来西亚、香港、中国大陆等地区（以官网为准）',
    ],
  },
};

export interface Exchange extends ExchangeData {
  goUrl: string;
  inviteCode: string;
  hasInvite: boolean;
  inviteeRebate: number | null;
  /** 返佣文案：已配置比例时显示具体比例，否则统一提示以注册页为准 */
  rebateLabel: string;
  rebateNote?: string;
}

/** 费率对显示：0.02% / 0.05%；未核实时显示“以官网为准” */
export function feePair(maker: number | null, taker: number | null): string {
  return maker == null || taker == null ? '以官网为准' : `${maker}% / ${taker}%`;
}

export function formatPct(value: number, digits = 0): string {
  return `${(value * 100).toFixed(digits).replace(/\.0+$/, '')}%`;
}

export function getExchange(id: ExchangeId): Exchange {
  const data = EXCHANGE_DATA[id];
  const aff = AFFILIATES[id];
  const hasInvite = Boolean(aff.inviteUrl);
  const rebateLabel =
    aff.inviteeRebate != null
      ? `通过本站链接注册，手续费返还 ${formatPct(aff.inviteeRebate)}`
      : '通过邀请链接注册可享手续费优惠（比例以注册页面为准）';
  return {
    ...data,
    goUrl: `/go/${id}/`,
    inviteCode: aff.inviteCode,
    hasInvite,
    inviteeRebate: aff.inviteeRebate,
    rebateLabel,
    rebateNote: aff.rebateNote,
  };
}

export function getExchanges(ids: ExchangeId[] = FEATURED_ORDER): Exchange[] {
  return ids.map(getExchange);
}

export const ALL_EXCHANGE_IDS = Object.keys(EXCHANGE_DATA) as ExchangeId[];

export function isExchangeId(value: string): value is ExchangeId {
  return value in EXCHANGE_DATA;
}

/** /go/<id>/ 跳转目标：有邀请链接用邀请链接，否则用官网 */
export function resolveGoTarget(id: AffiliateId): string {
  if (id === 'polymarket') {
    return AFFILIATES.polymarket.inviteUrl || 'https://polymarket.com/';
  }
  return AFFILIATES[id].inviteUrl || EXCHANGE_DATA[id].officialUrl;
}
