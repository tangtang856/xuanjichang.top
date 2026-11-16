const { DOMAIN, airports, getRelativeRoot, buildPage } = require('./generate-site');

function buildRecommends() {
  const depth = 2;
  const root = getRelativeRoot(depth);

  const categories = [
    {
      slug: 'budget',
      title: '低预算便宜机场推荐专题 - 极致性价比与月付方案',
      h1: '平价低预算机场选购方案与推荐专题',
      badge: '低预算方案',
      desc: '专为在校学生党、轻度查资料用户及多设备应急备用设计的低价方案，重点关注月付10元以内起步套餐，灵活弹性不捆绑。',
      filter: (a) => a.startingPrice <= 20,
      tips: [
        '预算有限时务必优先选择「月付」模式，切忌被超低年付诱惑导致因跑路遭受全额损失。',
        '低预算套餐通常限制同时在线设备为2-3台，日常使用时注意避免同时在过多设备上连接。',
        '建议选择节点倍率标注透明的品牌（如0.2倍率到1.0倍率规范公示），避开暗扣流量套路。'
      ]
    },
    {
      slug: 'premium',
      title: '高端IEPL专线机场推荐专题 - 晚高峰低延迟抗封锁专线',
      h1: '高端IEPL/IPLC专线机场推荐专题',
      badge: '高端专线',
      desc: '基于纯正IEPL/IPLC内网物理光缆专线，不经过公网GFW审查，具备晚高峰零丢包、超低延迟抖动与高抗封锁能力。',
      filter: (a) => a.lineType.includes('专线') || a.startingPrice >= 25,
      tips: [
        'IEPL专线走的是点对点内网传输，即使在重大节假日或敏感期，连接依然极度稳定。',
        '专线机房带宽成本极高，因此套餐单价通常在30元/月以上，严禁用于P2P大流量BT下载。',
        '适合跨国远程办公（Slack、Zoom会议）、外汇期货高频交易以及追求极速4K/8K秒开的进阶用户。'
      ]
    },
    {
      slug: 'beginner',
      title: '新手入门机场推荐专题 - 一键导入与中文全平台客户端',
      h1: '新手小白入门机场推荐专题',
      badge: '新手无门槛',
      desc: '面向首次接触科学上网的小白用户，提供全中文管理后台、主流客户端（Clash、小火箭）一键导入订阅及图文保姆级教程。',
      filter: (a) => true,
      tips: [
        '新手切勿自行从百度或不明搜索引擎下载被篡改的所谓“破解版”客户端，务必认准官方开源仓库。',
        '购买后在用户后台直接点击“一键导入Clash”或“一键导入Shadowrocket”，几秒钟即可完成所有节点配置。',
        '遇到节点连不上时，首先在客户端中点击“更新订阅”，90%的节点配置失效问题均能自动修复。'
      ]
    },
    {
      slug: 'stable',
      title: '稳定优先抗封锁机场推荐专题 - 多入口BGP容灾解析',
      h1: '稳定优先抗封锁机场推荐专题',
      badge: '抗封锁高可用',
      desc: '采用多线BGP入口智能解析与内网容灾链路，单一入口故障自动秒级切换备用链路，确保全天候不断连。',
      filter: (a) => a.stabilityRating >= 9.0,
      tips: [
        '单线直连节点只要被防火墙封锁IP就会瞬间全军覆没，而BGP多入口架构能在后台秒级调度备用IP。',
        '建议在客户端中开启“自动故障转移（Fallback）”或“延迟自动测速选择（URL-Test）”策略组。',
        '重要工作建议准备两条不同服务商的节点订阅，形成双重冗余保障。'
      ]
    },
    {
      slug: 'ai',
      title: 'ChatGPT与Claude专用AI机场推荐 - 原生纯净住宅IP精选',
      h1: 'AI大模型专用机场推荐（原生纯净IP解锁）',
      badge: 'AI模型专属',
      desc: '专为OpenAI ChatGPT、Anthropic Claude、Midjourney及Google Gemini打造，精选拥有海外原生纯净住宅级IP的节点。',
      filter: (a) => a.aiSupport.some(ai => ai.includes('ChatGPT')),
      tips: [
        'OpenAI与Claude具备严格的IP反作弊与数据中心黑名单机制，普通机房广播IP容易遭遇“Access Denied”或封号。',
        '使用AI服务时，建议选择美国、英国、日本或新加坡的专用原生节点，并保持固定节点登录。',
        '如果在客户端使用分流，请确保配置规则将 openai.com 与 anthropic.com 强制走代理通道。'
      ]
    },
    {
      slug: 'streaming',
      title: '4K流媒体解锁机场推荐 - Netflix与YouTube超清专线',
      h1: 'Netflix与Disney+ 4K流媒体专用机场推荐',
      badge: '超清追剧',
      desc: '针对Netflix跨区解锁、Disney+、YouTube Premium、HBO Max及日韩本地流媒体深度优化，原生DNS解锁秒开4K/8K。',
      filter: (a) => a.streamingSupport.length >= 3,
      tips: [
        'Netflix会对IDC数据中心IP进行大范围封锁，仅允许展示非版权限制的自制剧；本专题精选可完整解锁全区非自制剧的节点。',
        '追剧建议选择物理距离较近的香港、台湾、日本、新加坡节点，物理传输延迟更低，4K拖动进度条不缓冲。',
        '配合Apple TV、Android TV电视盒子使用时，选择支持大流量与多设备并发的套餐更划算。'
      ]
    }
  ];

  categories.forEach(cat => {
    const list = airports.filter(cat.filter);

    const content = `
    <div class="container article-container">
      <div class="article-main">
        <header class="article-header">
          <span class="badge badge-blue">${cat.badge}</span>
          <h1 style="font-size: 2.1rem; margin-top: 0.5rem; margin-bottom: 0.75rem;">${cat.h1}</h1>
          <div class="article-meta">
            <span>最后更新：2026-03</span>
            <span>适配场景：${cat.badge}</span>
            <span>真实核验：选机场网编辑部</span>
          </div>
        </header>

        <p style="font-size: 1.05rem; line-height: 1.7; color: var(--text-body); margin-bottom: 1.5rem;">
          ${cat.desc}
        </p>

        <div class="quick-answer-card" style="margin-top: 0;">
          <div class="quick-answer-header">💡 本专题核心选购与避坑建议</div>
          <ul style="margin: 0.5rem 0 0 1.25rem; font-size: 0.925rem; color: var(--text-body);">
            ${cat.tips.map(t => `<li style="margin-bottom: 0.4rem;">${t}</li>`).join('')}
          </ul>
        </div>

        <h2 style="font-size: 1.5rem; margin: 2rem 0 1rem 0;">符合本专题标准的精选机场清单</h2>
        <div class="cards-grid-2">
          ${list.map(ap => `
            <div class="airport-card">
              <div class="card-top">
                <div>
                  <h3 class="airport-brand-title">${ap.name}</h3>
                  <span class="airport-tag">${ap.lineType}</span>
                </div>
                <span class="badge badge-blue">¥${ap.startingPrice} / 月起</span>
              </div>
              <p style="font-size: 0.875rem; color: var(--text-body); margin-bottom: 1rem;">${ap.description}</p>
              <ul class="card-features-list">
                <li><span class="icon-check">✓</span> <span>起步套餐：${ap.plans[0].name} (${ap.plans[0].traffic})</span></li>
                <li><span class="icon-check">✓</span> <span>特性：${ap.advantages[0]}</span></li>
                <li><span class="icon-info">ℹ</span> <span>适配：${ap.suitableFor[0]}</span></li>
              </ul>
              <div class="card-actions">
                <a href="${root}review/${ap.slug}/index.html" class="btn btn-outline btn-sm">查看评测</a>
                <a href="${root}compare/index.html" class="btn btn-primary btn-sm">横向比对</a>
              </div>
            </div>
          `).join('')}
        </div>

        <div class="article-content" style="margin-top: 2.5rem;">
          <h2>为什么按场景定制选购比盲目跟风更重要？</h2>
          <p>
            很多用户在寻找“梯子推荐”或“机场推荐”时，经常会陷入一个误区：寻找一个“绝对最好”的全能机场。然而在现实网络拓扑中，<strong>没有任何单一架构能在超低价格、超大流量、极低游戏延迟和AI纯净IP之间全部达到极致</strong>。
          </p>
          <p>
            例如：纯正的 IEPL 专线为了确保晚高峰零丢包与低延迟，其带宽成本极其高昂，因此套餐流量通常偏小，并不适合无节制下载TB级BT资源；而平价大流量中转虽然单价实惠，但难免在敏感期遭遇短暂网络波动。明确自己的第一核心诉求，才是最明智的选购路径。
          </p>
        </div>
      </div>

      <aside class="article-sidebar">
        <div class="sidebar-widget">
          <div class="sidebar-widget-title">全部分类专题导航</div>
          <ul class="toc-list">
            ${categories.map(c => `
              <li><a href="${root}recommend/${c.slug}/index.html" ${c.slug === cat.slug ? 'style="color: var(--primary); font-weight: bold;"' : ''}>${c.h1.replace('推荐专题', '')}</a></li>
            `).join('')}
          </ul>
        </div>
        <div class="sidebar-widget">
          <div class="sidebar-widget-title">实用工具</div>
          <ul class="toc-list">
            <li><a href="${root}compare/index.html">机场参数在线比对工具</a></li>
            <li><a href="${root}ranking/overall/index.html">2026综合实力榜</a></li>
            <li><a href="${root}guides/index.html">客户端图文教程</a></li>
          </ul>
        </div>
      </aside>
    </div>
    `;

    buildPage({
      relPath: `recommend/${cat.slug}/index.html`,
      title: `${cat.title} | 选机场网`,
      description: `${cat.desc} 选机场网为您整理${cat.badge}场景下的精选机场与梯子节点推荐，资费透明，支持月付。`,
      keywords: `${cat.badge}, 机场推荐, 梯子推荐, 性价比机场, 机场节点, vpn推荐`,
      canonicalUrl: `${DOMAIN}/recommend/${cat.slug}/`,
      depth,
      activeNav: 'recommend',
      breadcrumbs: [{ name: '机场推荐', url: `${root}recommend/index.html` }, { name: cat.h1 }],
      bodyContent: content
    });
  });

  // 推荐汇总页 recommend/index.html
  {
    const depthIndex = 1;
    const rootIndex = getRelativeRoot(depthIndex);

    const content = `
    <div class="container" style="padding: 3rem 1.25rem;">
      <header style="margin-bottom: 2.5rem; text-align: center;">
        <span class="badge badge-blue">场景化分类</span>
        <h1 style="font-size: 2.3rem; margin-top: 0.5rem; margin-bottom: 0.75rem;">机场场景化专题推荐中心</h1>
        <p style="color: var(--text-muted); max-width: 700px; margin: 0 auto; font-size: 1.05rem;">
          根据您的实际应用场景、预算承受力及网络用途，快速进入对应细分推荐专题。
        </p>
      </header>

      <div class="cards-grid-3">
        ${categories.map(c => `
          <a href="${rootIndex}recommend/${c.slug}/index.html" class="category-card">
            <div class="cat-icon">${c.slug === 'budget' ? '💰' : c.slug === 'premium' ? '🚀' : c.slug === 'beginner' ? '🔰' : c.slug === 'stable' ? '🛡️' : c.slug === 'ai' ? '🤖' : '🎬'}</div>
            <h2 class="cat-title">${c.h1}</h2>
            <p class="cat-desc">${c.desc}</p>
            <div class="cat-footer">进入专题查看精选方案 &rarr;</div>
          </a>
        `).join('')}
      </div>
    </div>
    `;

    buildPage({
      relPath: 'recommend/index.html',
      title: '机场专题推荐导航 - 按场景与需求精准挑选优质节点 | 选机场网',
      description: '选机场网场景化推荐汇总专区。包含低预算、高端IEPL专线、小白新手入门、稳定优先抗封锁、AI大模型及4K流媒体专用机场节点专题。',
      keywords: '机场推荐, 梯子推荐, 性价比机场, 机场节点, 场景选购, 科学上网推荐',
      canonicalUrl: `${DOMAIN}/recommend/`,
      depth: depthIndex,
      activeNav: 'recommend',
      breadcrumbs: [{ name: '机场推荐' }],
      bodyContent: content
    });
  }
}

module.exports = buildRecommends;
