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

function validateContent() {
  console.log('=== [QA 3/3] 自动化页面内容质量与变量替换验证 ===');
  const files = getHtmlFiles(rootDir);
  const errors = [];
  const warnings = [];

  const unreplacedPatterns = [
    /\{\{.*?\}\}/g,
    /undefined/g,
    /NaN/g,
    /\[object Object\]/g
  ];

  for (const file of files) {
    const relFile = path.relative(rootDir, file).replace(/\\/g, '/');
    const content = fs.readFileSync(file, 'utf-8');

    // 1. 检查页面体积与内容完整度 (排除极小空白页面)
    if (content.length < 1000) {
      errors.push(`[${relFile}] 页面内容过于单薄 (仅 ${content.length} 字节)`);
    }

    // 2. 检查未替换变量
    for (const pattern of unreplacedPatterns) {
      const match = content.match(pattern);
      if (match) {
        // 特殊放行：如果是代码块或特定合法字符串，做容错
        errors.push(`[${relFile}] 检测到疑似未替换变量或异常输出: "${match[0]}"`);
      }
    }

    // 3. 检查主要结构标签
    if (!content.includes('<!DOCTYPE html>') || !content.includes('<html') || !content.includes('</html>')) {
      errors.push(`[${relFile}] HTML 骨架标签不完整`);
    }

    if (!content.includes('<main>') || !content.includes('</main>')) {
      errors.push(`[${relFile}] 缺少 <main> 语义主体容器`);
    }
  }

  // 4. 首页关键词覆盖度检查
  const indexContent = fs.readFileSync(path.join(rootDir, 'index.html'), 'utf-8');
  const coreKeywords = ['机场推荐', '性价比机场', '梯子推荐', 'VPN节点', 'IEPL专线'];
  for (const kw of coreKeywords) {
    if (!indexContent.includes(kw)) {
      errors.push(`[index.html] 首页未自然融入核心关键词: "${kw}"`);
    }
  }

  console.log(`已完成 ${files.length} 个页面的内容与质量深度检测。`);
  console.log(`严重错误数: ${errors.length}, 警告数: ${warnings.length}`);

  if (errors.length > 0) {
    console.error('✘ 发现以下内容质量缺陷:');
    errors.forEach(e => console.error('  - ' + e));
    return false;
  } else {
    console.log('✔ 所有页面均无未替换变量，无空白单薄页面，核心关键词与语义标签全部合规！');
    return true;
  }
}

if (require.main === module) {
  const success = validateContent();
  process.exit(success ? 0 : 1);
}

module.exports = validateContent;
