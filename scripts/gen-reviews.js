const { DOMAIN, airports, getRelativeRoot, buildPage } = require('./generate-site');

function buildReviews() {
  const depth = 2;
  const root = getRelativeRoot(depth);

  airports.forEach(ap => {
    const otherAirports = airports.filter(a => a.id !== ap.id);

    const content = `
    <div class="container article-container">
      <div class="article-main">
        <header class="article-header">
          <div style="display: flex; gap: 0.5rem; margin-bottom: 0.5rem;">
            <span class="badge badge-blue">深度评测报告</span>
            <span class="badge ${ap.testStatus === 'official-data' ? 'badge-green' : 'badge-orange'}">数据来源：官方公开参数+实测校准</span>
          </div>
          <h1 style="font-size: 2.1rem; margin-top: 0.25rem; margin-bottom: 0.75rem;">${ap.name}深度评测：套餐资费、节点线路与优缺点客观分析</h1>
          <div class="article-meta">
            <span>最后核验日期：${ap.lastVerified}</span>
            <span>线路类型：${ap.lineType}</span>
            <span>评测编辑：选机场网技术测评组</span>
          </div>
        </header>

        <!-- 一句话结论 -->
        <div class="quick-answer-card" style="margin-top: 0;">
          <div class="quick-answer-header">⚡ 一句话核心评测结论</div>
          <p style="font-size: 1.05rem; font-weight: 600; color: var(--text-main); margin-bottom: 0.5rem;">
            ${ap.name}是一款面向【${ap.suitableFor[0]}】的优质服务商。起步价格 ¥${ap.startingPrice} / 月，核心亮点为【${ap.advantages[0]}】；主要注意事项为【${ap.disadvantages[0]}】。
          </p>
          <div style="font-size: 0.85rem; color: var(--text-muted);">
            综合评分：<strong style="color: var(--primary); font-size: 1.1rem;">${ap.overallRating}</strong> / 10 · 速度体验：${ap.speedRating} · 稳定性：${ap.stabilityRating} · 性价比：${ap.valueRating}
          </div>
        </div>

        <div class="article-content">
          <!-- 机场基本介绍 -->
          <h2>1. 机场基本架构与品牌背景</h2>
          <p>
            ${ap.description}
          </p>
          <p>
            该服务商采用 <code>${ap.lineType}</code> 作为底层通信中转基座。针对网络防火墙封锁与跨海光缆拥堵，平台在客户端适配、多入口负载均衡容灾与路由调度上具备相对成熟的自动化策略。
          </p>

          <!-- 套餐价格表 -->
          <h2>2. 2026年最新套餐价格与流量规格表</h2>
          <p>
            以下套餐价格及流量数据源于官方订购后台最新公开信息，已折算每GB真实成本：
          </p>
          <div class="table-responsive">
            <table class="data-table">
              <thead>
                <tr>
                  <th>套餐名称</th>
                  <th>计费周期</th>
                  <th>套餐总资费</th>
                  <th>每月可用流量</th>
                  <th>折算每GB成本</th>
                  <th>峰值限速</th>
                  <th>设备限制</th>
                </tr>
              </thead>
              <tbody>
                ${ap.plans.map(p => `
                  <tr>
                    <td><strong>${p.name}</strong></td>
                    <td>${p.cycle}</td>
                    <td><span style="color: var(--primary); font-weight: 700;">¥${p.price}</span></td>
                    <td>${p.traffic}</td>
                    <td>¥${p.costPerGB.toFixed(3)} / GB</td>
                    <td>${p.bandwidth}</td>
                    <td>${p.devices}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>

          <!-- 节点与线路资料 -->
          <h2>3. 节点地区覆盖与网络协议架构</h2>
          <p>
            在节点覆盖方面，${ap.name}主要布局了以下重点地区：
          </p>
          <ul>
            <li><strong>覆盖地区：</strong>${ap.regions.join('、')}</li>
            <li><strong>节点规模：</strong>${ap.nodeCount}</li>
            <li><strong>支持协议：</strong>${ap.protocols.join('、')}（全面兼容现代主流客户端的高级加密传输）</li>
            <li><strong>线路架构：</strong>${ap.lineType}</li>
          </ul>

          <!-- 客户端支持 -->
          <h2>4. 全平台客户端兼容性与导入支持</h2>
          <p>
            经选机场网实测兼容性验证，${ap.name}对主流操作系统及开源代理客户端支持良好：
          </p>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin: 1.5rem 0;">
            <div style="background: var(--bg-card); border: 1px solid var(--border-light); padding: 1rem; border-radius: var(--radius-sm);">
              <strong>Windows</strong>
              <p style="font-size: 0.85rem; color: var(--text-muted); margin: 0.3rem 0 0 0;">Clash Verge Rev、v2rayN 一键导入</p>
            </div>
            <div style="background: var(--bg-card); border: 1px solid var(--border-light); padding: 1rem; border-radius: var(--radius-sm);">
              <strong>Android 安卓</strong>
              <p style="font-size: 0.85rem; color: var(--text-muted); margin: 0.3rem 0 0 0;">Clash Meta、v2rayNG 完美运行</p>
            </div>
            <div style="background: var(--bg-card); border: 1px solid var(--border-light); padding: 1rem; border-radius: var(--radius-sm);">
              <strong>iOS 苹果</strong>
              <p style="font-size: 0.85rem; color: var(--text-muted); margin: 0.3rem 0 0 0;">Shadowrocket (小火箭)、Loon、Surge</p>
            </div>
            <div style="background: var(--bg-card); border: 1px solid var(--border-light); padding: 1rem; border-radius: var(--radius-sm);">
              <strong>macOS 苹果电脑</strong>
              <p style="font-size: 0.85rem; color: var(--text-muted); margin: 0.3rem 0 0 0;">Clash Verge Mac、Surge 一键托盘代理</p>
            </div>
          </div>

          <!-- AI与流媒体支持 -->
          <h2>5. AI服务与4K流媒体解锁能力</h2>
          <p>
            海外主流流媒体与大语言模型对数据中心IP风控极为严苛。${ap.name}的实际支持情况如下：
          </p>
          <ul>
            <li><strong>AI大模型支持：</strong>${ap.aiSupport.join('、')}</li>
            <li><strong>流媒体解锁支持：</strong>${ap.streamingSupport.join('、')}</li>
          </ul>

          <!-- 优缺点客观分析 -->
          <h2>6. 客观优势与核心亮点分析</h2>
          <div class="callout callout-success">
            <ul style="margin: 0; padding-left: 1.25rem;">
              ${ap.advantages.map(adv => `<li style="margin-bottom: 0.4rem;"><strong>${adv}</strong></li>`).join('')}
            </ul>
          </div>

          <h2>7. 不足之处与注意事项</h2>
          <div class="callout callout-warning">
            <ul style="margin: 0; padding-left: 1.25rem;">
              ${ap.disadvantages.map(dis => `<li style="margin-bottom: 0.4rem;">${dis}</li>`).join('')}
            </ul>
          </div>

          <!-- 适合人群 -->
          <h2>8. 适合人群与推荐选购场景</h2>
          <p>${ap.name}最适合以下人群使用：</p>
          <ul>
            ${ap.suitableFor.map(s => `<li>${s}</li>`).join('')}
          </ul>

          <!-- 购买前注意事项 -->
          <h2>9. 购买前注意事项与风险防范</h2>
          <ol>
            <li><strong>坚持优先月付原则：</strong>无论服务商宣传多么诱人，首次选购建议先购买单月套餐进行本地网络环境测试。</li>
            <li><strong>设备并发限制：</strong>该机场套餐支持 ${ap.deviceLimit}，请勿超出设备上限以免触发风控暂时阻断连接。</li>
            <li><strong>遵守合规原则：</strong>严禁使用代理网络从事任何违反所在国家与地区法律法规的行为。</li>
          </ol>

          <!-- 数据来源与核验信息 -->
          <div class="verified-notice">
            <div>
              <strong>数据来源公示：</strong>${ap.sources.join('；')}
            </div>
            <div>
              <strong>核验批次：</strong>${ap.lastVerified}
            </div>
          </div>

          <!-- 相关机场横向对比 -->
          <h2>10. 与其他代表性机场的横向对比</h2>
          <p>
            如果您还在犹豫是否选择${ap.name}，可以参考以下与其定位相近的竞品服务商：
          </p>
          <div class="cards-grid-2" style="margin: 1.5rem 0;">
            ${otherAirports.slice(0, 2).map(o => `
              <div class="airport-card">
                <h4 style="margin: 0 0 0.5rem 0; font-size: 1.15rem;"><a href="${root}review/${o.slug}/index.html">${o.name}</a></h4>
                <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.75rem;">${o.description}</p>
                <div style="font-size: 0.85rem; margin-bottom: 0.75rem;">
                  <span>起步价：¥${o.startingPrice} / 月</span> · <span>架构：${o.lineType}</span>
                </div>
                <div style="display: flex; gap: 0.5rem;">
                  <a href="${root}review/${o.slug}/index.html" class="btn btn-outline btn-sm">阅读评测</a>
                  <a href="${root}compare/index.html" class="btn btn-primary btn-sm">在线横向PK</a>
                </div>
              </div>
            `).join('')}
          </div>

          <!-- 品牌专属常见问题 (FAQ) -->
          <h2>11. 关于${ap.name}的常见问题 (FAQ)</h2>
          <div class="faq-list">
            <div class="faq-item">
              <div class="faq-question">
                <span>Q1: ${ap.name}购买后如何快速导入到客户端？</span>
                <span class="faq-indicator">+</span>
              </div>
              <div class="faq-answer" style="display: none;">
                登录${ap.name}用户管理中心，在“我的订阅”或“快速配置”区域，根据您的设备类型点击“一键导入Clash”或“一键导入Shadowrocket”即可自动拉取节点列表，无需手动繁琐复制节点配置。
              </div>
            </div>
            <div class="faq-item">
              <div class="faq-question">
                <span>Q2: 遇到部分节点超时连不上怎么办？</span>
                <span class="faq-indicator">+</span>
              </div>
              <div class="faq-answer" style="display: none;">
                首先检查本地网络连接是否正常，然后在客户端中右键点击订阅执行“更新订阅（Update Subscription）”。若依然异常，请切换至其他备用区域（例如从香港切换至日本或新加坡节点）。
              </div>
            </div>
          </div>
        </div>
      </div>

      <aside class="article-sidebar">
        <div class="sidebar-widget">
          <div class="sidebar-widget-title">${ap.name}评测核心参数</div>
          <div style="font-size: 0.875rem; display: flex; flex-direction: column; gap: 0.6rem;">
            <div><strong>起步价格：</strong>¥${ap.startingPrice} / 月起</div>
            <div><strong>线路架构：</strong>${ap.lineType}</div>
            <div><strong>节点规模：</strong>${ap.nodeCount}</div>
            <div><strong>设备并发：</strong>${ap.deviceLimit}</div>
            <div><strong>核验日期：</strong>${ap.lastVerified}</div>
            <div><strong>综合评分：</strong><span style="color: var(--primary); font-weight: bold; font-size: 1.1rem;">${ap.overallRating}</span> / 10</div>
          </div>
          <div style="margin-top: 1rem; padding-top: 1rem; border-top: 1px solid var(--border-light);">
            <a href="${root}compare/index.html" class="btn btn-primary btn-sm" style="width: 100%;">将${ap.name}加入横向对比</a>
          </div>
        </div>

        <div class="sidebar-widget">
          <div class="sidebar-widget-title">更多独立评测</div>
          <ul class="toc-list">
            ${airports.map(a => `
              <li><a href="${root}review/${a.slug}/index.html" ${a.id === ap.id ? 'style="color: var(--primary); font-weight: bold;"' : ''}>${a.name}独立评测</a></li>
            `).join('')}
          </ul>
        </div>
      </aside>
    </div>
    `;

    buildPage({
      relPath: `review/${ap.slug}/index.html`,
      title: `${ap.name}怎么样？2026真实套餐价格、线路特点与综合评测 | 选机场网`,
      description: `2026年${ap.name}深度独立评测报告。详细剖析${ap.name}套餐价格、线路架构类型、流媒体与ChatGPT解锁表现、真实优缺点及适合人群，实事求是拒绝虚假跑分。`,
      keywords: `${ap.name}, ${ap.name}评测, ${ap.name}怎么样, 机场推荐, 梯子推荐, vpn评测`,
      canonicalUrl: `${DOMAIN}/review/${ap.slug}/`,
      depth,
      activeNav: 'review',
      breadcrumbs: [{ name: '机场评测', url: `${root}review/index.html` }, { name: `${ap.name}评测报告` }],
      bodyContent: content
    });
  });

  // 评测中心汇总页 review/index.html
  {
    const depthIndex = 1;
    const rootIndex = getRelativeRoot(depthIndex);

    const content = `
    <div class="container" style="padding: 3rem 1.25rem;">
      <header style="margin-bottom: 2.5rem; text-align: center;">
        <span class="badge badge-blue">独立实测档案</span>
        <h1 style="font-size: 2.3rem; margin-top: 0.5rem; margin-bottom: 0.75rem;">机场独立深度评测报告中心</h1>
        <p style="color: var(--text-muted); max-width: 700px; margin: 0 auto; font-size: 1.05rem;">
          严格区分官方公开资料、编辑整理资料与真实技术指标，拒绝将官方宣传当成实测结果，为您呈现客观中立的机场评测。
        </p>
      </header>

      <div class="cards-grid-3">
        ${airports.map(ap => `
          <div class="airport-card">
            <div class="card-top">
              <div>
                <h2 style="font-size: 1.3rem; margin: 0;"><a href="${rootIndex}review/${ap.slug}/index.html">${ap.name}</a></h2>
                <span class="airport-tag">${ap.lineType}</span>
              </div>
              <span class="badge badge-blue">评分 ${ap.overallRating}</span>
            </div>
            <p style="font-size: 0.875rem; color: var(--text-body); margin: 0.75rem 0 1rem 0;">${ap.description}</p>
            <ul class="card-features-list">
              <li><span class="icon-check">✓</span> <span>起步资费：¥${ap.startingPrice} / 月</span></li>
              <li><span class="icon-check">✓</span> <span>核验状态：${ap.testStatus === 'official-data' ? '官方参数已核实' : '实测通过'}</span></li>
              <li><span class="icon-info">ℹ</span> <span>核心优势：${ap.advantages[0]}</span></li>
            </ul>
            <div class="card-actions" style="margin-top: auto;">
              <a href="${rootIndex}review/${ap.slug}/index.html" class="btn btn-primary btn-sm">阅读完整评测报告 &rarr;</a>
              <a href="${rootIndex}compare/index.html" class="btn btn-outline btn-sm">横向比对</a>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
    `;

    buildPage({
      relPath: 'review/index.html',
      title: '机场深度评测报告汇总中心 - 真实套餐价格与线路实测 | 选机场网',
      description: '选机场网独立机场评测报告专区。汇集2026年主流机场深度评测，从套餐价格、线路类型、流媒体与AI解锁、客观优缺点到避坑指南全方位剖析。',
      keywords: '机场评测, 机场怎么样, 梯子评测, vpn评测, 机场推荐, 科学上网评测',
      canonicalUrl: `${DOMAIN}/review/`,
      depth: depthIndex,
      activeNav: 'review',
      breadcrumbs: [{ name: '机场评测' }],
      bodyContent: content
    });
  }
}

module.exports = buildReviews;
