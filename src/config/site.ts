/**
 * 站点基础配置
 * ------------------------------------------------------------
 * 上线前需要改的只有两处：
 *   1. 本文件的 url（或在部署平台设置环境变量 SITE_URL）
 *   2. src/config/affiliates.ts 里的邀请链接
 */

const envUrl =
  (typeof process !== 'undefined' && process.env && process.env.SITE_URL) || '';

export const SITE = {
  /** 站点名称：出现在 <title>、页头、结构化数据里 */
  name: '预测市场指南',
  /** 短名：移动端页头、版权信息 */
  shortName: '预测指南',
  /** 英文名（结构化数据 alternateName） */
  englishName: 'Prediction Market Guide',
  /** 一句话定位：首页 <title> 和 meta description 会用到 */
  tagline: 'Polymarket 中文新手教程 · 入金攻略 · 交易所返佣',
  description:
    '面向中文用户的 Polymarket 预测市场入门站：从注册、买 USDC、充值入金到下注和提现，一步步讲清楚；附交易所手续费与返佣对比、赔率计算器和返佣计算器。',
  /**
   * 正式域名（不要以 / 结尾）。域名确定后改这里，或在构建环境设置 SITE_URL。
   * 未设置时使用占位域名，构建会给出警告。
   */
  url: (envUrl || 'https://example.com').replace(/\/+$/, ''),
  /** HTML lang：简体中文 */
  lang: 'zh-Hans',
  ogLocale: 'zh_CN',
  /** 默认分享图（public/ 下） */
  ogImage: '/og-default.png',
  /** 联系邮箱（留空则联系页显示“暂未开放”） */
  contactEmail: '',
  /** 社交账号（留空则不显示） */
  social: {
    twitter: '', // 例如 https://x.com/yourname
    telegram: '', // 例如 https://t.me/yourchannel
  },
  /** 统计代码（全部可选，留空不加载任何脚本） */
  analytics: {
    /** Google Analytics 4，例如 G-XXXXXXXXXX */
    ga4: '',
    /** Cloudflare Web Analytics token */
    cloudflareToken: '',
  },
  /** Google Search Console 验证码（meta 方式，可选） */
  googleSiteVerification: '',
  /** 内容最后一次整体核对的日期，展示在“数据核对”提示里 */
  factsCheckedAt: '2026-11',
} as const;

export const isPlaceholderDomain = SITE.url.includes('example.com');
