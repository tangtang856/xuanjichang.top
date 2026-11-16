const fs = require('fs');
const path = require('path');
const https = require('https');

const HOST = 'xuanjichang.top';
const KEY = 'c0e86b4028d745e69e023180cf2825bc';
const KEY_FILE = `${KEY}.txt`;
const KEY_LOCATION = `https://${HOST}/${KEY_FILE}`;
const LOG_FILE = path.join(__dirname, '..', 'docs', 'indexnow-history.log');

// 1. 验证本地 Key 文件
function verifyKeyFile() {
  const keyPath = path.join(__dirname, '..', KEY_FILE);
  if (!fs.existsSync(keyPath)) {
    console.error(`[IndexNow Error] Key 文件未在根目录找到: ${KEY_FILE}`);
    return false;
  }
  const content = fs.readFileSync(keyPath, 'utf-8').trim();
  if (content !== KEY) {
    console.error(`[IndexNow Error] Key 文件内容 (${content}) 与配置的 KEY (${KEY}) 不一致！`);
    return false;
  }
  return true;
}

// 2. 发起 HTTPS POST 请求并支持重试
function postIndexNow(payload, attempt = 1, maxAttempts = 3) {
  return new Promise((resolve, reject) => {
    const postData = JSON.stringify(payload);
    const options = {
      hostname: 'api.indexnow.org',
      port: 443,
      path: '/indexnow',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Content-Length': Buffer.byteLength(postData),
        'User-Agent': 'IndexNow-Client/xuanjichang.top'
      },
      timeout: 10000
    };

    console.log(`[IndexNow] 正在向 api.indexnow.org 发送推送请求 (尝试 ${attempt}/${maxAttempts})...`);

    const req = https.request(options, (res) => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => {
        const statusCode = res.statusCode;
        console.log(`[IndexNow 响应] HTTP 状态码: ${statusCode}`);

        if (statusCode === 200 || statusCode === 202) {
          const msg = statusCode === 200 
            ? '200 OK - 成功提交至 IndexNow 节点，已排入搜索引擎索引调度队列。'
            : '202 Accepted - 请求已接收，正在核验 Key 文件归属。';
          console.log(`[IndexNow 成功] ${msg}`);
          logSubmission(payload.urlList, statusCode, msg);
          resolve({ success: true, statusCode, message: msg });
        } else if (statusCode === 429 || (statusCode >= 500 && statusCode < 600)) {
          if (attempt < maxAttempts) {
            const delay = attempt * 2000;
            console.warn(`[IndexNow 重试] 遭遇状态码 ${statusCode}，等待 ${delay}ms 后进行第 ${attempt + 1} 次重试...`);
            setTimeout(() => {
              postIndexNow(payload, attempt + 1, maxAttempts).then(resolve).catch(reject);
            }, delay);
          } else {
            const err = `超过最大重试次数，最终失败 HTTP ${statusCode}: ${body}`;
            logSubmission(payload.urlList, statusCode, err);
            reject(new Error(err));
          }
        } else {
          let errDetail = `HTTP ${statusCode}: ${body}`;
          if (statusCode === 400) errDetail += ' (请求格式无效)';
          if (statusCode === 403) errDetail += ' (Key无效或Key文件未在根目录发布)';
          if (statusCode === 422) errDetail += ' (提交的URL不属于当前Host)';
          console.error(`[IndexNow 错误] ${errDetail}`);
          logSubmission(payload.urlList, statusCode, errDetail);
          reject(new Error(errDetail));
        }
      });
    });

    req.on('timeout', () => {
      req.destroy();
      if (attempt < maxAttempts) {
        console.warn(`[IndexNow 超时] 连接超时，正在重试...`);
        setTimeout(() => {
          postIndexNow(payload, attempt + 1, maxAttempts).then(resolve).catch(reject);
        }, 2000);
      } else {
        reject(new Error('请求 IndexNow API 连接超时'));
      }
    });

    req.on('error', (e) => {
      if (attempt < maxAttempts) {
        console.warn(`[IndexNow 网络错误] ${e.message}，重试中...`);
        setTimeout(() => {
          postIndexNow(payload, attempt + 1, maxAttempts).then(resolve).catch(reject);
        }, 2000);
      } else {
        reject(e);
      }
    });

    req.write(postData);
    req.end();
  });
}

function logSubmission(urlList, statusCode, message) {
  const timestamp = new Date().toISOString();
  const entry = `[${timestamp}] Code: ${statusCode} | URLs: ${urlList.length} | Detail: ${message}\n` +
    urlList.map(u => `  - ${u}`).join('\n') + '\n\n';
  fs.mkdirSync(path.dirname(LOG_FILE), { recursive: true });
  fs.appendFileSync(LOG_FILE, entry, 'utf-8');
}

// 3. 执行入口
async function main() {
  console.log('=== IndexNow 搜索引擎主动推送模块 ===');

  if (!verifyKeyFile()) {
    process.exit(1);
  }

  // 获取命令行参数
  const args = process.argv.slice(2);
  let targetUrls = [];

  if (args.includes('--all')) {
    // 读取 sitemap.xml 提取所有 URL
    const sitemapPath = path.join(__dirname, '..', 'sitemap.xml');
    if (!fs.existsSync(sitemapPath)) {
      console.error('[IndexNow Error] sitemap.xml 不存在，请先运行 npm run sitemap');
      process.exit(1);
    }
    const sitemapContent = fs.readFileSync(sitemapPath, 'utf-8');
    const matches = sitemapContent.match(/<loc>(.*?)<\/loc>/g);
    if (matches) {
      targetUrls = matches.map(m => m.replace(/<\/?loc>/g, ''));
    }
    console.log(`[IndexNow] 从 sitemap.xml 中读取到 ${targetUrls.length} 个全部站点页面。`);
  } else if (args.includes('--url')) {
    const urlIndex = args.indexOf('--url') + 1;
    if (urlIndex < args.length) {
      targetUrls = [args[urlIndex]];
    } else {
      console.error('[IndexNow Error] 未提供 --url 参数的目标地址');
      process.exit(1);
    }
  } else {
    // 默认行为：增量/最新更新页面（首页、排行榜、核心对比）
    targetUrls = [
      `https://${HOST}/`,
      `https://${HOST}/ranking/overall/`,
      `https://${HOST}/ranking/value/`,
      `https://${HOST}/ranking/stable/`,
      `https://${HOST}/compare/`
    ];
    console.log(`[IndexNow] 未指定参数，默认执行核心更新页面批量推送 (${targetUrls.length} 个重点URL)。`);
    console.log('提示：指定全部页面推送请使用: node scripts/indexnow.js --all');
    console.log('提示：指定单页面推送请使用: node scripts/indexnow.js --url https://xuanjichang.top/review/juziyun/');
  }

  const payload = {
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList: targetUrls
  };

  try {
    const result = await postIndexNow(payload);
    console.log('----------------------------------------------------');
    console.log('✔ IndexNow 调度完成！');
    console.log('【重要提示】IndexNow 成功仅代表 Bing/IndexNow 调度器已接收该批 URL。');
    console.log('不代表搜索引擎已瞬时入库或排名。实际收录进度请在 Bing Webmaster Tools 后台观察。');
    console.log('----------------------------------------------------');
  } catch (err) {
    console.error('✘ IndexNow 提交异常:', err.message);
    process.exit(1);
  }
}

main();
