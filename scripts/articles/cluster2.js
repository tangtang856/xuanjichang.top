// scripts/articles/cluster2.js
// 选机场网 (xuanjichang.top) - Cluster 2: 专线网络技术与协议原理 (16-30篇)
module.exports = [
  {
    slug: 'iplc-vs-iepl-explained',
    title: 'IPLC与IEPL专线有什么区别？跨境内网物理专线技术深度科普',
    h1: 'IPLC与IEPL专线有什么区别？跨境内网物理专线技术深度解析',
    tag: '专线技术',
    cluster: '专线网络与协议原理',
    desc: '为什么专线机场从不被墙、晚高峰零丢包？深度剖析国际私有租用线路IPLC与以太网私网专线IEPL的技术底层架构与成本差异。',
    content: `
      <h2>什么是真正的物理内网专线？</h2>
      <p>在高端机场的套餐介绍中，我们最常听到的词汇就是 <strong>IPLC（International Private Leased Circuit，国际私有租用线路）</strong> 和 <strong>IEPL（International Ethernet Private Line，国际以太网私网专线）</strong>。很多人只知道专线“贵且稳”，但并不清楚它在底层物理通信层面到底牛在哪里。</p>
      <p>普通翻墙方式（无论是自建 VPS 还是普通公网中转）都必须经过国家的<strong>公网国际出口路由器</strong>，在此处必须接受 GFW 深度包检测（DPI）防火墙的严密审查。而物理专线是跨国电信运营商（如中国电信国际、中国移动国际 CMI、HKT）在海底或陆地光缆中<strong>直接开辟的点对点物理隔离传输通道</strong>。数据在深圳/广州入口机房直接打入内网光纤，在香港机房直接出来，<strong>物理上完全不经过公网防火墙</strong>！</p>

      <h2>IPLC 与 IEPL 的技术细节对比</h2>
      <table style="width: 100%; border-collapse: collapse; margin: 1.5rem 0;">
        <thead>
          <tr style="background: var(--bg-card); text-align: left;">
            <th style="padding: 10px; border: 1px solid var(--border-light);">对比维度</th>
            <th style="padding: 10px; border: 1px solid var(--border-light);">IPLC 国际私有专线</th>
            <th style="padding: 10px; border: 1px solid var(--border-light);">IEPL 国际以太网专线</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding: 10px; border: 1px solid var(--border-light); font-weight: bold;">OSI 网络层级</td>
            <td style="padding: 10px; border: 1px solid var(--border-light);">物理层 / 传输层（TDM 机制）</td>
            <td style="padding: 10px; border: 1px solid var(--border-light);">数据链路层（Layer 2 以太网）</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid var(--border-light); font-weight: bold;">是否过 GFW 防火墙</td>
            <td style="padding: 10px; border: 1px solid var(--border-light);">完全不过，物理绕过</td>
            <td style="padding: 10px; border: 1px solid var(--border-light);">完全不过，物理绕过</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid var(--border-light); font-weight: bold;">抖动与延迟表现</td>
            <td style="padding: 10px; border: 1px solid var(--border-light);">极低（硬管道），几乎零抖动</td>
            <td style="padding: 10px; border: 1px solid var(--border-light);">极低，支持动态带宽调整</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid var(--border-light); font-weight: bold;">主流商业代表</td>
            <td style="padding: 10px; border: 1px solid var(--border-light);"><a href="__ROOT__review/flashleap/index.html">闪跃 FlashLeap</a>、<a href="__ROOT__review/lingmao/index.html">灵猫</a></td>
            <td style="padding: 10px; border: 1px solid var(--border-light);"><a href="__ROOT__review/breezenet/index.html">微风网络</a>、<a href="__ROOT__review/yinxingren/index.html">隐形人</a></td>
          </tr>
        </tbody>
      </table>

      <h2>为什么专线在敏感期也能安然无恙？</h2>
      <p>在重大网络管制期间，公网中转机场常常会因为入口公网 IP 被批量阻断而导致大面积瘫痪。而专线机场的入口虽然可能也是机房 IP，但只要运营商内网不断，专线两端的物理通信管道就始终通畅。对于需要全天候稳定连通的涉外金融、外贸和研发团队，IEPL 专线是不可替代的基础设施。</p>
    `
  },
  {
    slug: 'bgp-tunnel-transit-mechanism',
    title: 'BGP多线机房与公网隧道中转机理解密：什么是中转机场',
    h1: 'BGP多线机房与公网加密隧道中转机理解密：什么是中转机场？',
    tag: '网络架构',
    cluster: '专线网络与协议原理',
    desc: '比起昂贵的物理专线，BGP中转机场如何做到平民价格与出众速度兼顾？深度解析国内前置中转机房、跨国加密隧道与落地负载均衡。',
    content: `
      <h2>引言：性价比之王背后的架构秘密</h2>
      <p>市面上绝大多数价格亲民、月付在十几元到二十多元的高品质机场（如 <a href="__ROOT__review/muguang/index.html">暮光网络</a>、<a href="__ROOT__review/feimaoyun/index.html">飞猫云</a>、<a href="__ROOT__review/quanqiuyun/index.html">全球云</a>），采用的核心技术架构并非昂贵的物理专线，而是 <strong>BGP 多线机房入口 + 公网加密隧道中转（Tunnel Transit）</strong>。</p>

      <h2>BGP 隧道中转的三段式工作模型</h2>
      <ol>
        <li><strong>第一段：客户端到国内前置入口（BGP 机房）：</strong>用户在本地（无论是电信、联通、移动还是广电宽带）发起连接，DNS 会将你的请求解析到国内优秀的 BGP 骨干多线机房。无论你在全国哪个省份，都能实现低延迟、零丢包的国内直连接入。</li>
        <li><strong>第二段：国内入口到海外落地机房（加密中继隧道）：</strong>国内服务器接收到你的流量后，通过专门的加密隧道协议（例如 TLS 隧道、WireGuard 隧道或专属隧道软件）将数据打包，经由公网骨干出口路由高速传输到香港、日本或新加坡的海外机房。</li>
        <li><strong>第三段：海外落地机房访问目标网站：</strong>海外落地服务器解密数据包，以原生地机房 IP 向 Google、YouTube、OpenAI 发起最终请求并将内容原路返回。</li>
      </ol>

      <h2>BGP 中转机场的优势与局限</h2>
      <div class="callout callout-info">
        <strong>核心优势：</strong>带宽采购成本仅为物理专线的五分之一，因此机场能够给用户提供超大流量（如 200GB-500GB）且维持极亲民的价格。<br>
        <strong>潜在局限：</strong>由于中转隧道走的是跨国公网骨干网，在遭遇骨干网国际出口拥堵（如晚高峰大堵车）或 GFW 针对中转入口端口的大规模干扰时，偶有短暂延迟波动。
      </div>
    `
  },
  {
    slug: 'shadowsocks-protocol-evolution',
    title: 'Shadowsocks协议演进史：从最初的SS到AEAD加密与现代替代品',
    h1: 'Shadowsocks协议演进史：从最初的SS、AEAD加密到现代协议演变',
    tag: '协议演进',
    cluster: '专线网络与协议原理',
    desc: '回顾科学上网历史上最伟大的开源协议Shadowsocks。从由clowwindy创造的经典Socks5混淆代理，到AEAD密码学认证，以及为何今天专线依然偏爱SS。',
    content: `
      <h2>致敬传奇：clowwindy 与 Shadowsocks 的诞生</h2>
      <p>2012 年，开源开发者 clowwindy 在 GitHub 上发布了一个名为 <strong>Shadowsocks（影梭，简称 SS）</strong> 的轻量级开源项目。它摒弃了传统 VPN 笨重复杂的系统级网卡接管思路，创新性地将本地 Socks5 代理与高强度对称加密结合，开启了中文互联网翻墙技术的崭新纪元。</p>

      <h2>第一阶段：流加密时代及其致命漏洞</h2>
      <p>最初的 Shadowsocks 采用的是简单的流加密算法（如 RC4-MD5、AES-CFB）。在那个时代，只要能把数据内容加密成看似随机的乱码，防火墙就无法得知传输的具体内容。然而，随着深度包检测（DPI）技术的进化，安全研究人员发现：<strong>流加密虽然保护了内容的机密性，但没有校验数据的完整性（Integrity）</strong>。防火墙可以通过主动向服务器发送畸形探针，根据服务器的解密反馈特征，准确判断出目标 IP 是否运行了 SS 服务并进行无情封锁。</p>

      <h2>第二阶段：AEAD 加密标准的引入（SIP004）</h2>
      <p>为了解决主动探测，Shadowsocks 社区于 2017 年引入了 <strong>AEAD（Authenticated Encryption with Associated Data）现代密码学框架</strong>，主推 <code>aes-128-gcm</code>、<code>aes-256-gcm</code> 和 <code>chacha20-ietf-poly1305</code>。AEAD 确保了每一个数据包都携带不可伪造的数字签名，任何外界篡改或重放攻击都会被服务器静默丢弃，彻底粉碎了初级的主动探测算法。</p>

      <h2>为什么今天的专线机场依然首选 Shadowsocks 协议？</h2>
      <p>在公网环境下，单纯的 SS 协议特征依然可能被高级机器学习 DPI 识别。但是在 <strong>IEPL / IPLC 物理专线</strong> 中，由于数据完全不经过公网防火墙，无需进行繁重且消耗算力的 TLS 伪装。Shadowsocks 凭其<strong>超轻量级、CPU 资源消耗极低、网络吞吐效率极高</strong>的优势，至今依然是高端内网专线（如 <a href="__ROOT__review/breezenet/index.html">微风网络</a>、<a href="__ROOT__review/yinxingren/index.html">隐形人</a>）的首选协议。</p>
    `
  },
  {
    slug: 'trojan-protocol-deep-dive',
    title: 'Trojan协议工作原理与防检测机制：为什么能完美伪装HTTPS流量',
    h1: 'Trojan协议工作原理与防检测机制：为什么能完美伪装HTTPS流量？',
    tag: '协议技术',
    cluster: '专线网络与协议原理',
    desc: '模仿是最好的伪装。深度解析Trojan协议如何通过标准TLS 1.3握手与伪装网站（Camouflage Site），让审查系统将其判定为普通Web访问。',
    content: `
      <h2>“特洛伊木马”的设计哲学：藏木于林</h2>
      <p>在与网络审查系统长达数年的对抗中，技术先驱们得出了一个深刻的结论：<strong>任何试图通过私有自定义算法隐藏流量特征的协议，其特征本身就是最显眼的靶子</strong>。与其自创加密协议，不如直接使用全球互联网上最普遍、绝不可封锁的协议——<strong>HTTPS（TLS 1.3）</strong>。</p>
      <p>这便是 <strong>Trojan（特洛伊木马）协议</strong> 的立足根基：它不创造任何新的加密规则，而是完全模仿一台正规 HTTPS 网站服务器的真实行为。</p>

      <h2>Trojan 的工作流程与伪装验证机理</h2>
      <ol>
        <li><strong>真正的有效证书与标准端口：</strong>Trojan 节点必须绑定一个合法申请的国际顶级域名，并配置由权威 CA 机构（如 Let's Encrypt）签发的真实 SSL/TLS 证书，且监听标准的 443 端口。</li>
        <li><strong>首包认证机制：</strong>当客户端发起连接时，首先完成标准的 TLS 握手。握手成功后，客户端发送由密码经过 SHA224 哈希计算后的校验字符串。</li>
        <li><strong>请求分流（核心防探测机制）：</strong>
          <ul>
            <li>如果密码校验<strong>通过</strong>：服务器解除伪装，进入代理转发通道，高速传输目标数据；</li>
            <li>如果连接是由审查防火墙的主动探测探针发起（或者普通网民在浏览器中直接输入域名），由于密码校验<strong>失败</strong>，服务器不会断开连接，而是直接<strong>将请求透明转发至一个真实的静态 HTML 网站（伪装站）</strong>！在外界探针看来，这就是一个普通的英文个人博客或工具网站，无懈可击。</li>
          </ul>
        </li>
      </ol>

      <h2>适用场景：公网中转与对穿的定海神针</h2>
      <p>对于采用公网隧道中转或公网直连的机场，Trojan 协议提供了坚如磐石的防封锁能力，是目前主流商业机场普遍支持的核心协议之一。</p>
    `
  },
  {
    slug: 'vless-xtls-reality-explained',
    title: 'VLESS与XTLS Reality黑科技解析：零证书伪装原理与优势',
    h1: 'VLESS与XTLS Reality黑科技解析：借壳伪装与零证书维护革命',
    tag: '协议黑科技',
    cluster: '专线网络与协议原理',
    desc: '摆脱域名与证书繁琐维护！深度科普Xray团队研发的VLESS XTLS Reality技术：如何借用大型跨国科技公司的合法证书实现完美隐匿。',
    content: `
      <h2>传统 TLS 伪装的阿喀琉斯之踵</h2>
      <p>虽然 Trojan 和 VMess+TLS 伪装能力极强，但它们有一个让节点运维非常头疼的软肋：<strong>必须购买独立域名并定期申请/续签 TLS 证书</strong>。如果一个机场拥有几十个节点，一旦域名被特定污染或证书续签失败，节点就会瞬间瘫痪。此外，小网站的自签证书在握手时仍可能在证书链细节上被 DPI 分析出异常。</p>

      <h2>XTLS Reality 的颠覆性创新：借鸡生蛋</h2>
      <p>由 Xray-core 团队原创发明的 <strong>XTLS Reality（真实伪装）</strong> 技术，彻底终结了这一痛点。其核心思想被称为“借壳伪装”：</p>
      <ul>
        <li><strong>借用全球顶级巨头的真实证书：</strong>服务端不需要自己拥有域名，也不需要申请证书，而是将自己伪装成苹果（Apple.com）、微软（Microsoft.com）、亚马逊（AWS）或 Cloudflare 的官方 CDN 节点！</li>
        <li><strong>中间人拦截与密钥交换：</strong>当正常客户端发起连接时，Reality 客户端与服务端通过特殊的私有密钥协商机制识别彼此。审查防火墙在握手阶段截获的数据，完全是苹果或微软服务器真实无误的公钥与数字证书，在密码学层面挑不出任何瑕疵。</li>
      </ul>

      <h2>VLESS 架构的极致轻量化</h2>
      <p>传统的 VMess 协议包含繁重的双重加密与时间戳校验，对服务器和手机 CPU 算力开销较大。而 <strong>VLESS（VMess Less）</strong> 作为无状态轻量级协议，去掉了所有冗余封装，与 Reality 配合时不仅延迟极低、吞吐量巨大，而且具备无可比拟的抗审查韧性。</p>
    `
  },
  {
    slug: 'hysteria-2-udp-acceleration',
    title: 'Hysteria 2协议速度爆发力解析：UDP拥塞控制与弱网对抗能力',
    h1: 'Hysteria 2协议速度爆发力解析：UDP拥塞控制与弱网对抗全面拆解',
    tag: '协议黑科技',
    cluster: '专线网络与协议原理',
    desc: '在网络极度丢包卡顿的弱网环境下，为什么Hysteria 2能瞬间跑满带宽？深入拆解基于标准QUIC协议魔改的BBR拥塞控制算法。',
    content: `
      <h2>TCP 协议在恶劣网络环境下的“先天缺陷”</h2>
      <p>绝大多数传统代理协议（如 Shadowsocks、Trojan、VLESS）底层都依赖于 <strong>TCP 协议</strong>。TCP 是一个讲究“可靠性”的传输协议：只要网络发生 1% 的丢包，TCP 的内置拥塞控制机制（如 Cubic 或 Reno）就会判定网络已严重堵塞，进而<strong>强制将发送速率腰斩甚至缩减至四分之一</strong>。这就是为什么当跨国骨干网晚高峰轻微丢包时，很多人的连接速度会呈现雪崩式暴跌。</p>

      <h2>Hysteria 2 的核心突破：基于 UDP 的野蛮吞吐</h2>
      <p><strong>Hysteria 2（歇斯底里）</strong> 是专为恶劣公网环境而生的下一代代理协议。它基于全球主流的 <strong>QUIC（HTTP/3）协议架构</strong> 进行深度魔改，底层完全使用 UDP 通信：</p>
      <ol>
        <li><strong>自定义的野心拥塞控制算法：</strong>Hysteria 抛弃了传统 TCP 遇丢包就减速的软弱策略，即便网络丢包率高达 10% 甚至 20%，它依然能够通过智能主动重传机制，强行将你的物理可用下行带宽拉满！</li>
        <li><strong>端口跳跃（Port Hopping）黑科技：</strong>某些地区的本地运营商会对特定单端口的大流量 UDP 进行 QoS 限速惩罚。Hysteria 2 支持多端口动态跳跃，客户端与服务端在毫秒级自动切换通信端口，神不知鬼不觉地绕过运营商的限速策略。</li>
        <li><strong>原生伪装成标准 HTTP/3：</strong>由于全球主流网站（如 Google、YouTube）早已全量铺开 HTTP/3，Hysteria 2 的流量在防火墙看来就是完全合法的标准 Web 流量。</li>
      </ol>

      <h2>使用建议：劣质直连的救星，但需防运营商 QoS</h2>
      <p>Hysteria 2 是在没有专线预算前提下跑满恶劣公网带宽的神器。不过在部分对 UDP 审查极其激进的省份运营商宽带下，使用专线协议（如 <a href="__ROOT__review/breezenet/index.html">微风网络</a>）仍比纯 UDP 更为平稳。</p>
    `
  },
  {
    slug: 'clash-rules-routing-guide',
    title: '深入理解Clash规则分流：GEOIP、域名匹配与自定义策略组',
    h1: '深入理解Clash规则分流：GEOIP、域名匹配与自定义策略组实战',
    tag: '分流实战',
    cluster: '专线网络与协议原理',
    desc: '告别无脑全局翻墙！深入掌握Clash与Meta内核的分流匹配优先级（DOMAIN-SUFFIX、IP-CIDR、GEOIP），教您打造精细化智能网络路由。',
    content: `
      <h2>为什么“规则智能分流”是现代科学上网的灵魂？</h2>
      <p>很多小白翻墙时只会开“全局（Global）”，结果不仅导致国内应用慢如蜗牛、甚至触发微信和手机银行的安全风控，还白白把宝贵的机场流量浪费在腾讯视频和爱奇艺上。<strong>规则分流（Rule-based Routing）</strong> 能够智能识别网络流量的去向，实现“国内直连秒开，国外受限走代理，特定服务走特定节点”的自动化调度。</p>

      <h2>Clash 规则匹配的三大核心类型</h2>
      
      <h3>1. 域名级规则（Domain Rules）</h3>
      <ul>
        <li><code>DOMAIN,google.com,PROXY</code>：精确匹配域名 <code>google.com</code>；</li>
        <li><code>DOMAIN-SUFFIX,youtube.com,PROXY</code>：后缀匹配，包含 <code>www.youtube.com</code>、<code>m.youtube.com</code> 等所有二级域名；</li>
        <li><code>DOMAIN-KEYWORD,openai,ChatGPT</code>：关键字匹配，只要域名中包含“openai”字符串，一律派发给专门的 ChatGPT 节点组。</li>
      </ul>

      <h3>2. IP 与地理位置规则（IP-CIDR & GEOIP）</h3>
      <ul>
        <li><code>GEOIP,CN,DIRECT</code>：借助内置的离线 IP 地理数据库，只要目标服务器位于中国大陆境内，全部自动走本地宽带直连，不耗费 1KB 机场流量；</li>
        <li><code>IP-CIDR,192.168.0.0/16,DIRECT</code>：本地局域网内网 IP 直连。</li>
      </ul>

      <h3>3. 终极兜底规则（MATCH）</h3>
      <p><code>MATCH,PROXY</code>：如果前面成千上万条规则都没有匹配命中，默认归类走主代理通道，防止未知海外冷门站点漏网。</p>

      <h2>规则匹配的“自上而下”短路原则</h2>
      <p>Clash 的规则执行遵循<strong>从第一条开始向下扫描，一旦命中立即执行并停止后续匹配（First Match Wins）</strong>。因此，精细规则（如特定 AI 域名）必须放在最上面，而宽泛的 <code>GEOIP,CN</code> 必须放在中后段，最后的 <code>MATCH</code> 永远置于底部。</p>
    `
  },
  {
    slug: 'tun-mode-vs-system-proxy',
    title: 'TUN虚拟网卡模式与系统代理差异：何时必须开启TUN模式',
    h1: 'TUN虚拟网卡模式与系统代理差异：何时必须开启TUN模式？',
    tag: '网络技术',
    cluster: '专线网络与协议原理',
    desc: '为什么命令行终端、海外游戏或网易云音乐不走代理？全面拆解操作系统的系统代理（System Proxy）与TUN虚拟网卡接管的底层差异。',
    content: `
      <h2>日常最令人抓狂的痛点：有些软件就是不走代理</h2>
      <p>很多用户经常纳闷：明明 Clash Verge 或 v2rayN 已经打开了系统代理，网页也能顺畅打开 YouTube，但为什么出现以下情况？</p>
      <ul>
        <li>在 Windows CMD 终端或 PowerShell 运行 <code>git clone</code>、<code>npm install</code> 依然连接超时；</li>
        <li>玩海外 Steam / EA 游戏依然显示网络连接中断；</li>
        <li>Telegram 客户端依然显示正在转圈连接中；</li>
        <li>某些涉外专业办公桌面客户端完全无视代理设置。</li>
      </ul>

      <h2>系统代理（System Proxy）的局限性</h2>
      <p>所谓的“系统代理”，本质上只是在操作系统网络设置中写入了一个环境变量（例如 <code>HTTP_PROXY=127.0.0.1:7890</code>）。这种机制是<strong>“君子协议”</strong>：它依赖应用程序自身主动去读取操作系统的代理配置（如 Chrome、Edge、Firefox 浏览器会自觉读取）。如果某个应用程序压根没有编写读取系统代理的代码（如终端命令、游戏客户端、部分原生应用），它的数据包依然会硬生生直连公网，从而触发网络阻断。</p>

      <h2>TUN 模式的降维打击：物理层虚拟网卡接管</h2>
      <p><strong>TUN（Network Tunnel）模式</strong> 是在操作系统内核层创建一张虚拟网卡。一旦开启 TUN 模式，Clash 会在操作系统的底层路由表（Routing Table）中将自己的虚拟网卡设为最高优先级的全局网关（Default Gateway）：</p>
      <div class="callout callout-info">
        <strong>TUN 模式的核心威力：</strong><br>
        1. <strong>全协议无死角劫持：</strong>不管是 TCP、UDP 还是 ICMP（Ping 数据包），任何应用程序发出的任何一个数据包，都必须无条件进入 TUN 虚拟网卡；<br>
        2. <strong>原生透明转发：</strong>彻底解决终端命令行、各种开发者工具以及大型 3A 联机游戏的网络加速问题，实现真正的“全系统无感透明代理”。
      </div>
    `
  },
  {
    slug: 'dns-leak-prevention-guide',
    title: '科学上网中的DNS泄漏与污染防治：Fake-IP与DoH实战配置',
    h1: '科学上网中的DNS泄漏与污染防治：Fake-IP与DoH安全实战配置',
    tag: '网络安全',
    cluster: '专线网络与协议原理',
    desc: '你的翻墙痕迹可能正在通过DNS查询泄露给本地运营商！全面解析DNS抢答污染机制，深入掌握Clash Fake-IP与安全加密DNS配置法则。',
    content: `
      <h2>什么是极其危险的“DNS 泄漏（DNS Leak）”？</h2>
      <p>许多人以为只要数据经过了加密代理就万事大吉。然而，当你在浏览器输入 <code>www.google.com</code> 时，第一步必须是将域名解析为 IP 地址。如果你的客户端配置不当，这个域名查询请求并没有通过加密隧道送往海外节点，而是直接发给了你本地宽带默认的电信/联通 DNS 服务器（如 <code>114.114.114.114</code>）。</p>
      <p>后果是灾难性的：</p>
      <ul>
        <li><strong>行踪完全暴露：</strong>本地运营商可以精准记录下你在几点几分试图访问了哪些海外受限网站，隐私荡然无存；</li>
        <li><strong>DNS 抢答投毒污染：</strong>公网防火墙会在合法 DNS 回复之前抢先伪造一个错误的 IP 地址返回给你的电脑，导致连接瞬间被导向死胡同。</li>
      </ul>

      <h2>终极武器一：Fake-IP 模式的工作原理</h2>
      <p>现代 Clash 内核中最推荐的 DNS 增强模式是 <strong>Fake-IP</strong>。其工作原理极其巧妙：</p>
      <p>当你的浏览器发起 DNS 查询时，Clash 在本地<strong>根本不向公网发请求，而是立即伪造一个保留地址段（如 <code>198.18.0.1</code>）并在 0 毫秒内秒回给浏览器</strong>！浏览器拿到假 IP 后立即向该地址发送 HTTP/TCP 请求。Clash 本地代理核心截获这个数据包，把假 IP 还原为原本的域名并打包通过海外加密专线发往目标落地机房。<strong>从源头上彻底规避了本地 DNS 解析过程！</strong></p>

      <h2>终极武器二：加密 DNS（DoH / DoT）的辅助加固</h2>
      <p>对于无法走 Fake-IP 的流量，务必在客户端配置 <strong>DoH（DNS over HTTPS）</strong>，例如使用阿里加密 DNS（<code>https://dns.alidns.com/dns-query</code>）处理国内直连域名解析，使用 Cloudflare 加密 DNS 处理海外解析，实现绝对的防窃听与防篡改。</p>
    `
  },
  {
    slug: 'gfw-blocking-mechanisms',
    title: 'GFW国家防火墙检测机制演进：深度包检测DPI与主动探测原理',
    h1: 'GFW国家防火墙检测机制演进：深度包检测DPI与主动探测机理解析',
    tag: '安全技术',
    cluster: '专线网络与协议原理',
    desc: '知己知彼，百战不殆。系统梳理跨境网络防火墙的三大核心审查机制：IP/端口黑名单、DPI模式识别与主动重放探测技术的对抗史。',
    content: `
      <h2>前言：翻墙技术的本质是一场持续十数年的猫鼠博弈</h2>
      <p>理解网络审查机制的演进历程，能帮助我们透彻明白为什么某些便宜的翻墙工具会频繁阵亡，而像 <a href="__ROOT__review/breezenet/index.html">微风网络</a>、<a href="__ROOT__review/flashleap/index.html">闪跃 FlashLeap</a> 这样的专线机场却能稳如磐石。</p>

      <h2>第一代：静态黑名单与 TCP Reset 阻断</h2>
      <p>在互联网早期，审查机制相对简单：通过在骨干路由器上配置静态路由黑名单，将已被标记的海外敏感网站 IP 丢入黑洞（Null0），或者利用旁路监听设备，一旦检测到明文 HTTP 请求中包含敏感关键词，立即向通信双方双向伪造发送 TCP RST 报文强行切断连接。</p>

      <h2>第二代：深度包检测（DPI，Deep Packet Inspection）</h2>
      <p>随着加密通信的发展，防火墙引入了世界顶级的专用硬件 ASIC 芯片，具备在每秒数十 Terabits 流量中进行实时逐包拆解分析的能力：</p>
      <ul>
        <li><strong>熵值分析（Entropy Analysis）：</strong>完全随机无序的高熵值加密数据流，在自然流量中极不寻常，容易被直接加权标记；</li>
        <li><strong>TLS 握手特征识别：</strong>早期翻墙软件在 TLS 握手时的 Cipher Suites 组合、Client Hello 扩展字段排列与正常浏览器（Chrome/Safari）存在细微差别，DPI 能够通过指纹库瞬间提取特征。</li>
      </ul>

      <h2>第三代：主动探测（Active Probing）与重放攻击</h2>
      <p>如果 DPI 怀疑某个境内 IP 正在向境外某个可疑端口持续发送高熵数据，GFW 的中央系统会在几秒钟内调度数以万计的探测探针，伪装成普通客户端向目标境外服务器的该端口发送各种特制数据包或重放刚才截获的历史数据包。如果目标服务器的响应行为符合 Shadowsocks 或旧版代理协议的特征，该境外 IP 的端口会在几分钟内被精准封锁。</p>
      <p>现代协议如 Trojan（通过伪装站完美回答探针）以及 IEPL 物理专线（完全避开公网监控），正是为了彻底粉碎这种高级探测而生。</p>
    `
  },
  {
    slug: 'airport-node-packet-loss-causes',
    title: '节点晚高峰丢包与断流的根本原因：运营商QoS与骨干网拥塞',
    h1: '节点晚高峰丢包与断流的根本原因：运营商QoS限速与骨干网拥塞解密',
    tag: '网络诊断',
    cluster: '专线网络与协议原理',
    desc: '为什么白天测速几百兆，晚上八九点看视频就卡顿断流？深入揭示国际出海骨干网QoS等级、163骨干网与CN2专线的阶级差距。',
    content: `
      <h2>现象剖析：令人抓狂的“晚高峰魔咒”</h2>
      <p>很多新手都会遇到过这种怪事：下午或者半夜测速，节点延迟又低、跑分几百兆，感觉买到了神仙机场。可一到晚上 20:00 至 23:00 这个黄金时间段，打开 YouTube 连 720P 都开始转圈，甚至游戏频繁断开重连。这种现象背后的物理本质究竟是什么？</p>

      <h2>原因一：中国公网国际出口带宽的天然天花板</h2>
      <p>中国拥有数以亿计的网民，但三大运营商通往海外的跨国光缆总带宽资源是极其有限的。在晚高峰时段，海外商业流量、个人娱乐流量、海淘电商以及出海企业协同流量呈井喷式爆发。此时，公网骨干路由器会瞬间发生<strong>严重的排队拥塞（Bufferbloat）</strong>，丢包率急剧飙升至 30% 以上。</p>

      <h2>原因二：运营商极其残酷的 QoS 流量优先级排序</h2>
      <p>中国电信、联通和移动在骨干网层面实施着极为严格的 <strong>QoS（Quality of Service，服务质量）分级制度</strong>：</p>
      <ol>
        <li><strong>第一梯队（顶级政企专线与 CN2 GIA / 联通 9929 / CMIN2）：</strong>享有最高优先通行权，即便晚高峰骨干网拥塞，也会优先保证这类高溢价流量零丢包通过；</li>
        <li><strong>第二梯队（普通商业中转）：</strong>具备一定优先权，表现平稳；</li>
        <li><strong>第三梯队（普通 163 民用骨干网）：</strong>最低优先级的平民通道。一旦发生拥塞，骨干路由器会直接对这类流量进行<strong>无差别随机丢包（Packet Dropping）</strong>以保证核心业务通畅！</li>
      </ol>

      <h2>破解之道：选用纯物理内网专线机场</h2>
      <p>如果你对晚高峰稳定性有严苛要求，唯一的终极解决方案是选用 <strong>IEPL / IPLC 专线机场</strong>（如 <a href="__ROOT__review/flashleap/index.html">闪跃 FlashLeap</a>、<a href="__ROOT__review/breezenet/index.html">微风网络</a>）。因为物理内网完全独立于公网 163 骨干网之外，从物理层彻底免疫了任何运营商 QoS 调控与公网拥堵。</p>
    `
  },
  {
    slug: 'ipv6-airport-acceleration',
    title: 'IPv6网络在科学上网中的应用：绕过拥塞与低延迟直连探索',
    h1: 'IPv6网络在科学上网中的应用：绕过公网拥塞与低延迟直连探索',
    tag: '前沿网络',
    cluster: '专线网络与协议原理',
    desc: 'IPv4资源枯竭下的新出路。全面解析IPv6网络在科学上网中的加速优势、配置陷阱以及DNS解析优先级的合理调控。',
    content: `
      <h2>IPv4 资源枯竭背景下的 IPv6 全面普及</h2>
      <p>近年来，随着工信部对 IPv6 规模化部署的大力推进，国内绝大多数家庭宽带（电信、联通、移动）以及 5G 手机网络都已经原生分配了 <code>/64</code> 级别的公网 IPv6 地址段。对于翻墙与科学上网玩家而言，IPv6 带来了一片全新的未开垦绿洲。</p>

      <h2>IPv6 在科学上网中的两大独特技术优势</h2>
      
      <h3>1. 跨国出口路由更为通畅，拥塞率显著低于 IPv4</h3>
      <p>由于许多老旧机房和企业仍停留在 IPv4 架构，大量公网普通流量依然挤在狭窄的 IPv4 国际出口通道中。而三大运营商近年新建的跨国 IPv6 骨干网利用率相对较低，晚高峰的拥堵与丢包概率通常明显优于拥挤不堪的 IPv4 163 骨干网。</p>

      <h3>2. 拥有原生端到端公网直连能力</h3>
      <p>在 IPv4 环境下，绝大部分家庭宽带用户都被困在运营商的多层 NAT（内网 IP）之后，建立直连通信需要繁琐的穿透。而 IPv6 赋予了每个家庭设备一个全球唯一的公网 IP，使得点对点直连自建或直连优质 IPv6 落地节点成为可能。</p>

      <h2>IPv6 翻墙的三大潜在避坑风险</h2>
      <div class="callout callout-warning">
        <strong>实操注意事项：</strong><br>
        1. <strong>IPv6 DNS 污染防范：</strong>部分客户端在同时获取 A 记录（IPv4）和 AAAA 记录（IPv6）时，会优先尝试 IPv6。若客户端未妥善配置 IPv6 防污染，极易导致域名解析落入被污染的地址陷阱；<br>
        2. <strong>部分流媒体与 AI 服务对 IPv6 风控更严：</strong>例如 OpenAI 与部分流媒体平台对未知数据中心的 IPv6 地址段风控评分非常敏感，容易直接阻断；<br>
        3. <strong>建议策略：</strong>在 Clash 中开启 <code>ipv6: false</code> 优先保证稳定，仅在特定支持 IPv6 高速优化的节点上按需开启。
      </div>
    `
  },
  {
    slug: 'tls-fingerprint-impersonation',
    title: '什么是TLS指纹识别（uTLS）？防审查与特征抹除关键技术',
    h1: '什么是TLS指纹识别（uTLS）？防主动审查与特征抹除关键技术',
    tag: '密码安全',
    cluster: '专线网络与协议原理',
    desc: '为什么简单的HTTPS伪装依然会被防火墙一眼识破？深入拆解JA3/JA4指纹算法，教您看懂uTLS如何模拟正版Chrome与iOS浏览器握手。',
    content: `
      <h2>看似完美的加密，为什么依然会被识别？</h2>
      <p>很多人以为：只要我的翻墙客户端向海外节点发送的是加密的 TLS（HTTPS）握手包，外部审查系统就只能看到一串毫无规律的乱码。但在现代高级网络安全分析专家面前，这种想法过于天真了。</p>
      <p>在 TLS 建立加密连接的第一步（Client Hello 阶段），客户端必须明文向服务器发送自己支持的协议版本、加密套件列表（Cipher Suites）、压缩方法以及各种扩展插件参数。<strong>不同操作系统和不同软件在组合这些参数时，会形成极其独特、几乎独一无二的特征组合——这就是“TLS 握手特征指纹（JA3 / JA4 Fingerprint）”</strong>。</p>

      <h2>JA3 指纹识别的降维打击原理</h2>
      <p>全球 90% 以上的正常用户使用的是 Google Chrome 浏览器或苹果 Safari 浏览器。这两种浏览器在发起 TLS 握手时，其 Cipher Suites 列表顺序和特定 GREASE 伪随机扩展是高度固定的。</p>
      <p>而早期基于 Go 语言或 Python 编写的翻墙客户端（如未经过指纹伪装的早期 Shadowsocks/V2Ray 核心），其发出的 Client Hello 数据包特征具有鲜明的“Go 语言标准库特征”。审查系统根本不需要去解密你的数据包内容，<strong>只要发现你声明自己是访问普通网页，但握手特征指纹却明显是一个冷门命令行脚本，就会立刻给你打上高风险可疑标记</strong>！</p>

      <h2>uTLS 库的终极伪装方案</h2>
      <p>为了彻底粉碎 JA3 指纹审查，现代开源代理内核（如 Xray、Mihomo Meta）全面集成了 <strong>uTLS 密码学指纹模拟库</strong>：</p>
      <ul>
        <li>客户端在发起 TLS 连接时，可以直接指定 <code>client-fingerprint: chrome</code> 或 <code>safari</code>；</li>
        <li>uTLS 会在字节码层级<strong>以 100% 的精确度完美复刻正版最新版本 Chrome 浏览器的所有扩展参数与排序细节</strong>；</li>
        <li>在防火墙 DPI 探针看来，你的连接与数以亿计的网民在 Chrome 浏览器中打开一个常规海外新闻网站毫无区别，从而实现真正意义上的完美隐形。</li>
      </ul>
    `
  },
  {
    slug: 'router-openwrt-transparent-proxy',
    title: '软路由与OpenWrt全屋透明代理原理解析：旁路由与主路由拓扑',
    h1: '软路由与OpenWrt全屋透明代理原理解析：主路由 vs 旁路由网络拓扑',
    tag: '路由器网关',
    cluster: '专线网络与协议原理',
    desc: '让Apple TV、PS5和扫地机器人无感翻墙。深度图解软路由OpenClash与PassWall的工作机制，讲透主路由与单网口旁路由的最佳布线与网关配置。',
    content: `
      <h2>全屋无感翻墙的终极形态：透明网关代理</h2>
      <p>对于智能家居、大屏电视与主机游戏玩家而言，在每一台手机、电脑上单独安装客户端既繁琐又耗费设备电量，且许多设备（如 Switch、PS5、Apple TV、智能音箱）根本无法安装第三方客户端。<strong>软路由透明代理（Transparent Proxy）</strong> 是解决全屋无感科学上网的终极方案。</p>

      <h2>主路由架构 vs 旁路由（旁路网关）架构深度对比</h2>
      
      <h3>1. 软路由直接作为“主路由”（全功能合一）</h3>
      <p>光猫工作在桥接模式，工控机软路由（安装 OpenWrt 或 iStoreOS）负责 PPPoE 宽带拨号、DHCP 地址分配与 NAT 路由，下接交换机和 Wi-Fi AP 路由器。</p>
      <ul>
        <li><strong>优点：</strong>网络架构层级极简，全屋所有设备的流量强制经过软路由，分流策略控制最严密；</li>
        <li><strong>缺点：</strong>一旦软路由系统死机或内核插件报错，全家网络彻底瘫痪，家里老人孩子无法正常上网，容错率较低。</li>
      </ul>

      <h3>2. 单网口“旁路由 / 旁路网关”架构（强烈推荐，安全稳妥）</h3>
      <p>保留原有稳定可靠的硬路由器（如华硕、小米路由器）作为主路由进行拨号与无线发射。将软路由以一个普通设备身份插在硬路由的 LAN 口上，给软路由分配一个固定的静态 IP（例如 <code>192.168.1.2</code>）。</p>
      <div class="callout callout-info">
        <strong>旁路由的核心网关配置逻辑：</strong><br>
        1. 需要科学上网的设备（如电视盒子、PC、工作手机）：在设备网络设置中，手动将<strong>“默认网关（Gateway）”和“DNS 服务器”修改为旁路由的 IP（192.168.1.2）</strong>；<br>
        2. 家里不需要翻墙的设备（老人手机、智能家居）：保持默认自动获取 IP，网关依然指向主路由（192.168.1.1）；<br>
        3. <strong>极大优势：</strong>就算旁路由意外断电或重启，全家基础网络不受丝毫影响，进退自如！
      </div>
    `
  },
  {
    slug: 'airport-protocol-compatibility-matrix',
    title: '主流科学上网协议与各客户端兼容性全览：SS/Trojan/VLESS/Hysteria',
    h1: '主流科学上网协议与全平台客户端兼容性全景矩阵图谱',
    tag: '协议兼容',
    cluster: '专线网络与协议原理',
    desc: '小火箭支持哪些协议？Clash Verge能跑Hysteria 2吗？一文梳理Shadowsocks、Trojan、VLESS、Hysteria与各大主流客户端的完美兼容图谱。',
    content: `
      <h2>协议与客户端的“配对难题”</h2>
      <p>很多新手购买了机场套餐后，经常遇到导入配置报错“Unsupported Protocol（不支持的协议）”或者某些节点死活连不上的问题。这是因为不同协议的演进速度极快，而不同的客户端由不同开发者维护，其内置的底层解密核心支持程度各不相同。</p>

      <h2>全平台核心客户端与协议兼容性全景矩阵</h2>
      <table style="width: 100%; border-collapse: collapse; margin: 1.5rem 0;">
        <thead>
          <tr style="background: var(--bg-card); text-align: left;">
            <th style="padding: 8px; border: 1px solid var(--border-light);">客户端名称</th>
            <th style="padding: 8px; border: 1px solid var(--border-light);">适配平台</th>
            <th style="padding: 8px; border: 1px solid var(--border-light);">Shadowsocks</th>
            <th style="padding: 8px; border: 1px solid var(--border-light);">Trojan</th>
            <th style="padding: 8px; border: 1px solid var(--border-light);">VLESS Reality</th>
            <th style="padding: 8px; border: 1px solid var(--border-light);">Hysteria 2</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding: 8px; border: 1px solid var(--border-light); font-weight: bold;">Clash Verge Rev (Mihomo)</td>
            <td style="padding: 8px; border: 1px solid var(--border-light);">Win / Mac / Linux</td>
            <td style="padding: 8px; border: 1px solid var(--border-light); color: green;">完美支持</td>
            <td style="padding: 8px; border: 1px solid var(--border-light); color: green;">完美支持</td>
            <td style="padding: 8px; border: 1px solid var(--border-light); color: green;">完美支持</td>
            <td style="padding: 8px; border: 1px solid var(--border-light); color: green;">完美支持</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid var(--border-light); font-weight: bold;">Shadowrocket (小火箭)</td>
            <td style="padding: 8px; border: 1px solid var(--border-light);">iOS / iPadOS</td>
            <td style="padding: 8px; border: 1px solid var(--border-light); color: green;">完美支持</td>
            <td style="padding: 8px; border: 1px solid var(--border-light); color: green;">完美支持</td>
            <td style="padding: 8px; border: 1px solid var(--border-light); color: green;">完美支持</td>
            <td style="padding: 8px; border: 1px solid var(--border-light); color: green;">完美支持</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid var(--border-light); font-weight: bold;">v2rayN / v2rayNG</td>
            <td style="padding: 8px; border: 1px solid var(--border-light);">Windows / Android</td>
            <td style="padding: 8px; border: 1px solid var(--border-light); color: green;">完美支持</td>
            <td style="padding: 8px; border: 1px solid var(--border-light); color: green;">完美支持</td>
            <td style="padding: 8px; border: 1px solid var(--border-light); color: green;">完美支持</td>
            <td style="padding: 8px; border: 1px solid var(--border-light); color: green;">完美支持 (需装插件)</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid var(--border-light); font-weight: bold;">Surge (iOS / Mac)</td>
            <td style="padding: 8px; border: 1px solid var(--border-light);">iOS / macOS</td>
            <td style="padding: 8px; border: 1px solid var(--border-light); color: green;">完美支持</td>
            <td style="padding: 8px; border: 1px solid var(--border-light); color: green;">完美支持</td>
            <td style="padding: 8px; border: 1px solid var(--border-light); color: orange;">仅部分原生支持</td>
            <td style="padding: 8px; border: 1px solid var(--border-light); color: red;">暂不支持原生</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid var(--border-light); font-weight: bold;">Sing-box 全平台</td>
            <td style="padding: 8px; border: 1px solid var(--border-light);">全平台通用</td>
            <td style="padding: 8px; border: 1px solid var(--border-light); color: green;">完美支持</td>
            <td style="padding: 8px; border: 1px solid var(--border-light); color: green;">完美支持</td>
            <td style="padding: 8px; border: 1px solid var(--border-light); color: green;">完美支持</td>
            <td style="padding: 8px; border: 1px solid var(--border-light); color: green;">完美支持</td>
          </tr>
        </tbody>
      </table>

      <h2>现代跨平台选型建议</h2>
      <p>目前全功能支持最完善、且更新最活跃的两大核心生态是：<strong>Clash Verge Rev（基于 Mihomo 内核）</strong> 和 <strong>Sing-box 官方客户端</strong>。无论机场提供何种前沿新协议，这两个生态都能实现无缝解码与满速运行。</p>
    `
  }
];
