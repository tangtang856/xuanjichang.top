const fs = require('fs');
const path = require('path');
const { DOMAIN, airports, getRelativeRoot, buildPage } = require('./generate-site');

const buildRankings = require('./gen-rankings');
const buildRecommends = require('./gen-recommends');
const buildReviews = require('./gen-reviews');
const buildCompare = require('./gen-compare');
const buildGuides = require('./gen-guides');
const buildBlog = require('./gen-blog');
const buildGlossary = require('./gen-glossary');
const buildTrust = require('./gen-trust');

console.log('=== [PHASE 6 & 7] 开始全站页面自动化编译与内容生成 ===');

// 1. 首页 (index.html)
function buildIndexPage() {
  const depth = 0;
  const root = getRelativeRoot(depth);

  const heroKeywords = [
    { name: '综合机场推荐', url: `${root}ranking/overall/index.html` },
    { name: '高性价比机场', url: `${root}ranking/value/index.html` },
    { name: 'IEPL稳定专线', url: `${root}recommend/premium/index.html` },
    { name: '平价低预算梯子', url: `${root}recommend/budget/index.html` },
    { name: 'ChatGPT与AI专用', url: `${root}recommend/ai/index.html` },
    { name: '小火箭与客户端教程', url: `${root}guides/index.html` },
    { name: '在线参数横向对比', url: `${root}compare/index.html` }
  ];

  const content = `
  <!-- Section 2: Hero -->
  <section class="hero-section">
    <div class="container">
      <div class="hero-tagline">
        <span>⚡ 2026 权威中文网络工具与节点资讯指南</span>
      </div>
      <h1 class="hero-title">
        2026年高质量中文<span class="highlight">机场推荐</span>与科学上网<span class="highlight">VPN节点</span>选购指南
      </h1>
      <p class="hero-desc">
        汇聚主流优质机场节点、性价比机场与老牌梯子推荐。本站基于公开网络协议、真实路由拓扑与资费标准，拒绝虚构虚假测速与浮夸刷单。为学术科研、外贸出海、跨国办公与流媒体追剧用户提供客观透明的选购参考与客户端配置教程。
      </p>
      <div class="hero-actions">
        <a href="${root}ranking/overall/index.html" class="btn btn-primary">查看综合实力榜</a>
        <a href="${root}compare/index.html" class="btn btn-outline">机场横向对比工具</a>
        <a href="${root}ranking/value/index.html" class="btn btn-outline">高性价比排行</a>
      </div>
      <div style="margin-top: 1.5rem; display: flex; flex-wrap: wrap; justify-content: center; gap: 0.5rem;">
        ${heroKeywords.map(k => `<a href="${k.url}" class="badge badge-gray" style="font-size: 0.825rem; padding: 0.35rem 0.75rem;">${k.name}</a>`).join('')}
      </div>
    </div>
  </section>

  <div class="container">
    <!-- Section 3: 快速答案 -->
    <section class="quick-answer-card">
      <div class="quick-answer-header">
        <span style="font-size: 1.25rem;">💡</span>
        <span>搜索直通车：选购机场与VPN节点的核心快速答案</span>
      </div>
      <div class="quick-answer-grid">
        <div class="quick-item">
          <h4>新手小白应该如何挑选？</h4>
          <p>首选支持「一键订阅导入」与多端客户端（如 Clash Verge、Shadowrocket）的主流机场；优先选择支持月付的品牌，切忌首次使用便直接购买大额年付套餐。</p>
        </div>
        <div class="quick-item">
          <h4>专线与普通中转有什么区别？</h4>
          <p>IEPL/IPLC内网专线不过公网防火墙，晚高峰延迟稳定且无视封锁；普通隧道中转单价便宜但遇网络防火墙敏感期偶有波动，适合预算敏感型大流量需求。</p>
        </div>
        <div class="quick-item">
          <h4>如何计算真实每GB流量成本？</h4>
          <p>切忌只看标价。真实每GB成本 = 套餐实际月价格 / (标称流量 × 节点真实倍率)。部分机场标称100G但全部是2倍率节点，实际可用仅50G，选购时务必核验倍率表。</p>
        </div>
        <div class="quick-item">
          <h4>为什么传统VPN不如现代机场？</h4>
          <p>OpenVPN/WireGuard等传统协议特征明显极易被精准阻断；现代机场采用Shadowsocks、Trojan、VLESS协议配合TLS伪装，抗封锁与跨国传输速度具有代差级优势。</p>
        </div>
      </div>
    </section>

    <!-- Section 4: 精选推荐 -->
    <section class="section-block">
      <div class="section-header">
        <div>
          <h2 class="section-title">2026精选优质机场节点推荐</h2>
          <p class="section-subtitle">选机场网站长自费订阅真机实测（100%真实原创证据），专属优惠码永久有效</p>
        </div>
        <a href="${root}ranking/overall/index.html" class="section-more-link">查看完整排行榜 &rarr;</a>
      </div>
      <div class="cards-grid-3">
        ${airports.map(ap => {
          const firstPlan = ap.plans[0];
          return `
          <div class="airport-card">
            <div class="card-top">
              <div>
                <h3 class="airport-brand-title">${ap.name}</h3>
                <span class="airport-tag">${ap.lineType}</span>
              </div>
              <div style="display: flex; flex-direction: column; align-items: flex-end; gap: 0.25rem;">
                <span class="badge badge-green">站长真机实测</span>
                ${ap.coupon ? `<span class="badge badge-orange" style="font-size: 0.725rem;">券: ${ap.coupon} (永久有效)</span>` : ''}
              </div>
            </div>
            <div class="price-box">
              <span class="price-currency">¥</span>
              <span class="price-value">${ap.startingPrice}</span>
              <span class="price-cycle">/ ${ap.billingCycle}起</span>
            </div>
            <p style="font-size: 0.875rem; color: var(--text-body); margin-bottom: 1rem; line-height: 1.5;">${ap.description}</p>
            <ul class="card-features-list">
              <li><span class="icon-check">✓</span> <span>起步套餐：${firstPlan.name} (${firstPlan.traffic})</span></li>
              <li><span class="icon-check">✓</span> <span>单GB成本：低至 ¥${firstPlan.costPerGB.toFixed(3)} / GB</span></li>
              <li><span class="icon-check">✓</span> <span>AI支持：${ap.aiSupport.slice(0, 2).join('、')}</span></li>
              <li><span class="icon-info">ℹ</span> <span>设备上限：${ap.deviceLimit}</span></li>
            </ul>
            <div class="card-meta-tags">
              ${ap.regions.slice(0, 4).map(r => `<span class="badge badge-gray">${r}</span>`).join('')}
              ${ap.protocols.slice(0, 2).map(p => `<span class="badge badge-gray">${p}</span>`).join('')}
            </div>
            <div class="card-actions">
              <a href="${root}review/${ap.slug}/index.html" class="btn btn-outline btn-sm">深度评测</a>
              <a href="${ap.affiliateUrl}" target="_blank" rel="noopener noreferrer nofollow" class="btn btn-primary btn-sm">直达官网</a>
            </div>
          </div>
          `;
        }).join('')}
      </div>
    </section>

    <!-- Section 5: 综合排行榜摘要 -->
    <section class="section-block" style="padding-top: 0;">
      <div class="section-header">
        <div>
          <h2 class="section-title">主流机场综合实力排行对比</h2>
          <p class="section-subtitle">基于价格透明度、专线架构、流媒体与AI适配度排定，拒绝虚构测速打分</p>
        </div>
        <a href="${root}ranking/overall/index.html" class="section-more-link">进入排行榜专区 &rarr;</a>
      </div>
      <div class="table-responsive">
        <table class="data-table">
          <thead>
            <tr>
              <th style="width: 70px;">排名</th>
              <th>品牌名称</th>
              <th>起步资费</th>
              <th>起始流量</th>
              <th>线路架构</th>
              <th>支持协议</th>
              <th>适合人群</th>
              <th style="text-align: right;">详情</th>
            </tr>
          </thead>
          <tbody>
            ${airports.map((ap, idx) => {
              const rankClass = idx === 0 ? 'rank-1' : idx === 1 ? 'rank-2' : idx === 2 ? 'rank-3' : 'rank-other';
              return `
              <tr>
                <td><span class="rank-badge ${rankClass}">0${idx + 1}</span></td>
                <td><strong>${ap.name}</strong></td>
                <td><span style="color: var(--primary); font-weight: 700;">¥${ap.startingPrice}</span> / 月</td>
                <td>${ap.plans[0].traffic}</td>
                <td>${ap.lineType}</td>
                <td>${ap.protocols.slice(0, 2).join(', ')}</td>
                <td style="font-size: 0.85rem; color: var(--text-muted);">${ap.suitableFor[0]}</td>
                <td style="text-align: right; white-space: nowrap;">
                  <a href="${root}review/${ap.slug}/index.html" class="btn btn-outline btn-sm" style="margin-right: 0.25rem;">评测</a>
                  <a href="${ap.affiliateUrl}" target="_blank" rel="noopener noreferrer nofollow" class="btn btn-primary btn-sm">直达</a>
                </td>
              </tr>
              `;
            }).join('')}
          </tbody>
        </table>
      </div>
    </section>

    <!-- Section 6: 按需求选择 (6个专题入口) -->
    <section class="section-block">
      <div class="section-header">
        <div>
          <h2 class="section-title">按应用场景与核心需求挑选</h2>
          <p class="section-subtitle">精准对应不同使用场景与预算偏好，快速定位最适合您的机场方案</p>
        </div>
      </div>
      <div class="cards-grid-3">
        <a href="${root}recommend/budget/index.html" class="category-card">
          <div class="cat-icon">💰</div>
          <h3 class="cat-title">低预算便宜机场</h3>
          <p class="cat-desc">月付10元以内的平价入门选择，适合学生党、轻度查资料与多端备用防失联。</p>
          <div class="cat-footer">查看平价专题 &rarr;</div>
        </a>
        <a href="${root}recommend/premium/index.html" class="category-card">
          <div class="cat-icon">🚀</div>
          <h3 class="cat-title">高端IEPL内网专线</h3>
          <p class="cat-desc">不过公网防火墙，晚高峰极低延迟与零丢包保障，专为外企跨境办公与金融交易打造。</p>
          <div class="cat-footer">查看高端专线 &rarr;</div>
        </a>
        <a href="${root}recommend/beginner/index.html" class="category-card">
          <div class="cat-icon">🔰</div>
          <h3 class="cat-title">小白新手入门推荐</h3>
          <p class="cat-desc">全中文界面、支持一键导入订阅配置，配套保姆级客户端图文教程，开箱即用。</p>
          <div class="cat-footer">查看新手专区 &rarr;</div>
        </a>
        <a href="${root}recommend/stable/index.html" class="category-card">
          <div class="cat-icon">🛡️</div>
          <h3 class="cat-title">稳定优先抗封锁专线</h3>
          <p class="cat-desc">多入口BGP智能容灾与高防隧道架构，在重大节假日或敏感期依然坚挺在线。</p>
          <div class="cat-footer">查看稳定方案 &rarr;</div>
        </a>
        <a href="${root}recommend/ai/index.html" class="category-card">
          <div class="cat-icon">🤖</div>
          <h3 class="cat-title">ChatGPT与AI专用机场</h3>
          <p class="cat-desc">精选拥有原生纯净IP的海外节点，有效规避OpenAI、Claude及Midjourney的风控拒绝。</p>
          <div class="cat-footer">查看AI专用节点 &rarr;</div>
        </a>
        <a href="${root}recommend/streaming/index.html" class="category-card">
          <div class="cat-icon">🎬</div>
          <h3 class="cat-title">4K流媒体超清解锁</h3>
          <p class="cat-desc">专线优化Netflix、Disney+、YouTube Premium、HBO Max跨区解锁，秒开4K/8K超清码率。</p>
          <div class="cat-footer">查看流媒体推荐 &rarr;</div>
        </a>
      </div>
    </section>

    <!-- Section 7: 机场横向比较入口 -->
    <section class="section-block" style="background: var(--bg-card); border: 1px solid var(--border-light); border-radius: var(--radius-lg); padding: 2.5rem; margin-bottom: 3.5rem;">
      <div style="max-width: 800px; margin: 0 auto; text-align: center;">
        <span class="badge badge-blue" style="margin-bottom: 1rem;">在线实用工具</span>
        <h2 style="font-size: 1.85rem; margin-bottom: 1rem;">不知道哪家好？使用在线机场横向对比工具</h2>
        <p style="color: var(--text-muted); font-size: 1.05rem; margin-bottom: 1.5rem;">
          支持自由勾选 2 到 4 家机场，实时生成价格、单GB成本、专线类型、协议支持、节点覆盖、设备限制及解锁能力的横向对比表格。
        </p>
        <a href="${root}compare/index.html" class="btn btn-primary" style="padding: 0.8rem 2rem; font-size: 1rem;">立即开启多品牌参数横向对比 &rarr;</a>
      </div>
    </section>

    <!-- Section 8 & 9 & 10: 教程中心与知识百科 -->
    <section class="section-block">
      <div class="section-header">
        <div>
          <h2 class="section-title">全平台客户端使用教程</h2>
          <p class="section-subtitle">涵盖主流操作系统平台的高效连接与规则分流配置图文教学</p>
        </div>
        <a href="${root}guides/index.html" class="section-more-link">查看全部教程 &rarr;</a>
      </div>
      <div class="cards-grid-4">
        <a href="${root}guides/windows/index.html" class="category-card">
          <div class="cat-icon">💻</div>
          <h3 class="cat-title">Windows 客户端教程</h3>
          <p class="cat-desc">Clash Verge Rev、v2rayN 客户端安装与一键订阅导入详解。</p>
          <div class="cat-footer">查看Windows教程 &rarr;</div>
        </a>
        <a href="${root}guides/android/index.html" class="category-card">
          <div class="cat-icon">📱</div>
          <h3 class="cat-title">Android 安卓手机教程</h3>
          <p class="cat-desc">Clash Meta (Clash for Android) 与 v2rayNG 下载配置指南。</p>
          <div class="cat-footer">查看安卓教程 &rarr;</div>
        </a>
        <a href="${root}guides/ios/index.html" class="category-card">
          <div class="cat-icon">🍏</div>
          <h3 class="cat-title">iOS 苹果手机教程</h3>
          <p class="cat-desc">Shadowrocket (小火箭) 外区账号获取与节点一键订阅配置。</p>
          <div class="cat-footer">查看iOS教程 &rarr;</div>
        </a>
        <a href="${root}guides/macos/index.html" class="category-card">
          <div class="cat-icon">🍎</div>
          <h3 class="cat-title">macOS 电脑配置教程</h3>
          <p class="cat-desc">Clash Verge Mac版、Surge 客户端安装与系统分流设置。</p>
          <div class="cat-footer">查看Mac教程 &rarr;</div>
        </a>
      </div>
    </section>

    <!-- Section 11: 选购深度指南 -->
    <section class="section-block">
      <div class="section-header">
        <div>
          <h2 class="section-title">选购认知与防坑深度指南</h2>
          <p class="section-subtitle">从协议原理、网络架构到避坑心得，助您建立专业客观的翻墙选购认知</p>
        </div>
        <a href="${root}blog/index.html" class="section-more-link">浏览全部文章 &rarr;</a>
      </div>
      <div class="cards-grid-3">
        <div class="airport-card">
          <span class="badge badge-blue" style="align-self: flex-start; margin-bottom: 0.75rem;">决策指南</span>
          <h3 style="font-size: 1.15rem; margin-bottom: 0.5rem;"><a href="${root}blog/how-to-choose-airport/index.html">新手如何科学挑选适合自己的机场？完整决策评估指南</a></h3>
          <p style="font-size: 0.875rem; color: var(--text-muted); line-height: 1.6;">明确真实需求、辨别专线真伪、看清倍率规则，五步教你挑选最稳妥好用的机场。</p>
          <div style="margin-top: auto; padding-top: 1rem; border-top: 1px solid var(--border-light); font-size: 0.85rem; color: var(--text-muted);">
            <span>更新于 2026-03</span> · <a href="${root}blog/how-to-choose-airport/index.html">阅读全文 &rarr;</a>
          </div>
        </div>
        <div class="airport-card">
          <span class="badge badge-orange" style="align-self: flex-start; margin-bottom: 0.75rem;">技术剖析</span>
          <h3 style="font-size: 1.15rem; margin-bottom: 0.5rem;"><a href="${root}blog/airport-vs-traditional-vpn/index.html">机场与传统VPN有什么区别？技术原理、速度与安全性对比</a></h3>
          <p style="font-size: 0.875rem; color: var(--text-muted); line-height: 1.6;">为什么ExpressVPN等大厂在国内频繁被封？详述分流规则、TLS伪装与现代机场的代差级优势。</p>
          <div style="margin-top: auto; padding-top: 1rem; border-top: 1px solid var(--border-light); font-size: 0.85rem; color: var(--text-muted);">
            <span>更新于 2026-03</span> · <a href="${root}blog/airport-vs-traditional-vpn/index.html">阅读全文 &rarr;</a>
          </div>
        </div>
        <div class="airport-card">
          <span class="badge badge-green" style="align-self: flex-start; margin-bottom: 0.75rem;">协议解析</span>
          <h3 style="font-size: 1.15rem; margin-bottom: 0.5rem;"><a href="${root}blog/airport-protocol-compatibility-matrix/index.html">主流科学上网协议与各客户端兼容性全览：SS/Trojan/VLESS/Hysteria</a></h3>
          <p style="font-size: 0.875rem; color: var(--text-muted); line-height: 1.6;">全面拆解不同协议在抗封锁、延迟开销与多平台客户端支持上的实际优缺点表现。</p>
          <div style="margin-top: auto; padding-top: 1rem; border-top: 1px solid var(--border-light); font-size: 0.85rem; color: var(--text-muted);">
            <span>更新于 2026-03</span> · <a href="${root}blog/airport-protocol-compatibility-matrix/index.html">阅读全文 &rarr;</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 12: FAQ 常见问答 -->
    <section class="section-block">
      <div class="section-header">
        <div>
          <h2 class="section-title">关于机场与科学上网的常见问题 (FAQ)</h2>
          <p class="section-subtitle">解答用户在选购、使用及网络排障过程中最关心的真实疑虑</p>
        </div>
      </div>
      <div class="faq-list">
        <div class="faq-item">
          <div class="faq-question">
            <span>1. 什么是「机场」？为什么叫这个名字？</span>
            <span class="faq-indicator">+</span>
          </div>
          <div class="faq-answer" style="display: none;">
            早期的网络科学上网工具主要以 Shadowsocks（影梭）为主，其客户端图标是一架小纸飞机。由于该工具提供了代理服务，提供此类节点订阅服务的平台便被网友形象地戏称为「机场」，提供节点的人称为「机场主」，而节点配置信息则被称为「机票」或「订阅」。
          </div>
        </div>
        <div class="faq-item">
          <div class="faq-question">
            <span>2. 为什么不建议购买一两百元一年的超长年付套餐？</span>
            <span class="faq-indicator">+</span>
          </div>
          <div class="faq-answer" style="display: none;">
            虽然年付看似平均每月非常便宜，但机场行业存在不可控的运营与外部网络封锁风险。一旦发生被防火墙持续精准打击甚至小作坊机场主「跑路」，年付用户的剩余金额往往无法追回。建议新手或首次尝试某家服务商时，一律优先选择月付或季付，验证稳定性至少3个月后再考虑长期套餐。
          </div>
        </div>
        <div class="faq-item">
          <div class="faq-question">
            <span>3. 为什么很多节点显示延迟很低，但打开网页还是卡顿？</span>
            <span class="faq-indicator">+</span>
          </div>
          <div class="faq-answer" style="display: none;">
            客户端测速显示的「延迟」通常只是本地到国内中转服务器的 TCP/ICMP 握手时间（通常只有十几毫秒），并不代表从国内中转机到达海外真实目标网站的跨海延迟与带宽。如果海外落地机房发生拥堵、丢包率极高，即使显示低延迟，实际加载网页与超清视频依然会发生卡顿。
          </div>
        </div>
        <div class="faq-item">
          <div class="faq-question">
            <span>4. 选机场时，节点数量是不是越多越好？</span>
            <span class="faq-indicator">+</span>
          </div>
          <div class="faq-answer" style="display: none;">
            并非如此。许多低端服务商宣传拥有上百个甚至上千个节点，实际上往往是通过单台服务器虚拟出的大量重复IP，不仅资源拥挤且极易同时失效。相反，拥有 30-50 个高质量 BGP 入口与真实 IEPL 专线的节点集群，其可用性与晚高峰体验远胜于上百个低质公网中转节点。
          </div>
        </div>
      </div>
    </section>
  </div>
  `;

  buildPage({
    relPath: 'index.html',
    title: '2026精选优质机场推荐与VPN节点评测导航 - 选机场网',
    description: '选机场网是专业的中文机场推荐与科学上网VPN节点选购指南。提供2026年高性价比机场排行、IEPL专线梯子推荐、全平台客户端图文教程及在线参数对比，拒绝虚假测速，实事求是。',
    keywords: '机场推荐, 机场节点, 性价比机场, 梯子推荐, vpn, vpn机场, vpn节点, vpn推荐, 科学上网, 翻墙教程, Clash订阅',
    canonicalUrl: `${DOMAIN}/`,
    depth,
    activeNav: 'home',
    bodyContent: content
  });
}

// 执行全站编译流程
buildIndexPage();
buildRankings();
buildRecommends();
buildReviews();
buildCompare();
buildGuides();
buildBlog();
buildGlossary();
buildTrust();

console.log('=== 全站编译完成！所有页面与结构已生成完毕 ===');
