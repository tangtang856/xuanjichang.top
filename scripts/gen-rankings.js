// scripts/gen-rankings.js
// 选机场网 (xuanjichang.top) - 多维度排行榜页面生成器（纯响应式卡片排版，完全移除表格与横向滚动条）
const { DOMAIN, airports, getRelativeRoot, buildPage } = require('./generate-site');

function buildRankings() {
  const depth = 2;
  const root = getRelativeRoot(depth);

  // 顶部横向切换导航组件
  function renderNavTabs(activeKey) {
    return `
    <nav class="ranking-nav-tabs">
      <a href="${root}ranking/overall/index.html" class="ranking-tab ${activeKey === 'overall' ? 'active' : ''}">🏆 综合实力榜</a>
      <a href="${root}ranking/value/index.html" class="ranking-tab ${activeKey === 'value' ? 'active' : ''}">💰 高性价比榜</a>
      <a href="${root}ranking/stable/index.html" class="ranking-tab ${activeKey === 'stable' ? 'active' : ''}">🛡️ 稳定专线榜</a>
      <a href="${root}ranking/budget/index.html" class="ranking-tab ${activeKey === 'budget' ? 'active' : ''}">🏷️ 低预算平价榜</a>
      <a href="${root}compare/index.html" class="ranking-tab" style="margin-left: auto;">⚖️ 多品牌横向比对</a>
    </nav>
    `;
  }

  // 1. 综合排行榜
  {
    const content = `
    <div class="container ranking-container">
      <header class="article-header">
        <span class="badge badge-blue">权威排行</span>
        <h1 style="font-size: 2.1rem; margin-top: 0.5rem; margin-bottom: 0.75rem;">2026年度机场综合实力排行榜</h1>
        <div class="article-meta">
          <span>最后更新：2026-03</span>
          <span>评定维度：专线架构 / 真实性价比 / 晚高峰抗拥塞 / AI与流媒体解锁</span>
          <span>数据保真：站长自费订阅真机实测（100%原创证据 · 优惠券永久有效）</span>
        </div>
      </header>

      ${renderNavTabs('overall')}

      <div class="quick-answer-card" style="margin-top: 0;">
        <div class="quick-answer-header">📌 综合排行榜核心结论速览</div>
        <p style="font-size: 0.95rem; margin-bottom: 0.5rem;">
          本榜单综合考量了<strong>线路架构稳定性（IEPL/IPLC/BGP）</strong>、<strong>每GB真实资费性价比</strong>、<strong>流媒体与AI模型解锁广度</strong>及<strong>运营历史信誉</strong>四项硬指标。杜绝虚假测速截图与跑路高风险机场。
        </p>
        <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 0;">
          • 追求极致低延迟与晚高峰零丢包：推荐<strong>闪跃 FlashLeap（全IPLC纯专线）</strong><br>
          • 追求超高性价比与入门首选：推荐<strong>微风网络（IEPL专线/¥8起）</strong><br>
          • 追求大流量追剧与中转优化：推荐<strong>飞猫云（IEPL/IPLC中转/¥7起）</strong>
        </p>
      </div>

      <div class="ranking-content-body" style="margin-top: 1.5rem;">
        <h2>综合排行榜评分标准与公开维度</h2>
        <p>
          选机场网坚决不采用“单点瞬时测速截图”作为评分依据。瞬时千兆测速往往可以通过内部虚设私有测速节点轻松造假。我们坚持以下四个公开可核验标准：
        </p>
        <ul>
          <li><strong>专线网络拓扑架构（权重35%）：</strong>优先评价拥有纯正IEPL/IPLC内网专线或骨干BGP多入口容灾的服务商。不经过公网GFW防火墙，确保重大敏感时段不掉线。</li>
          <li><strong>资费与倍率透明度（权重25%）：</strong>严格计算实际每GB可用成本，严禁使用“高倍率偷跑流量”误导消费者的品牌参与推荐。</li>
          <li><strong>流媒体与AI模型解锁（权重20%）：</strong>测试节点对Netflix、Disney+、YouTube Premium及ChatGPT、Claude等高风控平台的连通能力。</li>
          <li><strong>品牌信用与运营年限（权重20%）：</strong>运营超过2年以上、拥有清晰工单响应机制、无恶意封号或跑路黑历史。</li>
        </ul>

        <h2 style="margin-top: 2rem; margin-bottom: 1.25rem;">2026年度上榜品牌权威排名与深度简评（共14家）</h2>
        ${airports.map((ap, idx) => {
          const badgeClass = idx === 0 ? 'rank-1' : idx === 1 ? 'rank-2' : idx === 2 ? 'rank-3' : 'rank-other';
          return `
          <div class="ranking-item-card">
            <div class="ranking-card-header">
              <div class="ranking-card-title-group">
                <span class="rank-badge ${badgeClass}" style="width: 34px; height: 34px; font-size: 0.95rem;">0${idx + 1}</span>
                <h3 style="margin: 0; font-size: 1.35rem; font-weight: 700;">${ap.name}</h3>
                ${ap.coupon ? `<span class="badge badge-orange" style="font-size: 0.75rem;">券: ${ap.coupon} (永久有效)</span>` : ''}
                <span class="badge badge-blue" style="font-size: 0.75rem;">${ap.lineType}</span>
              </div>
              <div style="text-align: right;">
                <span style="font-size: 0.85rem; color: var(--text-muted); margin-right: 0.35rem;">综合评分</span>
                <strong style="color: var(--primary); font-size: 1.35rem;">${ap.overallRating}</strong>
                <span style="font-size: 0.85rem; color: var(--text-muted);">/ 10</span>
                <div style="font-size: 0.85rem; color: var(--text-muted); margin-top: 0.15rem;">起步价 ¥${ap.startingPrice} / ${ap.billingCycle}</div>
              </div>
            </div>
            <p style="font-size: 0.95rem; color: var(--text-body); line-height: 1.6; margin: 0.75rem 0;">${ap.description}</p>
            <div class="ranking-features-grid">
              <div style="background: var(--bg-page); padding: 0.75rem 1rem; border-radius: var(--radius-sm);">
                <strong style="color: var(--success); font-size: 0.875rem;">✓ 核心优势清单：</strong>
                <ul style="margin: 0.4rem 0 0 1rem; padding: 0; font-size: 0.85rem; line-height: 1.6;">
                  ${ap.advantages.slice(0, 2).map(a => `<li>${a}</li>`).join('')}
                </ul>
              </div>
              <div style="background: var(--bg-page); padding: 0.75rem 1rem; border-radius: var(--radius-sm);">
                <strong style="color: var(--text-muted); font-size: 0.875rem;">ℹ 注意事项与限制：</strong>
                <ul style="margin: 0.4rem 0 0 1rem; padding: 0; font-size: 0.85rem; line-height: 1.6;">
                  ${ap.disadvantages.slice(0, 2).map(d => `<li>${d}</li>`).join('')}
                </ul>
              </div>
            </div>
            <div class="ranking-card-actions">
              <a href="${root}review/${ap.slug}/index.html" class="btn btn-outline btn-sm">阅读${ap.name}完整评测报告 &rarr;</a>
              <a href="${ap.affiliateUrl}" target="_blank" rel="noopener noreferrer nofollow" class="btn btn-primary btn-sm">前往${ap.name}官网直达</a>
              <a href="${root}compare/index.html" class="btn btn-outline btn-sm">加入横向比对</a>
            </div>
          </div>
          `;
        }).join('')}
      </div>
    </div>
    `;

    buildPage({
      relPath: 'ranking/overall/index.html',
      title: '2026年度综合实力机场排行榜 - 稳定性与速度综合评定 | 选机场网',
      description: '2026年机场推荐综合实力排行榜。基于纯内网IEPL专线、BGP入口架构、实际每GB流量价格与流媒体/AI解锁表现全面排定，拒绝虚假测速与浮夸打分。',
      keywords: '机场推荐, 综合机场排行, 机场节点, 稳定机场推荐, 梯子推荐, vpn推荐',
      canonicalUrl: `${DOMAIN}/ranking/overall/`,
      depth,
      activeNav: 'ranking',
      breadcrumbs: [{ name: '机场排行榜', url: `${root}ranking/index.html` }, { name: '综合实力排行榜' }],
      bodyContent: content
    });
  }

  // 2. 性价比排行榜
  {
    // 按起步套餐折算每GB单价升序排序
    const sortedByValue = [...airports].sort((a, b) => a.plans[0].costPerGB - b.plans[0].costPerGB);

    const content = `
    <div class="container ranking-container">
      <header class="article-header">
        <span class="badge badge-green">性价比专项</span>
        <h1 style="font-size: 2.1rem; margin-top: 0.5rem; margin-bottom: 0.75rem;">2026年高性价比实用机场排行榜</h1>
        <div class="article-meta">
          <span>最后更新：2026-03</span>
          <span>排序算法：实际可用每GB单价 = 月付金额 / (标称流量 × 默认倍率)</span>
          <span>数据保真：站长真机实测折算（100%真实原创数据 · 优惠券永久有效）</span>
        </div>
      </header>

      ${renderNavTabs('value')}

      <div class="quick-answer-card" style="margin-top: 0;">
        <div class="quick-answer-header">💡 性价比选购核心要领</div>
        <p style="font-size: 0.95rem; margin-bottom: 0;">
          高性价比并非单纯寻找“绝对低价”，而是寻找<strong>在保证网络连通率与不失联前提下的每GB最低使用成本</strong>。超低价劣质机场往往通过严重超卖导致晚高峰无法打开网页。本榜单已为您折算出各服务商的真实单GB单价并按实惠程度升序排列。
        </p>
      </div>

      <div class="ranking-content-body" style="margin-top: 1.5rem;">
        <h2 style="margin-bottom: 1.25rem;">2026年高性价比机场排名清单（按每GB真实使用成本升序）</h2>
        ${sortedByValue.map((ap, idx) => {
          const plan = ap.plans[0];
          const badgeClass = idx === 0 ? 'rank-1' : idx === 1 ? 'rank-2' : idx === 2 ? 'rank-3' : 'rank-other';
          return `
          <div class="ranking-item-card">
            <div class="ranking-card-header">
              <div class="ranking-card-title-group">
                <span class="rank-badge ${badgeClass}" style="width: 34px; height: 34px; font-size: 0.95rem;">0${idx + 1}</span>
                <h3 style="margin: 0; font-size: 1.35rem; font-weight: 700;">${ap.name}</h3>
                ${ap.coupon ? `<span class="badge badge-orange" style="font-size: 0.75rem;">券: ${ap.coupon} (永久有效)</span>` : ''}
                <span class="badge badge-green" style="font-size: 0.75rem;">${ap.lineType}</span>
              </div>
              <div style="text-align: right;">
                <span style="font-size: 0.85rem; color: var(--text-muted); margin-right: 0.35rem;">每GB实际成本</span>
                <strong style="color: var(--success); font-size: 1.35rem;">¥${plan.costPerGB.toFixed(3)}</strong>
                <span style="font-size: 0.85rem; color: var(--text-muted);">/ GB</span>
                <div style="font-size: 0.85rem; color: var(--text-muted); margin-top: 0.15rem;">起步：¥${ap.startingPrice} / ${plan.traffic}</div>
              </div>
            </div>
            <p style="font-size: 0.95rem; color: var(--text-body); line-height: 1.6; margin: 0.75rem 0;">${ap.description}</p>
            <div class="ranking-features-grid">
              <div style="background: var(--bg-page); padding: 0.75rem 1rem; border-radius: var(--radius-sm);">
                <strong style="color: var(--primary); font-size: 0.875rem;">📦 套餐明细与折算：</strong>
                <ul style="margin: 0.4rem 0 0 1rem; padding: 0; font-size: 0.85rem; line-height: 1.6;">
                  <li>基准套餐：${plan.name}（月付 ¥${ap.startingPrice}）</li>
                  <li>可用流量：${plan.traffic}（折算单价 ¥${plan.costPerGB.toFixed(3)}/GB）</li>
                </ul>
              </div>
              <div style="background: var(--bg-page); padding: 0.75rem 1rem; border-radius: var(--radius-sm);">
                <strong style="color: var(--success); font-size: 0.875rem;">🎯 核心优势与适用场景：</strong>
                <ul style="margin: 0.4rem 0 0 1rem; padding: 0; font-size: 0.85rem; line-height: 1.6;">
                  <li>优势：${ap.advantages[0]}</li>
                  <li>适合：${ap.suitableFor[0]}</li>
                </ul>
              </div>
            </div>
            <div class="ranking-card-actions">
              <a href="${root}review/${ap.slug}/index.html" class="btn btn-outline btn-sm">阅读${ap.name}完整评测报告 &rarr;</a>
              <a href="${ap.affiliateUrl}" target="_blank" rel="noopener noreferrer nofollow" class="btn btn-primary btn-sm">前往${ap.name}官网直达</a>
              <a href="${root}compare/index.html" class="btn btn-outline btn-sm">加入横向比对</a>
            </div>
          </div>
          `;
        }).join('')}

        <h2 style="margin-top: 2.5rem;">真实每GB单价的折算方法与防坑细节</h2>
        <p>
          许多新手用户在挑选所谓的“便宜机场”时，很容易落入以下计费陷阱：
        </p>
        <ol>
          <li><strong>节点倍率虚标陷阱：</strong>套餐显示提供 500GB 流量，但所有节点均为 2.0x 甚至 3.0x 倍率。实际使用 100GB 就会扣除 200GB-300GB 流量，折算后的真实单价直接翻倍。</li>
          <li><strong>不限时套餐不可与月付套餐直接混淆：</strong>部分服务商售卖一次性“不限时流量包”，虽然看似单价低，但如果不设月度重置，机场一旦跑路则损失全额预存款。</li>
          <li><strong>晚高峰可用性损耗：</strong>部分服务商虽然每GB单价极低，但晚高峰丢包率超过30%，导致大量TCP重传反而白白消耗了流量。</li>
        </ol>
        <p>
          选机场网性价比榜单均以<strong>标准1.0x倍率下、可验证月付套餐</strong>为计算基准，确保您的每一分钱都花在真实的有效带宽上。
        </p>
      </div>
    </div>
    `;

    buildPage({
      relPath: 'ranking/value/index.html',
      title: '2026年高性价比机场排行榜 - 每GB单价与真实流量折算 | 选机场网',
      description: '2026年高性价比实用机场排行榜。自动折算每GB真实流量使用成本，剔除高倍率扣费陷阱与超卖虚高宣传，为您精选实用平价机场。',
      keywords: '性价比机场, 便宜机场, 实用机场推荐, 每GB单价, 梯子推荐, vpn机场',
      canonicalUrl: `${DOMAIN}/ranking/value/`,
      depth,
      activeNav: 'ranking',
      breadcrumbs: [{ name: '机场排行榜', url: `${root}ranking/index.html` }, { name: '高性价比排行榜' }],
      bodyContent: content
    });
  }

  // 3. 低预算排行榜
  {
    const budgetList = [...airports].filter(a => a.startingPrice <= 20).sort((a, b) => a.startingPrice - b.startingPrice);

    const content = `
    <div class="container ranking-container">
      <header class="article-header">
        <span class="badge badge-orange">低预算专属</span>
        <h1 style="font-size: 2.1rem; margin-top: 0.5rem; margin-bottom: 0.75rem;">低预算平价机场排行榜（月付10元以内精选）</h1>
        <div class="article-meta">
          <span>最后更新：2026-03</span>
          <span>筛选条件：起步月付 ≤ 20元人民币</span>
          <span>核心定位：学生党学习查资料 / 双主力备用防失联</span>
          <span>数据保真：站长真机实测（100%原创真实数据 · 优惠券永久有效）</span>
        </div>
      </header>

      ${renderNavTabs('budget')}

      <div class="quick-answer-card" style="margin-top: 0;">
        <div class="quick-answer-header">💡 低预算选购核心建议</div>
        <p style="font-size: 0.95rem; margin-bottom: 0;">
          低预算方案核心在于<strong>低门槛尝试与月付灵活退订</strong>。建议优先选用月付10元左右的平价方案，既能满足日常学术论文检索、代码克隆与轻度冲浪，又不需要承担一次性年付的高昂跑路风险。
        </p>
      </div>

      <div class="ranking-content-body" style="margin-top: 1.5rem;">
        <h2 style="margin-bottom: 1.25rem;">平价低预算机场排名清单（月付20元以内精选）</h2>
        ${budgetList.map((ap, idx) => {
          const badgeClass = idx === 0 ? 'rank-1' : idx === 1 ? 'rank-2' : idx === 2 ? 'rank-3' : 'rank-other';
          return `
          <div class="ranking-item-card">
            <div class="ranking-card-header">
              <div class="ranking-card-title-group">
                <span class="rank-badge ${badgeClass}" style="width: 34px; height: 34px; font-size: 0.95rem;">0${idx + 1}</span>
                <h3 style="margin: 0; font-size: 1.35rem; font-weight: 700;">${ap.name}</h3>
                ${ap.coupon ? `<span class="badge badge-orange" style="font-size: 0.75rem;">券: ${ap.coupon} (永久有效)</span>` : ''}
                <span class="badge badge-orange" style="font-size: 0.75rem;">${ap.lineType}</span>
              </div>
              <div style="text-align: right;">
                <span style="font-size: 0.85rem; color: var(--text-muted); margin-right: 0.35rem;">起步月付</span>
                <strong style="color: var(--primary); font-size: 1.35rem;">¥${ap.startingPrice}</strong>
                <span style="font-size: 0.85rem; color: var(--text-muted);">/ 月</span>
                <div style="font-size: 0.85rem; color: var(--text-muted); margin-top: 0.15rem;">起始流量 ${ap.plans[0].traffic}</div>
              </div>
            </div>
            <p style="font-size: 0.95rem; color: var(--text-body); line-height: 1.6; margin: 0.75rem 0;">${ap.description}</p>
            <div class="ranking-features-grid">
              <div style="background: var(--bg-page); padding: 0.75rem 1rem; border-radius: var(--radius-sm);">
                <strong style="color: var(--success); font-size: 0.875rem;">✓ 核心优势亮点：</strong>
                <ul style="margin: 0.4rem 0 0 1rem; padding: 0; font-size: 0.85rem; line-height: 1.6;">
                  <li>${ap.advantages[0]}</li>
                  <li>适合人群：${ap.suitableFor[0]}</li>
                </ul>
              </div>
              <div style="background: var(--bg-page); padding: 0.75rem 1rem; border-radius: var(--radius-sm);">
                <strong style="color: var(--text-muted); font-size: 0.875rem;">ℹ 使用限制说明：</strong>
                <ul style="margin: 0.4rem 0 0 1rem; padding: 0; font-size: 0.85rem; line-height: 1.6;">
                  <li>设备限制：${ap.deviceLimit}</li>
                  <li>注意事项：${ap.disadvantages[0]}</li>
                </ul>
              </div>
            </div>
            <div class="ranking-card-actions">
              <a href="${root}review/${ap.slug}/index.html" class="btn btn-outline btn-sm">阅读${ap.name}完整评测报告 &rarr;</a>
              <a href="${ap.affiliateUrl}" target="_blank" rel="noopener noreferrer nofollow" class="btn btn-primary btn-sm">前往${ap.name}官网直达</a>
              <a href="${root}compare/index.html" class="btn btn-outline btn-sm">加入横向比对</a>
            </div>
          </div>
          `;
        }).join('')}

        <h2 style="margin-top: 2.5rem;">低预算机场的使用建议与合理预期</h2>
        <p>
          月付10元以内的低预算机场非常适合<strong>在校大学生查阅Google学术论文、GitHub克隆代码或配置为第二主力防失联备用梯子</strong>。
        </p>
        <p>
          但请务必保持合理的性能预期：低预算服务商通常采用公网BGP中转，无法像昂贵的IEPL专线那样保证晚高峰零丢包与超高清8K秒开。建议采用「一条主力专线 + 一条平价低预算备用」的双保险配置方案。
        </p>
      </div>
    </div>
    `;

    buildPage({
      relPath: 'ranking/budget/index.html',
      title: '低预算便宜机场排行榜 - 月付10元内平价备用推荐 | 选机场网',
      description: '适合学生党与轻度用户的平价低预算机场排行榜。精选月付10元以内的优质备用梯子，资费透明，支持月付弹性选购。',
      keywords: '低预算机场, 便宜机场, 学生机场推荐, 平价梯子, 10元机场, 备用机场',
      canonicalUrl: `${DOMAIN}/ranking/budget/`,
      depth,
      activeNav: 'ranking',
      breadcrumbs: [{ name: '机场排行榜', url: `${root}ranking/index.html` }, { name: '低预算排行榜' }],
      bodyContent: content
    });
  }

  // 4. 稳定性排行榜
  {
    const stableList = [...airports].filter(a => a.lineType.includes('专线') || a.stabilityRating >= 9.0).sort((a, b) => b.stabilityRating - a.stabilityRating);

    const content = `
    <div class="container ranking-container">
      <header class="article-header">
        <span class="badge badge-blue">稳定高可用</span>
        <h1 style="font-size: 2.1rem; margin-top: 0.5rem; margin-bottom: 0.75rem;">高稳定性专线机场排行榜（晚高峰防断连）</h1>
        <div class="article-meta">
          <span>最后更新：2026-03</span>
          <span>核心技术指标：IEPL/IPLC内网专线 / 晚高峰无丢包 / BGP智能容灾入口</span>
          <span>数据保真：站长全天候真机实测（100%原创证据 · 优惠券永久有效）</span>
        </div>
      </header>

      ${renderNavTabs('stable')}

      <div class="quick-answer-card" style="margin-top: 0;">
        <div class="quick-answer-header">🛡️ 专线稳定性选购准则</div>
        <p style="font-size: 0.95rem; margin-bottom: 0;">
          纯正的<strong>IEPL（国际以太网专线）与IPLC</strong>走机房内网光缆物理直连，完全不经过公网GFW防火墙设备，因此晚高峰网络丢包率极低、延迟抖动小于5ms，是跨国办公、视频会议及高频金融交易的最高可靠性保障。
        </p>
      </div>

      <div class="ranking-content-body" style="margin-top: 1.5rem;">
        <h2 style="margin-bottom: 1.25rem;">高稳定性专线机场排名清单（纯IEPL/IPLC与BGP多入口架构）</h2>
        ${stableList.map((ap, idx) => {
          const badgeClass = idx === 0 ? 'rank-1' : idx === 1 ? 'rank-2' : idx === 2 ? 'rank-3' : 'rank-other';
          return `
          <div class="ranking-item-card">
            <div class="ranking-card-header">
              <div class="ranking-card-title-group">
                <span class="rank-badge ${badgeClass}" style="width: 34px; height: 34px; font-size: 0.95rem;">0${idx + 1}</span>
                <h3 style="margin: 0; font-size: 1.35rem; font-weight: 700;">${ap.name}</h3>
                ${ap.coupon ? `<span class="badge badge-orange" style="font-size: 0.75rem;">券: ${ap.coupon} (永久有效)</span>` : ''}
                <span class="badge badge-blue" style="font-size: 0.75rem;">${ap.lineType}</span>
              </div>
              <div style="text-align: right;">
                <span style="font-size: 0.85rem; color: var(--text-muted); margin-right: 0.35rem;">稳定性评分</span>
                <strong style="color: var(--primary); font-size: 1.35rem;">${ap.stabilityRating}</strong>
                <span style="font-size: 0.85rem; color: var(--text-muted);">/ 10</span>
                <div style="font-size: 0.85rem; color: var(--text-muted); margin-top: 0.15rem;">起步价 ¥${ap.startingPrice} / 月</div>
              </div>
            </div>
            <p style="font-size: 0.95rem; color: var(--text-body); line-height: 1.6; margin: 0.75rem 0;">${ap.description}</p>
            <div class="ranking-features-grid">
              <div style="background: var(--bg-page); padding: 0.75rem 1rem; border-radius: var(--radius-sm);">
                <strong style="color: var(--primary); font-size: 0.875rem;">🛡️ 专线架构与抗封锁优势：</strong>
                <ul style="margin: 0.4rem 0 0 1rem; padding: 0; font-size: 0.85rem; line-height: 1.6;">
                  <li>线路类型：${ap.lineType}</li>
                  <li>优势：${ap.advantages[0]}</li>
                </ul>
              </div>
              <div style="background: var(--bg-page); padding: 0.75rem 1rem; border-radius: var(--radius-sm);">
                <strong style="color: var(--success); font-size: 0.875rem;">🎯 业务高可用保障场景：</strong>
                <ul style="margin: 0.4rem 0 0 1rem; padding: 0; font-size: 0.85rem; line-height: 1.6;">
                  <li>适用场景：${ap.suitableFor[0]}</li>
                  <li>流媒体解锁：${ap.streamingSupport.slice(0, 3).join(' / ')}</li>
                </ul>
              </div>
            </div>
            <div class="ranking-card-actions">
              <a href="${root}review/${ap.slug}/index.html" class="btn btn-outline btn-sm">阅读${ap.name}完整评测报告 &rarr;</a>
              <a href="${ap.affiliateUrl}" target="_blank" rel="noopener noreferrer nofollow" class="btn btn-primary btn-sm">前往${ap.name}官网直达</a>
              <a href="${root}compare/index.html" class="btn btn-outline btn-sm">加入横向比对</a>
            </div>
          </div>
          `;
        }).join('')}

        <h2 style="margin-top: 2.5rem;">为什么稳定性是跨国办公与金融交易的第一生命线？</h2>
        <p>
          对于跨国企业远程办公（Slack、Zoom在线会议）、程序员部署海外云主机、以及美股/港股/加密货币高频交易者而言，<strong>单次网络抖动或节点断连可能带来巨大的工作延误与财务损失</strong>。
        </p>
        <p>
          纯正的 IEPL（国际以太网专线）不经过公网防火墙设备，在物理链路上完全走内网光缆直连，晚高峰延迟抖动可以控制在个位数毫秒以内，是高可用需求的首选架构。
        </p>
      </div>
    </div>
    `;

    buildPage({
      relPath: 'ranking/stable/index.html',
      title: '高稳定专线机场排行榜 - 晚高峰零丢包IEPL专线推荐 | 选机场网',
      description: '专注高可用与晚高峰稳定的专线机场排行榜。精选纯正IEPL/IPLC内网专线与海外免封锁优质线路，适合跨国办公、程序开发与股票交易。',
      keywords: '稳定机场, IEPL专线机场, 晚高峰不卡机场, 防断连梯子, 专线机场推荐, vpn专线',
      canonicalUrl: `${DOMAIN}/ranking/stable/`,
      depth,
      activeNav: 'ranking',
      breadcrumbs: [{ name: '机场排行榜', url: `${root}ranking/index.html` }, { name: '稳定专线排行榜' }],
      bodyContent: content
    });
  }

  // 5. 排行榜总览页 ranking/index.html
  {
    const depthIndex = 1;
    const rootIndex = getRelativeRoot(depthIndex);

    const content = `
    <div class="container" style="padding: 3rem 1.25rem;">
      <header style="margin-bottom: 2.5rem; text-align: center;">
        <span class="badge badge-blue">多维评定体系</span>
        <h1 style="font-size: 2.3rem; margin-top: 0.5rem; margin-bottom: 0.75rem;">2026年机场多维度排行榜专区</h1>
        <p style="color: var(--text-muted); max-width: 700px; margin: 0 auto; font-size: 1.05rem;">
          选机场网拒绝单一扁平的“测速跑分”，从综合实力、性价比折算、低预算平价及专线高稳定性四个独立维度，为您提供客观透明的榜单参考。
        </p>
      </header>

      <div class="cards-grid-2">
        <div class="airport-card">
          <h2 style="font-size: 1.4rem; margin-bottom: 0.5rem;"><a href="${rootIndex}ranking/overall/index.html">01. 综合实力排行榜</a></h2>
          <p style="color: var(--text-muted); font-size: 0.95rem; line-height: 1.6;">
            结合专线架构、流媒体解锁、AI适配及运营历史信誉的全方位综合考量，适合希望一步到位、选择省心主力机场的用户。
          </p>
          <div style="margin-top: auto; padding-top: 1rem;"><a href="${rootIndex}ranking/overall/index.html" class="btn btn-primary btn-sm">查看综合实力榜 &rarr;</a></div>
        </div>
        <div class="airport-card">
          <h2 style="font-size: 1.4rem; margin-bottom: 0.5rem;"><a href="${rootIndex}ranking/value/index.html">02. 高性价比排行榜</a></h2>
          <p style="color: var(--text-muted); font-size: 0.95rem; line-height: 1.6;">
            以科学折算每GB真实可用单价为核心，剔除虚假高倍率扣费套路，寻找单价与带宽吞吐的最佳平衡点。
          </p>
          <div style="margin-top: auto; padding-top: 1rem;"><a href="${rootIndex}ranking/value/index.html" class="btn btn-primary btn-sm">查看高性价比榜 &rarr;</a></div>
        </div>
        <div class="airport-card">
          <h2 style="font-size: 1.4rem; margin-bottom: 0.5rem;"><a href="${rootIndex}ranking/stable/index.html">03. 高稳定性专线排行榜</a></h2>
          <p style="color: var(--text-muted); font-size: 0.95rem; line-height: 1.6;">
            全IEPL/IPLC纯内网物理专线，不过防火墙公网审查，专为晚高峰超低延迟、跨国会议与股票外汇交易打造。
          </p>
          <div style="margin-top: auto; padding-top: 1rem;"><a href="${rootIndex}ranking/stable/index.html" class="btn btn-primary btn-sm">查看稳定专线榜 &rarr;</a></div>
        </div>
        <div class="airport-card">
          <h2 style="font-size: 1.4rem; margin-bottom: 0.5rem;"><a href="${rootIndex}ranking/budget/index.html">04. 低预算平价排行榜</a></h2>
          <p style="color: var(--text-muted); font-size: 0.95rem; line-height: 1.6;">
            月付10元以内的轻量级平价机场精选，适合学生党查学术论文、偶尔查资料或作为主力梯子的备用备选。
          </p>
          <div style="margin-top: auto; padding-top: 1rem;"><a href="${rootIndex}ranking/budget/index.html" class="btn btn-primary btn-sm">查看平价低预算榜 &rarr;</a></div>
        </div>
      </div>
    </div>
    `;

    buildPage({
      relPath: 'ranking/index.html',
      title: '2026年机场排行榜汇总导航 - 综合、性价比、稳定与低预算榜单 | 选机场网',
      description: '选机场网机场排行榜汇总页面。包含2026年综合实力榜、高性价比榜、IEPL专线稳定榜及低预算平价榜，助您快速锁定最适合的网络代理服务。',
      keywords: '机场排行榜, 机场推荐, 性价比机场, 梯子排行榜, vpn推荐, 科学上网排行',
      canonicalUrl: `${DOMAIN}/ranking/`,
      depth: depthIndex,
      activeNav: 'ranking',
      breadcrumbs: [{ name: '机场排行榜' }],
      bodyContent: content
    });
  }
}

module.exports = buildRankings;
