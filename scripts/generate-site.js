const fs = require('fs');
const path = require('path');
const airports = require('../data/airports.js');

const DOMAIN = 'https://xuanjichang.top';

// 计算两相对路径之间的关系
function getRelativeRoot(depth) {
  if (depth === 0) return '';
  if (depth === 1) return '../';
  if (depth === 2) return '../../';
  return '../../../';
}

function renderHeader(depth, activeNav) {
  const root = getRelativeRoot(depth);
  return `
  <header class="site-header">
    <div class="container header-inner">
      <a href="${root}index.html" class="brand-logo" title="选机场网 - 优质机场推荐与VPN节点导航">
        <span class="brand-icon">选</span>
        <span>选机场网</span>
      </a>
      <nav class="site-nav" id="site-nav">
        <a href="${root}index.html" class="${activeNav === 'home' ? 'active' : ''}">首页</a>
        <a href="${root}recommend/index.html" class="${activeNav === 'recommend' ? 'active' : ''}">机场推荐</a>
        <a href="${root}ranking/overall/index.html" class="${activeNav === 'ranking' ? 'active' : ''}">综合排行</a>
        <a href="${root}review/index.html" class="${activeNav === 'review' ? 'active' : ''}">机场评测</a>
        <a href="${root}compare/index.html" class="${activeNav === 'compare' ? 'active' : ''}">在线对比</a>
        <a href="${root}guides/index.html" class="${activeNav === 'guides' ? 'active' : ''}">使用教程</a>
        <a href="${root}blog/index.html" class="${activeNav === 'blog' ? 'active' : ''}">选购指南</a>
        <a href="${root}glossary/index.html" class="${activeNav === 'glossary' ? 'active' : ''}">术语百科</a>
      </nav>
      <div class="header-actions">
        <a href="${root}compare/index.html" class="btn btn-primary btn-sm">横向比选</a>
        <button class="menu-toggle" aria-label="展开菜单" aria-expanded="false">&#9776;</button>
      </div>
    </div>
  </header>
  `;
}

function renderFooter(depth) {
  const root = getRelativeRoot(depth);
  return `
  <footer class="site-footer">
    <div class="container">
      <div class="disclaimer-bar">
        <strong>免责声明与合规提示：</strong>本站所有内容均基于公开技术资料、网络协议及客观测试数据整理，旨在为跨境科研、外贸出海、软件开发及学术检索提供网络代理技术参考。请严格遵守所在国家及地区法律法规，理性合规使用网络工具，禁止用于非法用途。
      </div>
      <div class="footer-grid">
        <div class="footer-brand">
          <h3>选机场网 (xuanjichang.top)</h3>
          <p>专业的中文网络代理与机场节点资讯门户。坚持实事求是、数据公开透明原则，拒绝虚构虚假测速与浮夸宣传，为您提供客观靠谱的科学上网选购与配置指南。</p>
          <div style="margin-top: 1rem; font-size: 0.85rem; color: #64748b;">
            <span>主攻核心：机场推荐 · 性价比机场 · 梯子推荐 · VPN节点评测</span>
          </div>
        </div>
        <div class="footer-col">
          <h4>推荐与排行</h4>
          <ul class="footer-links">
            <li><a href="${root}ranking/overall/index.html">综合实力排行榜</a></li>
            <li><a href="${root}ranking/value/index.html">高性价比排行榜</a></li>
            <li><a href="${root}ranking/stable/index.html">稳定专线排行榜</a></li>
            <li><a href="${root}ranking/budget/index.html">平价低预算排行榜</a></li>
            <li><a href="${root}recommend/ai/index.html">ChatGPT / AI专用专线</a></li>
            <li><a href="${root}recommend/streaming/index.html">4K流媒体解锁专线</a></li>
            <li><a href="${root}compare/index.html">机场参数横向对比工具</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>教程与指南</h4>
          <ul class="footer-links">
            <li><a href="${root}guides/windows/index.html">Windows 客户端配置教程</a></li>
            <li><a href="${root}guides/android/index.html">Android 客户端配置教程</a></li>
            <li><a href="${root}guides/ios/index.html">iOS 小火箭配置教程</a></li>
            <li><a href="${root}guides/macos/index.html">macOS 电脑配置教程</a></li>
            <li><a href="${root}blog/how-to-choose-airport/index.html">新手科学选购机场决策</a></li>
            <li><a href="${root}blog/airport-vs-traditional-vpn/index.html">机场与传统VPN技术区别</a></li>
            <li><a href="${root}blog/protocol-comparison-shadowsocks-trojan-vless-hysteria2/index.html">代理协议对比深度解析</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>关于与合规</h4>
          <ul class="footer-links">
            <li><a href="${root}about/index.html">关于本站使命</a></li>
            <li><a href="${root}editorial-policy/index.html">编辑政策与评测标准</a></li>
            <li><a href="${root}contact/index.html">联系我们与纠错</a></li>
            <li><a href="${root}privacy-policy/index.html">隐私权保护政策</a></li>
            <li><a href="${root}disclaimer/index.html">免责与服务条款</a></li>
            <li><a href="${root}sitemap.xml">XML 网站地图</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <div>&copy; 2026 选机场网 (xuanjichang.top) · 保留所有权利 · 专业中文机场博客评测系统</div>
        <div>架构：纯静态极速响应 · Bing SEO 规范优化 · 纯HTML+原生CSS驱动</div>
      </div>
    </div>
  </footer>
  <script src="${root}js/globe-dots.js"></script>
  <script src="${root}js/main.js"></script>
  `;
}

function renderBreadcrumbs(crumbs, depth) {
  const root = getRelativeRoot(depth);
  let html = `<nav class="container breadcrumbs" aria-label="面包屑导航">
    <a href="${root}index.html">首页</a>`;
  crumbs.forEach((c, idx) => {
    html += ` <span class="breadcrumbs-separator">/</span> `;
    if (idx === crumbs.length - 1 || !c.url) {
      html += `<span>${c.name}</span>`;
    } else {
      html += `<a href="${c.url}">${c.name}</a>`;
    }
  });
  html += `</nav>`;
  return html;
}

function buildPage({
  relPath, // e.g. 'index.html', 'ranking/overall/index.html'
  title,
  description,
  keywords,
  canonicalUrl,
  depth,
  activeNav,
  breadcrumbs = [],
  schema = null,
  bodyContent,
  extraScripts = ''
}) {
  const root = getRelativeRoot(depth);
  
  const defaultSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${DOMAIN}/#website`,
        "url": DOMAIN,
        "name": "选机场网",
        "description": "专业中文机场推荐、VPN节点评测与科学上网配置导航",
        "publisher": {
          "@type": "Organization",
          "name": "选机场网编辑部",
          "url": DOMAIN,
          "logo": {
            "@type": "ImageObject",
            "url": `${DOMAIN}/favicon.ico`
          }
        }
      },
      ...(schema ? (Array.isArray(schema) ? schema : [schema]) : [])
    ]
  };

  const html = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
  <meta name="description" content="${description}">
  <meta name="keywords" content="${keywords}">
  <link rel="canonical" href="${canonicalUrl}">
  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
  <meta property="og:locale" content="zh_CN">
  <meta property="og:type" content="website">
  <meta property="og:title" content="${title}">
  <meta property="og:description" content="${description}">
  <meta property="og:url" content="${canonicalUrl}">
  <meta property="og:site_name" content="选机场网">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${title}">
  <meta name="twitter:description" content="${description}">
  <link rel="stylesheet" href="${root}css/style.css">
  <script type="application/ld+json">
  ${JSON.stringify(defaultSchema, null, 2)}
  </script>
</head>
<body>
  <canvas id="bg-canvas" class="bg-canvas"></canvas>
  ${renderHeader(depth, activeNav)}
  ${breadcrumbs.length > 0 ? renderBreadcrumbs(breadcrumbs, depth) : ''}
  <main>
    ${bodyContent}
  </main>
  ${renderFooter(depth)}
  ${extraScripts}
</body>
</html>`;

  const fullPath = path.join(__dirname, '..', relPath);
  fs.mkdirSync(path.dirname(fullPath), { recursive: true });
  fs.writeFileSync(fullPath, html, 'utf-8');
  console.log(`Generated: ${relPath}`);
}

module.exports = {
  DOMAIN,
  airports,
  getRelativeRoot,
  buildPage
};
