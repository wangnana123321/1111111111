export type CategoryId = 'polymarket' | 'deposit' | 'exchange' | 'strategy';

export interface Category {
  id: CategoryId;
  /** 导航与面包屑名称 */
  name: string;
  /** 栏目页 H1 */
  title: string;
  /** 栏目页 <title> */
  seoTitle: string;
  description: string;
  /** 栏目页导语（支持多段） */
  intro: string[];
  icon: string;
}

export const CATEGORIES: Category[] = [
  {
    id: 'polymarket',
    name: 'Polymarket 教程',
    title: 'Polymarket 新手教程',
    seoTitle: 'Polymarket 教程大全：是什么、怎么玩、规则与风险（2026）',
    description:
      'Polymarket 中文新手教程合集：Polymarket 是什么、怎么注册、价格和概率怎么看、手续费、哪些地区能用、空投与防骗，一站讲清楚。',
    intro: [
      'Polymarket 是目前全球交易量最大的预测市场：你可以对“某件事会不会发生”买入“是 / 否”份额，猜对每份拿回 1 美元。',
      '这个栏目按新手的学习顺序整理：先搞懂它是什么、能不能用、价格怎么看，再去学充值和下注。',
    ],
    icon: '🎯',
  },
  {
    id: 'deposit',
    name: '充值提现',
    title: 'Polymarket 充值与提现',
    seoTitle: 'Polymarket 怎么充值、怎么提现：USDC 入金出金全攻略（2026）',
    description:
      'Polymarket 充值（入金）与提现（出金）教程：USDC 是什么、在哪买、怎么从币安 / OKX / Bitget 提到 Polymarket、选错网络怎么办、怎么换回法币。',
    intro: [
      '玩 Polymarket 最容易卡住的一步就是“钱怎么进去、怎么出来”。绝大多数人的路线是：在交易所买 USDC → 提币到 Polymarket → 赢了再提回交易所换成法币。',
      '这里按交易所分别写了详细步骤，并整理了每家提币的网络、手续费和最低额度。',
    ],
    icon: '💸',
  },
  {
    id: 'exchange',
    name: '交易所返佣',
    title: '交易所对比与返佣',
    seoTitle: '交易所怎么选：币安、OKX、Bitget、Gate、Bybit 手续费与返佣对比（2026）',
    description:
      '主流加密货币交易所对比：现货与合约手续费、邀请返佣、USDC 提币网络与费用、法币入金方式，以及各家注册教程。',
    intro: [
      '交易所是你买 USDC、给 Polymarket 充值、最后换回法币的地方。选一家手续费低、支持 Polygon 网络提 USDC、法币入金方便的交易所，能省下不少钱。',
      '通过邀请链接注册通常能拿到手续费返还，长期交易下来是一笔可观的节省。下面的对比表和注册教程可以帮你快速做决定。',
    ],
    icon: '🏦',
  },
  {
    id: 'strategy',
    name: '进阶玩法',
    title: '预测市场进阶玩法',
    seoTitle: 'Polymarket 进阶：怎么赚钱、策略、套利与风险控制',
    description:
      'Polymarket 进阶玩法：常见策略、提前卖出、限价单、套利原理、仓位管理，以及为什么大多数人会亏钱。',
    intro: [
      '会下注只是开始。预测市场本质是一个交易市场：价格会随消息波动，你可以提前卖出锁定利润，也可能因为追高而亏损。',
      '这个栏目讲清楚常见策略的原理和风险，帮你少交学费。',
    ],
    icon: '🧠',
  },
];

export const CATEGORY_MAP = Object.fromEntries(CATEGORIES.map((c) => [c.id, c])) as Record<
  CategoryId,
  Category
>;

export function isCategoryId(value: string): value is CategoryId {
  return value in CATEGORY_MAP;
}
