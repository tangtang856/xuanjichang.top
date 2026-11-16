const { DOMAIN, airports, getRelativeRoot, buildPage } = require('./generate-site');
const BRAND_DOSSIERS = require('./data-brand-dossier');

function buildReviews() {
  const depth = 2;
  const root = getRelativeRoot(depth);

  airports.forEach((ap, idx) => {
    const dossier = BRAND_DOSSIERS[ap.id] || {};
    const airportName = dossier.airportName || ap.name;
    const pageTitle = dossier.pageTitle || `${airportName}怎么样？2026最新套餐价格、流量规格、节点线路与真实测速信息深度评测 | 选机场网`;
    const h1Title = dossier.h1Title || `${airportName}怎么样？2026最新套餐价格、流量规格、节点线路与晚高峰测速信息深度评测`;
    const metaDesc = dossier.metaDesc || `2026年${airportName}全面深度评测报告。详细解答${airportName}怎么样？全面公开最新套餐价格、流量规格、节点线路分布与晚高峰真实测速信息。`;
    const metaKeywords = dossier.metaKeywords || `${ap.name}, ${airportName}, ${ap.name}怎么样, ${ap.name}套餐价格, ${ap.name}流量, ${ap.name}节点, ${ap.name}测速, 机场推荐, 梯子推荐, vpn评测`;

    // 上下家评测循环导航
    const prevAp = idx > 0 ? airports[idx - 1] : airports[airports.length - 1];
    const nextAp = idx < airports.length - 1 ? airports[idx + 1] : airports[0];
    const prevDossier = BRAND_DOSSIERS[prevAp.id] || {};
    const nextDossier = BRAND_DOSSIERS[nextAp.id] || {};
    const prevAirportName = prevDossier.airportName || prevAp.name;
    const nextAirportName = nextDossier.airportName || nextAp.name;
    const otherAirports = airports.filter(a => a.id !== ap.id);

    const content = `
    <div class="container article-container">
      <div class="article-main">
        <header class="article-header">
          <div style="display: flex; gap: 0.5rem; margin-bottom: 0.5rem; flex-wrap: wrap;">
            <span class="badge badge-blue">2026 独立深度实测报告</span>
            <span class="badge badge-green">数据核验：官方公开参数 + 晚高峰真机实测</span>
            ${ap.coupon ? `<span class="badge badge-orange">专属优惠码: ${ap.coupon}</span>` : ''}
          </div>
          <h1 style="font-size: 2.15rem; margin-top: 0.25rem; margin-bottom: 0.75rem; line-height: 1.35;">${h1Title}</h1>
          <div class="article-meta">
            <span>最后核验日期：${ap.lastVerified}</span>
            <span>线路类型：${ap.lineType}</span>
            <span>评测机构：选机场网技术测评组</span>
            <span>全文字数：3,500+ 字</span>
          </div>
        </header>

        <!-- 一句话结论与推荐定位 -->
        <div class="quick-answer-card" style="margin-top: 0;">
          <div class="quick-answer-header">⚡ 一句话核心评测结论与定位</div>
          <div style="font-size: 0.95rem; color: #60a5fa; font-weight: 600; margin-bottom: 0.5rem;">
            💡 核心定位：${dossier.tagline || ap.name}
          </div>
          <p style="font-size: 1.025rem; font-weight: 500; color: var(--text-main); margin-bottom: 0.75rem; line-height: 1.7;">
            ${dossier.brandVerdict || ap.description}
          </p>
          <div style="font-size: 0.875rem; color: var(--text-muted); display: flex; flex-wrap: wrap; gap: 1rem; align-items: center; border-top: 1px dashed var(--border-light); padding-top: 0.6rem;">
            <span>综合实力评分：<strong style="color: var(--primary); font-size: 1.15rem;">${ap.overallRating}</strong> / 10</span>
            <span>速度体验：<strong style="color: #38bdf8;">${ap.speedRating}</strong></span>
            <span>稳定性：<strong style="color: #10b981;">${ap.stabilityRating}</strong></span>
            <span>性价比：<strong style="color: #f59e0b;">${ap.valueRating}</strong></span>
            <span>起步单价：<strong style="color: var(--text-main);">¥${ap.startingPrice} / 月</strong></span>
          </div>
        </div>

        <!-- 官网直达与专属折扣卡片 -->
        <div class="callout callout-info" style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem; margin: 1.5rem 0;">
          <div>
            <h3 style="margin: 0; font-size: 1.15rem; color: #60a5fa;">👉 ${ap.name} 官方订阅与注册直达通道</h3>
            <p style="margin: 0.35rem 0 0 0; font-size: 0.9rem; color: #cbd5e1;">
              ${ap.coupon ? `官方专属优惠码：<strong style="color: #f87171; font-family: monospace; font-size: 1.05rem; background: rgba(239, 68, 68, 0.18); border: 1px solid rgba(239, 68, 68, 0.35); padding: 0.15rem 0.45rem; border-radius: 4px;">${ap.coupon}</strong>（结账时输入立减）` : '支持全平台主流客户端一键快速导入配置'}
            </p>
          </div>
          <a href="${ap.affiliateUrl}" target="_blank" rel="noopener noreferrer nofollow" class="btn btn-primary" style="padding: 0.65rem 1.4rem;">前往${ap.name}官网订购 &rarr;</a>
        </div>

        <!-- 快速跳转导读目录 (TOC) -->
        <div style="background: var(--bg-card); border: 1px solid var(--border-light); border-radius: var(--radius-sm); padding: 1.25rem; margin: 1.5rem 0;">
          <div style="font-weight: 700; color: var(--text-main); font-size: 1rem; margin-bottom: 0.75rem; display: flex; align-items: center; gap: 0.4rem;">
            <span>📑</span> <span>本篇深度评测章节导读导航</span>
          </div>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 0.5rem; font-size: 0.875rem;">
            <a href="#sec-background" style="color: var(--text-muted); text-decoration: none;">1. 品牌底蕴与底层网络拓扑架构</a>
            <a href="#sec-pricing" style="color: var(--text-muted); text-decoration: none;">2. 套餐资费体系与每GB成本剖析</a>
            <a href="#sec-network" style="color: var(--text-muted); text-decoration: none;">3. 节点机房覆盖与传输协议解析</a>
            <a href="#sec-peak" style="color: var(--text-muted); text-decoration: none;">4. 晚高峰压力实测与丢包率表现</a>
            <a href="#sec-ai" style="color: var(--text-muted); text-decoration: none;">5. AI大模型防封与IP纯净度实测</a>
            <a href="#sec-streaming" style="color: var(--text-muted); text-decoration: none;">6. 4K/8K流媒体跨区解锁报告</a>
            <a href="#sec-clients" style="color: var(--text-muted); text-decoration: none;">7. 全平台客户端一键导入实操体验</a>
            <a href="#sec-pros" style="color: var(--text-muted); text-decoration: none;">8. 专业维度核心竞争优势详解</a>
            <a href="#sec-cons" style="color: var(--text-muted); text-decoration: none;">9. 客观短板与潜在风险提示</a>
            <a href="#sec-advice" style="color: var(--text-muted); text-decoration: none;">10. 适用人群画像与精准选购指南</a>
            <a href="#sec-faq" style="color: var(--text-muted); text-decoration: none;">11. 关于${ap.name}的高频疑问FAQ</a>
          </div>
        </div>

        <div class="article-content">
          <!-- 1. 品牌介绍与底层架构 -->
          <h2 id="sec-background">1. 品牌技术底蕴与底层物理网络拓扑全景架构</h2>
          ${dossier.backgroundAndArch || `<p>${ap.description}</p>`}

          <!-- 2. 套餐价格表与性价比 -->
          <h2 id="sec-pricing">2. 2026年最新套餐价格体系与真实每GB成本剖析</h2>
          ${dossier.planAnalysis || ''}

          <div class="table-responsive" style="margin: 1.25rem 0;">
            <table class="data-table">
              <thead>
                <tr>
                  <th>套餐名称</th>
                  <th>计费周期</th>
                  <th>套餐总资费</th>
                  <th>每月可用流量</th>
                  <th>真实折算单价</th>
                  <th>峰值带宽上限</th>
                  <th>并发设备限制</th>
                </tr>
              </thead>
              <tbody>
                ${ap.plans.map(p => `
                  <tr>
                    <td><strong>${p.name}</strong></td>
                    <td>${p.cycle}</td>
                    <td><span style="color: var(--primary); font-weight: 700; font-size: 1.05rem;">¥${p.price}</span></td>
                    <td><strong style="color: #60a5fa;">${p.traffic}</strong></td>
                    <td>¥${p.costPerGB.toFixed(3)} / GB</td>
                    <td>${p.bandwidth}</td>
                    <td>${p.devices}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>

          <!-- 3. 节点与协议架构 -->
          <h2 id="sec-network">3. 节点机房覆盖、落地ISP质量与传输协议技术解析</h2>
          ${dossier.networkTopology || ''}

          <div style="background: var(--bg-card); border: 1px solid var(--border-light); border-radius: var(--radius-sm); padding: 1.25rem; margin: 1.25rem 0;">
            <h4 style="margin: 0 0 0.75rem 0; font-size: 1rem; color: var(--text-main);">📡 ${ap.name} 核心网络参数一览</h4>
            <ul style="margin: 0; padding-left: 1.25rem; line-height: 1.8; font-size: 0.925rem;">
              <li><strong>覆盖核心地区：</strong>${ap.regions.join('、')}</li>
              <li><strong>可用节点规模：</strong>${ap.nodeCount}</li>
              <li><strong>支持现代协议：</strong>${ap.protocols.map(p => `<code style="color: #60a5fa;">${p}</code>`).join('、')}</li>
              <li><strong>物理线路架构：</strong><span class="badge badge-blue" style="font-size: 0.8rem;">${ap.lineType}</span></li>
              <li><strong>并发设备上限：</strong>${ap.deviceLimit}</li>
            </ul>
          </div>

          <!-- 4. 晚高峰抗压实测 -->
          <h2 id="sec-peak">4. 晚高峰（20:00 - 23:00）压力测试与抗拥塞能力实测</h2>
          <p>
            晚高峰网络表现是检验一家机场是“真金专线”还是“劣质拼凑”的试金石。在全网国际海缆出口吞吐最高峰的 20:00 - 23:00 时段，公网骨干网丢包率急剧上升。选机场网测评组在连续多个自然日的高峰期进行了无间断丢包与延迟采样：
          </p>
          ${dossier.peakPerformance || ''}

          <!-- 5. AI平台实测 -->
          <h2 id="sec-ai">5. AI大模型（ChatGPT 4o / Claude 3.5 / Gemini）防封号与IP纯净度专项实测</h2>
          <p>
            进入 2026 年，以 OpenAI 和 Anthropic 为代表的顶尖人工智能服务商对数据中心 ASN 滥用 IP 的风控拦截达到了前所未有的严苛程度。低质机场节点由于大量用户共享脏 IP，极易诱发账号降级甚至永久封停。以下为${ap.name}在 AI 场景下的真实表现：
          </p>
          ${dossier.aiUnlockTest || ''}

          <!-- 6. 流媒体解锁报告 -->
          <h2 id="sec-streaming">6. 4K/8K主流流媒体全区跨国解锁实战报告</h2>
          <p>
            选机场网技术测评组使用多台实测终端（包括 Apple TV 4K、Windows 工作站及 iPhone），对${ap.name}主流出口节点的流媒体版权识别能力进行了全量嗅探：
          </p>
          ${dossier.streamingUnlockTest || ''}

          <!-- 7. 客户端实操与一键导入 -->
          <h2 id="sec-clients">7. 全平台客户端兼容性实测与一键导入保姆级指南</h2>
          <p>
            经选机场网实测兼容性验证，${ap.name}对主流桌面与移动操作系统、开源代理客户端支持度极佳：
          </p>
          ${dossier.clientSetupExperience || ''}

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(210px, 1fr)); gap: 1rem; margin: 1.5rem 0;">
            <div style="background: var(--bg-card); border: 1px solid var(--border-light); padding: 1.15rem; border-radius: var(--radius-sm);">
              <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.4rem;">
                <span style="font-size: 1.25rem;">💻</span>
                <strong style="color: var(--text-main); font-size: 1rem;">Windows 系统</strong>
              </div>
              <p style="font-size: 0.85rem; color: var(--text-muted); margin: 0; line-height: 1.6;">推荐 Clash Verge Rev、v2rayN。支持一键拉取订阅，开启 TUN 虚拟网卡模式后可全接管游戏与软件网络。</p>
            </div>
            <div style="background: var(--bg-card); border: 1px solid var(--border-light); padding: 1.15rem; border-radius: var(--radius-sm);">
              <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.4rem;">
                <span style="font-size: 1.25rem;">🤖</span>
                <strong style="color: var(--text-main); font-size: 1rem;">Android 安卓</strong>
              </div>
              <p style="font-size: 0.85rem; color: var(--text-muted); margin: 0; line-height: 1.6;">推荐 Clash Meta for Android (CMFA)、v2rayNG。支持应用分流白名单，手机常驻后台省电不发热。</p>
            </div>
            <div style="background: var(--bg-card); border: 1px solid var(--border-light); padding: 1.15rem; border-radius: var(--radius-sm);">
              <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.4rem;">
                <span style="font-size: 1.25rem;">🍎</span>
                <strong style="color: var(--text-main); font-size: 1rem;">iOS 苹果手机</strong>
              </div>
              <p style="font-size: 0.85rem; color: var(--text-muted); margin: 0; line-height: 1.6;">推荐 Shadowrocket (小火箭)、Loon、Surge。用户中心提供一键唤醒小火箭拉取配置，极速连接。</p>
            </div>
            <div style="background: var(--bg-card); border: 1px solid var(--border-light); padding: 1.15rem; border-radius: var(--radius-sm);">
              <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.4rem;">
                <span style="font-size: 1.25rem;">🖥️</span>
                <strong style="color: var(--text-main); font-size: 1rem;">macOS 苹果电脑</strong>
              </div>
              <p style="font-size: 0.85rem; color: var(--text-muted); margin: 0; line-height: 1.6;">推荐 Clash Verge Mac、Surge for Mac。完美适配苹果 M 系列芯片架构，托盘一键启停无感漫游。</p>
            </div>
          </div>

          <!-- 8. 专业维度核心优势 -->
          <h2 id="sec-pros">8. 专业维度核心竞争优势与技术亮点剖析</h2>
          <div style="display: flex; flex-direction: column; gap: 1rem; margin: 1.25rem 0;">
            ${(dossier.prosDetailed || ap.advantages.map(a => ({ title: a, desc: a }))).map((pro, pIdx) => `
              <div style="background: rgba(16, 185, 129, 0.08); border-left: 4px solid var(--success); padding: 1rem 1.25rem; border-radius: 0 var(--radius-sm) var(--radius-sm) 0;">
                <div style="font-weight: 700; color: #34d399; font-size: 1rem; margin-bottom: 0.35rem;">
                  ✓ 优势 ${pIdx + 1}：${pro.title}
                </div>
                <div style="font-size: 0.925rem; color: var(--text-body); line-height: 1.6;">
                  ${pro.desc}
                </div>
              </div>
            `).join('')}
          </div>

          <!-- 9. 客观短板与注意事项 -->
          <h2 id="sec-cons">9. 客观短板、潜在局限性与风险提示</h2>
          <div style="display: flex; flex-direction: column; gap: 1rem; margin: 1.25rem 0;">
            ${(dossier.consDetailed || ap.disadvantages.map(d => ({ title: d, desc: d }))).map((con, cIdx) => `
              <div style="background: rgba(245, 158, 11, 0.08); border-left: 4px solid var(--warning); padding: 1rem 1.25rem; border-radius: 0 var(--radius-sm) var(--radius-sm) 0;">
                <div style="font-weight: 700; color: #fbbf24; font-size: 1rem; margin-bottom: 0.35rem;">
                  ⚠ 注意事项 ${cIdx + 1}：${con.title}
                </div>
                <div style="font-size: 0.925rem; color: var(--text-body); line-height: 1.6;">
                  ${con.desc}
                </div>
              </div>
            `).join('')}
          </div>

          <!-- 10. 适用人群与选购建议 -->
          <h2 id="sec-advice">10. 针对不同使用场景的精准选购与避坑决策建议</h2>
          ${dossier.buyingAdvice || `
            <p>${ap.name}最适合以下人群使用：</p>
            <ul>${ap.suitableFor.map(s => `<li>${s}</li>`).join('')}</ul>
          `}

          <!-- 11. 数据来源与核验信息 -->
          <div class="verified-notice" id="sec-method">
            <div>
              <strong>数据真实性公开声明：</strong>本篇评测报告基于【${ap.sources.join('；')}】进行多轮交叉核验。测试环境涵盖电信千兆 FTTH、联通 500M 宽带及移动 5G 网络，拒绝任何形式的商业虚构跑分与盲目吹捧。
            </div>
            <div style="margin-top: 0.35rem;">
              <strong>最新技术核验批次：</strong>${ap.lastVerified}（选机场网技术测评组独立归档）
            </div>
          </div>

          <!-- 12. 竞品横向对比 -->
          <h2 id="sec-compare">12. 与其他主流代表性机场的横向对比与替代方案</h2>
          <p>
            在实际选购决策中，建议结合自身的真实预算与核心诉求，将${ap.name}与以下两家定位相近的代表性服务商进行横向对照：
          </p>
          <div class="cards-grid-2" style="margin: 1.5rem 0;">
            ${otherAirports.slice(0, 2).map(o => `
              <div class="airport-card">
                <div class="card-top">
                  <div>
                    <h4 style="margin: 0 0 0.35rem 0; font-size: 1.15rem;"><a href="${root}review/${o.slug}/index.html">${o.name}</a></h4>
                    <span class="airport-tag">${o.lineType}</span>
                  </div>
                  <span class="badge badge-blue">综合评分 ${o.overallRating}</span>
                </div>
                <p style="font-size: 0.85rem; color: var(--text-body); margin: 0.5rem 0 0.75rem 0; line-height: 1.6;">${o.description}</p>
                <div style="font-size: 0.85rem; margin-bottom: 0.85rem; color: var(--text-muted);">
                  <span>起步资费：<strong style="color: var(--primary);">¥${o.startingPrice}</strong> / 月起</span> · <span>配额：${o.plans[0].traffic}</span>
                </div>
                <div style="display: flex; gap: 0.5rem;">
                  <a href="${root}review/${o.slug}/index.html" class="btn btn-outline btn-sm">查看完整评测</a>
                  <a href="${o.affiliateUrl}" target="_blank" rel="noopener noreferrer nofollow" class="btn btn-primary btn-sm">直达官网</a>
                </div>
              </div>
            `).join('')}
          </div>

          <!-- 13. 品牌专属常见问题 (FAQ) -->
          <h2 id="sec-faq">13. 关于${ap.name}的常见高频疑难解答 (FAQ)</h2>
          <div class="faq-list">
            ${(dossier.brandFaq || [
              { q: `${ap.name}购买后如何快速导入到客户端？`, a: `登录${ap.name}用户管理中心，在“我的订阅”或“快速配置”区域，根据您的设备类型点击“一键导入Clash”或“一键导入Shadowrocket”即可自动拉取节点列表，无需手动繁琐复制节点配置。` },
              { q: `遇到部分节点超时连不上怎么办？`, a: `首先检查本地网络连接是否正常，然后在客户端中右键点击订阅执行“更新订阅（Update Subscription）”。若依然异常，请切换至其他备用区域（例如从香港切换至日本或新加坡节点）。` }
            ]).map((faq, fIdx) => `
              <div class="faq-item">
                <div class="faq-question">
                  <span>Q${fIdx + 1}: ${faq.q}</span>
                  <span class="faq-indicator">+</span>
                </div>
                <div class="faq-answer" style="display: none;">
                  ${faq.a}
                </div>
              </div>
            `).join('')}
          </div>

          <!-- 底部直达行动卡片 -->
          <div class="callout callout-info" style="margin-top: 2.5rem; text-align: center; padding: 2rem 1.5rem;">
            <h3 style="margin: 0 0 0.5rem 0; font-size: 1.3rem; color: #60a5fa;">准备好体验${ap.name}的高速网络了吗？</h3>
            <p style="margin: 0 auto 1.25rem auto; max-width: 650px; font-size: 0.95rem; color: #cbd5e1;">
              ${ap.coupon ? `现在订购输入专属优惠码 <strong style="color: #f87171; font-family: monospace;">${ap.coupon}</strong>，即可享受官网最新优惠折扣。` : '支持全平台主流客户端一键导入，即买即用。'}
            </p>
            <div style="display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap;">
              <a href="${ap.affiliateUrl}" target="_blank" rel="noopener noreferrer nofollow" class="btn btn-primary" style="padding: 0.75rem 2rem; font-size: 1rem;">前往${ap.name}官网即刻订购 &rarr;</a>
              <a href="${root}compare/index.html" class="btn btn-outline" style="padding: 0.75rem 1.5rem;">加入横向参数对比</a>
            </div>
          </div>
        </div>

        <!-- 上下一篇评测导航条 (每个评测跳转到下一个评测) -->
        <nav class="article-pagination" aria-label="评测上下篇导航">
          <a href="${root}review/${prevAp.slug}/index.html" class="pagination-item prev">
            <span class="pagination-label">&larr; 上一家评测 · ${prevAp.lineType}</span>
            <span class="pagination-title">${prevAirportName} 深度评测 (综合评分: ${prevAp.overallRating})</span>
          </a>
          <a href="${root}review/${nextAp.slug}/index.html" class="pagination-item next">
            <span class="pagination-label">下一家评测 · ${nextAp.lineType} &rarr;</span>
            <span class="pagination-title">${nextAirportName} 深度评测 (综合评分: ${nextAp.overallRating})</span>
          </a>
        </nav>

        <!-- 延伸相关机场评测 -->
        <div class="related-articles-section" style="margin-top: 2.5rem; padding-top: 1.75rem; border-top: 1px dashed var(--border-light);">
          <h3 style="font-size: 1.15rem; margin-bottom: 1rem; color: var(--text-main);">🔍 更多主流机场独立评测推荐</h3>
          <div class="cards-grid-3">
            ${otherAirports.slice(0, 3).map(oa => {
              const oaDossier = BRAND_DOSSIERS[oa.id] || {};
              const oaName = oaDossier.airportName || oa.name;
              return `
              <a href="${root}review/${oa.slug}/index.html" class="category-card" style="padding: 1.25rem;">
                <span class="badge badge-blue" style="font-size: 0.7rem; align-self: flex-start; margin-bottom: 0.5rem;">${oa.lineType}</span>
                <h4 style="font-size: 0.95rem; color: var(--text-main); margin-bottom: 0.35rem; line-height: 1.4;">${oaName}（评分: ${oa.overallRating}）</h4>
                <p style="font-size: 0.8rem; color: var(--text-muted); margin-bottom: 0; line-height: 1.5; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;">起步 ¥${oa.startingPrice}/月 · ${oa.advantages[0]}</p>
              </a>
            `}).join('')}
          </div>
        </div>
      </div>

      <aside class="article-sidebar">
        <div class="sidebar-widget">
          <div class="sidebar-widget-title">${airportName}核心参数</div>
          <div style="font-size: 0.875rem; display: flex; flex-direction: column; gap: 0.6rem;">
            <div><strong>起步价格：</strong><span style="color: var(--primary); font-weight: bold;">¥${ap.startingPrice}</span> / 月起</div>
            <div><strong>线路架构：</strong>${ap.lineType}</div>
            <div><strong>节点规模：</strong>${ap.nodeCount}</div>
            <div><strong>设备并发：</strong>${ap.deviceLimit}</div>
            ${ap.coupon ? `<div><strong>专属优惠码：</strong><span style="color: #f87171; font-weight: bold; font-family: monospace;">${ap.coupon}</span></div>` : ''}
            <div><strong>核验日期：</strong>${ap.lastVerified}</div>
            <div><strong>综合评分：</strong><span style="color: var(--primary); font-weight: bold; font-size: 1.15rem;">${ap.overallRating}</span> / 10</div>
          </div>
          <div style="margin-top: 1rem; padding-top: 1rem; border-top: 1px solid var(--border-light); display: flex; flex-direction: column; gap: 0.5rem;">
            <a href="${ap.affiliateUrl}" target="_blank" rel="noopener noreferrer nofollow" class="btn btn-primary btn-sm" style="width: 100%;">前往${airportName}官网</a>
            <a href="${root}compare/index.html" class="btn btn-outline btn-sm" style="width: 100%;">加入在线横向对比</a>
          </div>
        </div>

        <div class="sidebar-widget">
          <div class="sidebar-widget-title">文章目录索引</div>
          <ul class="toc-list" style="font-size: 0.825rem; line-height: 1.8;">
            <li><a href="#sec-background">1. 品牌底蕴与网络架构</a></li>
            <li><a href="#sec-pricing">2. 套餐资费与成本折算</a></li>
            <li><a href="#sec-network">3. 节点机房与传输协议</a></li>
            <li><a href="#sec-peak">4. 晚高峰丢包压力实测</a></li>
            <li><a href="#sec-ai">5. AI大模型防封实测</a></li>
            <li><a href="#sec-streaming">6. 4K/8K流媒体跨区解锁</a></li>
            <li><a href="#sec-clients">7. 全平台客户端导入实操</a></li>
            <li><a href="#sec-pros">8. 核心竞争优势详解</a></li>
            <li><a href="#sec-cons">9. 客观短板与风险提示</a></li>
            <li><a href="#sec-advice">10. 适用人群与选购建议</a></li>
            <li><a href="#sec-faq">11. 常见高频疑问FAQ</a></li>
          </ul>
        </div>

        <div class="sidebar-widget">
          <div class="sidebar-widget-title">全部14大品牌独立评测</div>
          <ul class="toc-list" style="max-height: 380px; overflow-y: auto;">
            ${airports.map(a => {
              const aDossier = BRAND_DOSSIERS[a.id] || {};
              const aName = aDossier.airportName || a.name;
              return `
              <li><a href="${root}review/${a.slug}/index.html" ${a.id === ap.id ? 'style="color: var(--primary); font-weight: bold;"' : ''}>${aName}独立评测</a></li>
            `}).join('')}
          </ul>
        </div>
      </aside>
    </div>
    `;

    buildPage({
      relPath: `review/${ap.slug}/index.html`,
      title: pageTitle,
      description: metaDesc,
      keywords: metaKeywords,
      canonicalUrl: `${DOMAIN}/review/${ap.slug}/`,
      depth,
      activeNav: 'review',
      breadcrumbs: [{ name: '机场评测', url: `${root}review/index.html` }, { name: `${airportName}评测报告` }],
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
        <p style="color: var(--text-muted); max-width: 750px; margin: 0 auto; font-size: 1.05rem; line-height: 1.7;">
          严格区分官方公开参数、编辑整理资料与真实晚高峰实测指标。拒绝将官方广告宣传当成测试结果，深入拆解 14 大主流品牌的物理线路架构、每GB真实成本、AI防封及4K流媒体解锁能力。
        </p>
      </header>

      <div class="cards-grid-3">
        ${airports.map(ap => {
          const dossier = BRAND_DOSSIERS[ap.id] || {};
          const airportName = dossier.airportName || ap.name;
          const h1Title = dossier.h1Title || `${airportName}怎么样？2026最新套餐价格、流量规格、节点线路与晚高峰测速信息深度评测`;
          return `
          <div class="airport-card">
            <div class="card-top">
              <div>
                <h2 style="font-size: 1.25rem; margin: 0;"><a href="${rootIndex}review/${ap.slug}/index.html">${airportName}</a></h2>
                <span class="airport-tag">${ap.lineType}</span>
              </div>
              <span class="badge badge-blue">评分 ${ap.overallRating}</span>
            </div>
            <div style="font-size: 0.825rem; color: #60a5fa; font-weight: 600; margin: 0.45rem 0 0.5rem 0; line-height: 1.4;">
              ${h1Title}
            </div>
            <p style="font-size: 0.875rem; color: var(--text-body); margin: 0 0 1rem 0; line-height: 1.6;">${ap.description}</p>
            <ul class="card-features-list">
              <li><span class="icon-check">✓</span> <span>起步资费：¥${ap.startingPrice} / 月 (${ap.plans[0].traffic})</span></li>
              <li><span class="icon-check">✓</span> <span>网络架构：${ap.lineType}（${ap.nodeCount}）</span></li>
              <li><span class="icon-check">✓</span> <span>单GB成本：低至 ¥${ap.plans[0].costPerGB.toFixed(3)} / GB</span></li>
              ${ap.coupon ? `<li><span class="icon-check">✓</span> <span>专属优惠码：<strong style="color: #f87171;">${ap.coupon}</strong></span></li>` : ''}
              <li><span class="icon-info">ℹ</span> <span>适配场景：${ap.suitableFor[0]}</span></li>
            </ul>
            <div class="card-actions" style="margin-top: auto; display: flex; gap: 0.5rem;">
              <a href="${rootIndex}review/${ap.slug}/index.html" class="btn btn-outline btn-sm">深度评测报告</a>
              <a href="${ap.affiliateUrl}" target="_blank" rel="noopener noreferrer nofollow" class="btn btn-primary btn-sm">直达官网</a>
            </div>
          </div>
        `}).join('')}
      </div>
    </div>
    `;

    buildPage({
      relPath: 'review/index.html',
      title: '机场深度评测报告汇总中心 - 真实套餐价格与线路实测 | 选机场网',
      description: '选机场网独立机场评测报告专区。汇集2026年14大主流机场深度评测，从套餐价格、线路类型、晚高峰测速、流媒体与AI解锁、客观优缺点到避坑指南全方位剖析。',
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
