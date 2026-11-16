const fs = require('fs');
const path = require('path');

const DOMAIN = 'https://xuanjichang.top';
const rootDir = path.join(__dirname, '..');

// 递归查找所有 .html 文件
function getHtmlFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    if (file === 'node_modules' || file === '.git' || file === 'scripts' || file === 'docs') continue;
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      getHtmlFiles(filePath, fileList);
    } else if (file.endsWith('.html')) {
      fileList.push(filePath);
    }
  }
  return fileList;
}

function generateSitemap() {
  const htmlFiles = getHtmlFiles(rootDir);
  const today = new Date().toISOString().split('T')[0];

  const urls = [];

  for (const filePath of htmlFiles) {
    const rel = path.relative(rootDir, filePath).replace(/\\/g, '/');
    if (rel === '404.html') continue; // 排除 404

    let urlPath = rel;
    if (urlPath === 'index.html') {
      urlPath = '';
    } else if (urlPath.endsWith('/index.html')) {
      urlPath = urlPath.replace(/\/index\.html$/, '/');
    }

    const fullUrl = `${DOMAIN}/${urlPath}`;
    const priority = urlPath === '' ? '1.0' : (urlPath.startsWith('ranking/') || urlPath.startsWith('recommend/')) ? '0.9' : '0.8';
    const changefreq = urlPath === '' ? 'daily' : 'weekly';

    urls.push({
      loc: fullUrl,
      lastmod: today,
      changefreq,
      priority
    });
  }

  // 排序：首页优先，其余字母序
  urls.sort((a, b) => {
    if (a.loc === `${DOMAIN}/`) return -1;
    if (b.loc === `${DOMAIN}/`) return 1;
    return a.loc.localeCompare(b.loc);
  });

  // 生成 sitemap.xml
  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`).join('\n')}
</urlset>
`;

  fs.writeFileSync(path.join(rootDir, 'sitemap.xml'), sitemapXml, 'utf-8');
  console.log(`Generated sitemap.xml with ${urls.length} verified URLs.`);

  // 生成 sitemap-index.xml
  const sitemapIndexXml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${DOMAIN}/sitemap.xml</loc>
    <lastmod>${today}</lastmod>
  </sitemap>
</sitemapindex>
`;

  fs.writeFileSync(path.join(rootDir, 'sitemap-index.xml'), sitemapIndexXml, 'utf-8');
  console.log(`Generated sitemap-index.xml.`);
}

generateSitemap();
