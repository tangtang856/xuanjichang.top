const fs = require('fs');
const path = require('path');

const DOMAIN = 'https://xuanjichang.top';
const rootDir = path.join(__dirname, '..');

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

function auditSeo() {
  console.log('=== [QA 1/3] 自动化 SEO 技术与元数据审计 ===');
  const files = getHtmlFiles(rootDir);
  const titles = new Map();
  const descriptions = new Map();
  const errors = [];
  const warnings = [];

  let passedPages = 0;

  for (const file of files) {
    const rel = path.relative(rootDir, file).replace(/\\/g, '/');
    const content = fs.readFileSync(file, 'utf-8');

    // 1. Title 检查
    const titleMatch = content.match(/<title>(.*?)<\/title>/i);
    if (!titleMatch || !titleMatch[1].trim()) {
      errors.push(`[${rel}] 缺失 <title> 标签`);
    } else {
      const title = titleMatch[1].trim();
      if (titles.has(title)) {
        errors.push(`[${rel}] 重复的 Title: "${title}" (与 ${titles.get(title)} 冲突)`);
      } else {
        titles.set(title, rel);
      }
    }

    // 2. Meta Description 检查
    const descMatch = content.match(/<meta\s+name="description"\s+content="(.*?)"/i);
    if (!descMatch || !descMatch[1].trim()) {
      errors.push(`[${rel}] 缺失 meta description`);
    } else {
      const desc = descMatch[1].trim();
      if (descriptions.has(desc) && rel !== '404.html') {
        warnings.push(`[${rel}] 重复的 Meta Description: "${desc.slice(0, 30)}..."`);
      } else {
        descriptions.set(desc, rel);
      }
    }

    // 3. H1 检查 (必须且仅有1个)
    const h1Matches = content.match(/<h1[\s>]/gi);
    if (!h1Matches || h1Matches.length === 0) {
      errors.push(`[${rel}] 缺失 <h1> 标签`);
    } else if (h1Matches.length > 1) {
      errors.push(`[${rel}] 存在多个 <h1> 标签 (${h1Matches.length}个)`);
    }

    // 4. Canonical 检查
    const canonicalMatch = content.match(/<link\s+rel="canonical"\s+href="(.*?)"/i);
    if (!canonicalMatch) {
      errors.push(`[${rel}] 缺失 <link rel="canonical">`);
    } else {
      const canonical = canonicalMatch[1];
      if (!canonical.startsWith(DOMAIN)) {
        errors.push(`[${rel}] Canonical URL 非正式域名: ${canonical}`);
      }
    }

    // 5. Robots Meta 检查
    if (!content.includes('<meta name="robots"')) {
      errors.push(`[${rel}] 缺失 meta robots 声明`);
    }

    // 6. JSON-LD Schema 检查
    if (!content.includes('application/ld+json')) {
      warnings.push(`[${rel}] 缺失 JSON-LD 结构化数据`);
    }

    passedPages++;
  }

  // 7. Sitemap 检查
  const sitemapPath = path.join(rootDir, 'sitemap.xml');
  if (!fs.existsSync(sitemapPath)) {
    errors.push('sitemap.xml 文件缺失');
  } else {
    const sm = fs.readFileSync(sitemapPath, 'utf-8');
    if (!sm.includes(DOMAIN)) {
      errors.push('sitemap.xml 未包含正确正式域名');
    }
  }

  // 8. Robots.txt 检查
  const robotsPath = path.join(rootDir, 'robots.txt');
  if (!fs.existsSync(robotsPath)) {
    errors.push('robots.txt 文件缺失');
  }

  console.log(`已审计 ${files.length} 个 HTML 页面`);
  console.log(`错误数: ${errors.length}, 警告数: ${warnings.length}`);

  if (errors.length > 0) {
    console.error('✘ 发现以下 SEO 严重错误:');
    errors.forEach(e => console.error('  - ' + e));
    return false;
  } else {
    console.log('✔ 所有页面均通过 Title / Description / 唯一H1 / Canonical / Robots / Sitemap 严格审计！');
    return true;
  }
}

if (require.main === module) {
  const success = auditSeo();
  process.exit(success ? 0 : 1);
}

module.exports = auditSeo;
