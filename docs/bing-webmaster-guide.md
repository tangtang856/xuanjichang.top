# 选机场网 (xuanjichang.top) - Bing Webmaster Tools & IndexNow 实操操作指南

本指南详细记录如何将 `https://xuanjichang.top` 正式接入微软 Bing 站长平台（Bing Webmaster Tools），并激活全自动 IndexNow 极速索引通道。

---

## 一、Bing 站长平台所有权验证（需站长人工操作）

1. **登录平台：**
   访问并登录 [Bing Webmaster Tools (微软必应站长管理平台)](https://www.bing.com/webmasters/)。建议直接使用与 GitHub / Microsoft 绑定的同一微软账号登录。
2. **添加站点：**
   在左上角点击“添加网站”，输入您的正式域名：`https://xuanjichang.top`。
3. **选择验证方式：**
   推荐采用以下两种快速验证方式之一：
   - **方式 A（DNS CNAME / TXT 记录 - 推荐）：**
     在您的域名 DNS 解析商（如 Cloudflare / 腾讯云 / 阿里云）添加 Bing 提供的专属 TXT 或 CNAME 记录。验证几乎秒级通过。
   - **方式 B（HTML 验证文件）：**
     下载 Bing 提供的类似 `BingSiteAuth.xml` 文件，直接放置到本仓库根目录下，执行 `git commit` 并推送部署，在浏览器能正常通过 `https://xuanjichang.top/BingSiteAuth.xml` 访问后，点击验证。

---

## 二、Sitemap (网站地图) 提交

1. 在 Bing 站长平台左侧导航菜单中，点击 **站点地图（Sitemaps）**。
2. 在右上角点击“提交站点地图”按钮。
3. 输入完整的 XML 网站地图地址：
   - `https://xuanjichang.top/sitemap.xml`
   - `https://xuanjichang.top/sitemap-index.xml`
4. 提交后，Bing 爬虫会在数小时到数天内完成首次爬取，并在后台反馈 URL 抓取成功数量与错误状态。

---

## 三、IndexNow 自动推送与验证

IndexNow 是由微软必应和 Yandex 联合推出的实时主动推送协议，免去等待漫长爬网爬取周期的困扰。

### 1. 本地已就绪的配置
- **API Key：** `c0e86b4028d745e69e023180cf2825bc`
- **Key 验证文件：** `c0e86b4028d745e69e023180cf2825bc.txt`（已位于站点根目录，内容即为 Key）
- **验证地址：** `https://xuanjichang.top/c0e86b4028d745e69e023180cf2825bc.txt`

### 2. 日常推送命令
- **全站推送（全新上线或全量结构升级时）：**
  ```bash
  node scripts/indexnow.js --all
  ```
- **核心/最新更新页面推送（默认高频使用）：**
  ```bash
  npm run indexnow
  ```
- **单个特定文章/评测推送：**
  ```bash
  node scripts/indexnow.js --url https://xuanjichang.top/review/juziyun/
  ```

### 3. 日志记录
每次执行 IndexNow 推送，系统会自动将提交记录、HTTP 响应状态码及提交的 URL 列表记录在 `docs/indexnow-history.log` 中。

---

## 四、URL Inspection (URL 检查)

当您发布了新的独立机场评测或修改了页面内容后：
1. 打开 Bing Webmaster Tools 左侧的 **URL 检查（URL Inspection）** 工具。
2. 输入页面 URL（例如 `https://xuanjichang.top/review/shangdianmao/`）。
3. 点击“实时测试（Live URL Test）”，检查 Bingbot 是否能正常获取 HTML 代码、CSS 与结构化数据。
4. 点击“请求索引（Request Indexing）”，加速该页面进入 Bing 索引库。

---

## 五、Search Performance (搜索表现监测) 与抓取异常排查

1. **关键词监控：**
   进入 **搜索表现（Search Performance）**，监控主攻关键词（`机场推荐`、`性价比机场`、`梯子推荐` 等）的真实展现量、点击率（CTR）与平均搜索排名。
2. **抓取问题检查：**
   进入 **抓取控制（Crawl Control）** 和 **站点资源管理器（Site Explorer）**，确保没有 4xx/5xx 错误。由于本站已通过 0 死链与纯静态优化，抓取成功率将始终保持在 100%。
