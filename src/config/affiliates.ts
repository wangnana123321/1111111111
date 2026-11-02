/**
 * 邀请链接 / 返佣配置 —— 拿到链接后只需要改这一个文件
 * ------------------------------------------------------------
 * - inviteUrl：你的专属邀请链接（完整 URL）。留空时 /go/xxx 会跳到交易所官网首页，网站照常可用。
 * - inviteCode：邀请码，页面上会显示“注册时填写邀请码 XXX”。留空则不显示。
 * - inviteeRebate：被邀请人能拿到的手续费返还比例（0–1 之间的小数，例如 0.2 = 20%）。
 *     这是你在交易所后台给下级设置的“返还比例”，必须和实际一致；
 *     留 null 时页面统一写“以注册页面显示为准”，不会宣传具体比例。
 * - rebateNote：对返佣的补充说明（可选），例如“现货与合约均适用”。
 *
 * 全站所有推广按钮都指向 /go/<id>/，由这里统一控制，换链接不用改文章。
 */

export type AffiliateId = 'binance' | 'okx' | 'bitget' | 'gate' | 'bybit' | 'polymarket';

export interface AffiliateConfig {
  inviteUrl: string;
  inviteCode: string;
  inviteeRebate: number | null;
  rebateNote?: string;
}

export const AFFILIATES: Record<AffiliateId, AffiliateConfig> = {
  binance: {
    inviteUrl: '',
    inviteCode: '',
    inviteeRebate: null,
  },
  okx: {
    inviteUrl: '',
    inviteCode: '',
    inviteeRebate: null,
  },
  bitget: {
    inviteUrl: '',
    inviteCode: '',
    inviteeRebate: null,
  },
  gate: {
    inviteUrl: '',
    inviteCode: '',
    inviteeRebate: null,
  },
  bybit: {
    inviteUrl: '',
    inviteCode: '',
    inviteeRebate: null,
  },
  polymarket: {
    // Polymarket 邀请链接（例如 https://polymarket.com/?via=xxx 这种形式，以你后台实际给出的为准）
    // 填好后，“热门市场”页面里每个市场的链接也会自动带上同样的邀请参数。
    inviteUrl: '',
    inviteCode: '',
    inviteeRebate: null,
  },
};

/**
 * 首页、侧边栏默认推荐的交易所顺序（第 1 个是全站主推，前 3 个出现在推荐卡片里）。
 * 拿到各家链接后，可以按佣金高低、你的读者所在地区调整顺序。
 * 默认 OKX 排第一：币安 2026-10-29 发生安全事件后提币仍在分阶段恢复，待恢复正常后可以调回。
 */
export const FEATURED_ORDER: Exclude<AffiliateId, 'polymarket'>[] = [
  'okx',
  'binance',
  'bitget',
  'gate',
  'bybit',
];
