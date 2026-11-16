// scripts/make-keyword-map.js
const fs = require('fs');
const path = require('path');
const DOMAIN = 'https://xuanjichang.top';

const tutorials = require('./data-tutorials.js');
const articles = require('./data-articles.js');
const airports = require('../data/airports.js');

const rows = [
  'Keyword,Intent,Target URL,Page Type,Priority,Title,H1',
  '机场推荐,商业调研与聚合选择,https://xuanjichang.top/,Pillar (首页),P0,2026精选优质机场推荐与VPN节点评测导航 - 选机场网,2026年高质量中文机场推荐与科学上网节点选购指南',
  '梯子推荐,商业调查与替代方案,https://xuanjichang.top/,Pillar (首页),P0,2026精选优质机场推荐与VPN节点评测导航 - 选机场网,2026年高质量中文机场推荐与科学上网节点选购指南',
  'vpn推荐,通用网络隐私与网络工具检索,https://xuanjichang.top/,Pillar (首页),P0,2026精选优质机场推荐与VPN节点评测导航 - 选机场网,2026年高质量中文机场推荐与科学上网节点选购指南',
  '综合排行榜,深度决策与多维度对比,https://xuanjichang.top/ranking/overall/,Ranking,P0,2026年度综合实力机场排行榜 - 稳定性与速度综合评定,2026年度机场综合实力排行榜',
  '性价比机场,价格敏感与实用型选择,https://xuanjichang.top/ranking/value/,Ranking,P0,2026年高性价比机场排行榜 - 每GB单价与真实流量折算,2026年高性价比实用机场排行榜',
  '低预算机场,极致省钱与学生党备用,https://xuanjichang.top/ranking/budget/,Ranking,P1,低预算便宜机场排行榜 - 月付10元内平价备用推荐,低预算平价机场排行榜（月付10元以内精选）',
  '稳定机场,高可用商业与远程办公,https://xuanjichang.top/ranking/stable/,Ranking,P0,高稳定专线机场排行榜 - 晚高峰零丢包IEPL专线推荐,高稳定性专线机场排行榜（晚高峰防断连）',
  '排行榜中心,聚合排行榜总览,https://xuanjichang.top/ranking/,Ranking Hub,P1,机场排行榜总览 - 综合实力/性价比/低预算/稳定性多维度排行,机场排行榜导航中心',
  '低预算专题,学生党与轻度冲浪,https://xuanjichang.top/recommend/budget/,Cluster,P1,低预算便宜机场推荐专题 - 极致性价比与月付方案,平价低预算机场选购方案与推荐专题',
  '高端专线机场,4K超清与跨境办公,https://xuanjichang.top/recommend/premium/,Cluster,P0,高端IEPL专线机场推荐专题 - 晚高峰低延迟抗封锁专线,高端IEPL/IPLC专线机场推荐专题',
  '新手入门机场,开箱即用与一键导入,https://xuanjichang.top/recommend/beginner/,Cluster,P0,新手入门机场推荐专题 - 一键导入与中文全平台客户端,新手小白入门机场推荐专题',
  '稳定性优先机场,企业办公与股票行情,https://xuanjichang.top/recommend/stable/,Cluster,P0,稳定优先抗封锁机场推荐专题 - 多入口BGP容灾解析,稳定优先抗封锁机场推荐专题',
  'AI服务机场,ChatGPT与Claude无风控,https://xuanjichang.top/recommend/ai/,Cluster,P0,ChatGPT与Claude专用AI机场推荐 - 原生纯净住宅IP精选,AI大模型专用机场推荐（原生纯净IP解锁）',
  '流媒体机场,Netflix与Disney+ 4K解锁,https://xuanjichang.top/recommend/streaming/,Cluster,P1,4K流媒体解锁机场推荐 - Netflix与YouTube超清专线,Netflix与Disney+ 4K流媒体专用机场推荐',
  '专题推荐中心,按需求挑选导航,https://xuanjichang.top/recommend/,Cluster Hub,P1,精选机场推荐专题导航 - 预算/专线/新手/AI/流媒体全覆盖,精选场景推荐专题',
  '机场横向比较,多品牌参数直接横向对照,https://xuanjichang.top/compare/,Tool,P0,机场在线横向对比工具 - 价格流量协议节点全维度比对,在线机场参数与价格横向对比工具',
  '教程中心总览,全平台客户端汇总,https://xuanjichang.top/guides/,Tutorial Hub,P0,科学上网与客户端使用教程中心 - Windows/Android/iOS/Mac全覆盖,科学上网全平台客户端教程中心',
  '博客指南总览,100篇核心文章全集,https://xuanjichang.top/blog/,Article Hub,P0,科学上网与机场选购深度指南专栏 - 100篇核心文章全集,选购认知与防坑深度指南专栏',
  '评测中心总览,14大主流品牌实测汇总,https://xuanjichang.top/review/,Review Hub,P0,机场独立评测导航中心 - 14家主流品牌价格与线路深度实测,机场评测中心',
  '术语百科总览,网络与协议术语汇总,https://xuanjichang.top/glossary/,Glossary Hub,P1,科学上网与网络技术术语知识百科中心,科学上网术语知识百科'
];

// 14 个机场评测
airports.forEach(ap => {
  rows.push(`${ap.name}评测,品牌深度独立实测,${DOMAIN}/review/${ap.slug}/,Review,P0,${ap.name}怎么样？2026真实套餐价格与使用评测,${ap.name}深度评测与客观分析`);
});

// 30 篇实战教程
tutorials.forEach(t => {
  rows.push(`${t.client}教程,客户端安装与分流教程,${DOMAIN}/guides/${t.slug}/,Tutorial,P0,${t.title},${t.h1}`);
});

// 100 篇深度文章
articles.forEach(a => {
  rows.push(`${a.tag},深度科普与选型决策,${DOMAIN}/blog/${a.slug}/,Article,P1,${a.title},${a.h1}`);
});

// 术语百科
const glossaries = [
  { slug: 'iplc-iepl', name: 'IPLC与IEPL专线解析' },
  { slug: 'clash', name: 'Clash内核与客户端解析' },
  { slug: 'shadowsocks-trojan', name: 'Shadowsocks与Trojan协议' },
  { slug: 'shadowrocket', name: 'Shadowrocket小火箭术语' },
  { slug: 'rate-multiplier', name: '倍率与流量计算规则' }
];
glossaries.forEach(g => {
  rows.push(`${g.name},网络架构专业术语认知,${DOMAIN}/glossary/${g.slug}/,Glossary,P1,${g.name}科普与解析,${g.name}`);
});

// 信任页面
rows.push(`关于我们,站点介绍与技术使命,${DOMAIN}/about/,Trust,P2,关于选机场网 - 独立客观的中文网络工具与节点资讯站,关于选机场网`);
rows.push(`联系方式,用户反馈与纠错入口,${DOMAIN}/contact/,Trust,P2,联系我们 - 选机场网意见反馈与纠错,联系我们`);
rows.push(`编辑政策,客观性声明与评价标准,${DOMAIN}/editorial-policy/,Trust,P2,编辑政策与评测标准 - 选机场网独立内容创作规范,编辑政策`);
rows.push(`隐私政策,合规隐私声明,${DOMAIN}/privacy-policy/,Trust,P2,隐私政策 - 选机场网用户隐私与Cookie使用声明,隐私政策`);
rows.push(`免责声明,合规风险与法律提示,${DOMAIN}/disclaimer/,Trust,P2,免责声明与服务条款 - 选机场网内容使用规范,免责声明`);

fs.writeFileSync(path.join(__dirname, '..', 'docs', 'keyword-map.csv'), rows.join('\n'), 'utf-8');
console.log('Successfully generated docs/keyword-map.csv with', rows.length - 1, 'mapped entries.');
