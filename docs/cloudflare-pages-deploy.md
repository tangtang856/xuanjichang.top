# 选机场网 (xuanjichang.top) - Cloudflare Pages 极速部署指南

本项目采用纯原生 HTML + 原生 CSS 构建，0 重型依赖，秒开无阻，完美支持 Cloudflare Pages 的免费全球 CDN 节点边缘部署。

---

## 一、方案 A：关联 GitHub 仓库自动部署（推荐首选）

通过将 GitHub 仓库与 Cloudflare Pages 绑定，未来您只要执行 `git push`，Cloudflare 会在全球边缘自动拉取并发布最新页面。

### 步骤说明：

1. **登录 Cloudflare 控制台：**
   访问 [Cloudflare Dashboard](https://dash.cloudflare.com/)，在左侧导航进入 **Workers & Pages** -> 点击 **Create application** -> 选择 **Pages** -> 点击 **Connect to Git**。
2. **连接 GitHub：**
   授权 Cloudflare 访问您的 GitHub 账号，并选择远程仓库：`tangtang856/xuanjichang.top`。
3. **配置构建设置（Build Settings）：**
   - **Project Name（项目名称）：** `xuanjichang`（或保持默认）
   - **Production branch（生产分支）：** `main`
   - **Framework preset（框架预设）：** 选择 **None**（纯静态项目）
   - **Build command（构建命令）：** `npm run build`
   - **Build output directory（构建输出目录）：** `.` （或者留空，即根目录）
   - **Node.js 版本环境变量（可选）：** 如有需要可在 Environment Variables 中添加 `NODE_VERSION` = `20`。
4. **点击 Save and Deploy（保存并部署）：**
   Cloudflare 会在 30 秒内拉取仓库、自动运行编译与全站 Sitemap 生成，并为您分配一个免费临时域名（如 `xuanjichang.pages.dev`）。

---

## 二、方案 B：绑定自定义正式域名 (xuanjichang.top)

1. 在刚刚创建的 Pages 项目主页，点击 **Custom domains（自定义域）** 标签页。
2. 点击 **Set up a custom domain** 按钮。
3. 输入您的正式主域名：`xuanjichang.top`。
4. 按照提示配置 DNS 解析记录：
   - 如果您的域名已经在 Cloudflare 进行 DNS 解析，系统会自动添加 CNAME 记录并秒级下发全自动 SSL 证书。
   - 如果您的域名在其他平台（如阿里云/腾讯云），请添加一条 CNAME 记录指向 `xuanjichang.pages.dev`。
5. 开启 **Always Use HTTPS**（始终使用安全 HTTPS 加密连接）。

---

## 三、方案 C：本地 CLI 直接部署（Wrangler）

如果您不想走 Git 绑定，也可以直接在本地通过 Cloudflare 官方 CLI 工具发布：

```bash
# 全局安装或运行 wrangler
npx wrangler pages deploy . --project-name=xuanjichang
```
几秒钟即可完成全球 CDN 发布！
