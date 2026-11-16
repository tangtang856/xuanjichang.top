const fs = require('fs');
const path = require('path');

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

function checkLinks() {
  console.log('=== [QA 2/3] 自动化相对路径与死链完整性审计 ===');
  const files = getHtmlFiles(rootDir);
  const brokenLinks = [];
  const rootAbsoluteLinks = [];

  let totalLinksChecked = 0;

  for (const file of files) {
    const relFile = path.relative(rootDir, file).replace(/\\/g, '/');
    const content = fs.readFileSync(file, 'utf-8');
    const dirOfFile = path.dirname(file);

    // 匹配 a href, link href, script src, img src
    const regex = /(?:href|src)=["']([^"']+)["']/gi;
    let match;

    while ((match = regex.exec(content)) !== null) {
      let target = match[1].trim();

      // 忽略特殊链接
      if (!target || target.startsWith('#') || target.startsWith('javascript:') || target.startsWith('mailto:') || target.startsWith('tel:')) {
        continue;
      }

      // 如果是外部完整链接（以 http:// 或 https:// 开头）
      if (target.startsWith('http://') || target.startsWith('https://')) {
        // 如果是 canonical 或 schema，允许完整链接，但普通的 a 标签站内跳转应使用相对路径
        continue;
      }

      totalLinksChecked++;

      // 检查规则：严格禁止以 / 开头的根绝对路径（如 /css/style.css 或 /ranking/）
      if (target.startsWith('/')) {
        rootAbsoluteLinks.push(`[${relFile}] 违规使用以 / 开头的根绝对路径: "${target}"`);
        continue;
      }

      // 剥离 query 或 hash
      const cleanTarget = target.split('?')[0].split('#')[0];
      if (!cleanTarget) continue;

      // 计算目标物理路径
      const resolvedPath = path.resolve(dirOfFile, cleanTarget);

      // 判断目标物理文件是否存在
      if (!fs.existsSync(resolvedPath)) {
        // 如果末尾是目录，检查其下是否有 index.html
        if (cleanTarget.endsWith('/') && fs.existsSync(path.join(resolvedPath, 'index.html'))) {
          // OK
        } else {
          brokenLinks.push(`[${relFile}] 引用了不存在的相对文件: "${target}" (解析为: ${resolvedPath})`);
        }
      }
    }
  }

  console.log(`总计检查 ${totalLinksChecked} 个相对链接与资源引用。`);
  console.log(`根绝对路径违规数: ${rootAbsoluteLinks.length}, 死链数: ${brokenLinks.length}`);

  let passed = true;

  if (rootAbsoluteLinks.length > 0) {
    passed = false;
    console.error('✘ 发现以下不符合标准的以 / 开头的根绝对路径:');
    rootAbsoluteLinks.forEach(e => console.error('  - ' + e));
  }

  if (brokenLinks.length > 0) {
    passed = false;
    console.error('✘ 发现以下失效相对链接:');
    brokenLinks.forEach(e => console.error('  - ' + e));
  }

  if (passed) {
    console.log('✔ 所有站内链接与静态资源均严格采用标准相对路径，且目标文件全部真实存在（0死链）！');
  }

  return passed;
}

if (require.main === module) {
  const success = checkLinks();
  process.exit(success ? 0 : 1);
}

module.exports = checkLinks;
