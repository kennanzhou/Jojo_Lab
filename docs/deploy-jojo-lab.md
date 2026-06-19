# Jojo LAB 线上部署说明

> 面向：**开发者** + **AI 助手（Codex / Cursor 等）**  
> 目标：多人协作时，**每人本地路径不同**，但**执行同一条部署命令**，且**不改动共享脚本里的个人路径**。

---

## 快速开始（开发者）

### 1. 一次性准备

1. 拿到 ECS SSH 私钥 `cynadu-ssh.pem`（不要提交到 Git）。
2. 复制本地配置模板：

   ```bash
   cp scripts/deploy.local.env.example scripts/deploy.local.env
   ```

3. 编辑 `scripts/deploy.local.env`，填入本机密钥路径：

   **Windows（Git Bash）示例：**

   ```bash
   JOJO_SSH_KEY="/d/private-workspace/home-workspace/0528AI/.ssh/cynadu-ssh.pem"
   ```

   **macOS 示例：**

   ```bash
   JOJO_SSH_KEY="/Users/nan.studio/Documents/cynadu-ssh.pem"
   ```

4. 确认能 SSH 登录：

   ```bash
   ssh -i "/你的路径/cynadu-ssh.pem" root@47.86.175.205
   ```

### 2. 每次更新线上

在项目根目录 `Jojo_Lab/` 执行：

```bash
bash scripts/deploy-jojo-lab.sh
```

Windows 也可双击：

```text
scripts/deploy-jojo-lab.bat
```

部署成功后访问：**https://lab.jojo1222.com/**

---

## 设计原则（给 AI 助手读）

| 规则 | 说明 |
|------|------|
| **共享脚本不含个人路径** | `scripts/deploy-jojo-lab.sh` 提交到 Git，禁止写入某人的 Mac/Windows 绝对路径 |
| **个人配置不进 Git** | `scripts/deploy.local.env` 已在 `.gitignore`，每人本地维护 |
| **统一命令** | 所有人都只跑 `bash scripts/deploy-jojo-lab.sh` |
| **模板可提交** | `scripts/deploy.local.env.example` 提交到 Git，供复制 |
| **密钥永不入库** | `.pem`、OSS Secret、MiniMax Key 都不要 commit |
| **不动其他站点** | 只更新 `jojo-lab.conf` 与 `/opt/jojo-lab/`，不改 `nginx.conf` 里 cynadu.ai 配置 |

若 AI 要帮用户改部署路径：**只改 `scripts/deploy.local.env`**，不要改 `deploy-jojo-lab.sh`（除非改共享逻辑）。

---

## 文件职责

| 文件 | 是否进 Git | 作用 |
|------|-----------|------|
| `scripts/deploy-jojo-lab.sh` | ✅ 是 | 同步代码、重启 `jojo-lab`、reload nginx |
| `scripts/deploy-jojo-lab.bat` | ✅ 是 | Windows 入口，内部调用 `.sh` |
| `scripts/deploy.local.env.example` | ✅ 是 | 本地配置模板 |
| `scripts/deploy.local.env` | ❌ 否 | **每人本机** SSH 密钥路径等 |
| `deploy/jojo-lab.nginx.conf` | ✅ 是 | 仅 `lab.jojo1222.com` 的 Nginx |
| `deploy/jojo-lab.service` | ✅ 是 | systemd 单元 |
| `deploy/jojo-lab.proxy.conf` | ✅ 是 | Nginx 反代公共头（被 nginx conf include） |
| `work/private/` | ❌ 否 | 服务器上的学习进度、API Key 等私有数据 |

---

## SSH 密钥查找顺序

`deploy-jojo-lab.sh` 按以下顺序找密钥，**找到即用**：

1. `scripts/deploy.local.env` 里的 `JOJO_SSH_KEY`
2. `Jojo_Lab/../.ssh/cynadu-ssh.pem`（仓库上一级的 `.ssh` 目录）
3. `~/.ssh/cynadu-ssh.pem`

都找不到则报错，提示复制 `deploy.local.env.example`。

---

## `deploy.local.env` 可选变量

```bash
JOJO_SSH_KEY="/absolute/path/to/cynadu-ssh.pem"   # 推荐每人设置
JOJO_SSH_HOST="root@47.86.175.205"                # 默认即可
JOJO_REMOTE_DIR="/opt/jojo-lab"                   # 默认即可
JOJO_APP_VERSION="1.0.3"                          # 写入 build-meta，默认 1.0.3
```

---

## 部署脚本实际做了什么

1. 读取 `deploy.local.env`（若存在）
2. 生成临时 `outputs/build-meta.json`（版本号 + git sha，部署完删除本地副本）
3. 用 `tar` 经 SSH 同步项目到服务器 `/opt/jojo-lab/`  
   **排除**：`.git`、`work/private/`、`scripts/deploy.local.env` 等
4. 在服务器上：
   - 复制 `deploy/jojo-lab.service` → `/etc/systemd/system/`
   - 复制 `deploy/jojo-lab.nginx.conf` → `/etc/nginx/conf.d/jojo-lab.conf`
   - `systemctl restart jojo-lab`
   - `nginx -t && systemctl reload nginx`

---

## 生产环境信息

| 项目 | 值 |
|------|-----|
| 公网域名 | https://lab.jojo1222.com |
| DNS / HTTPS | Cloudflare（源站 HTTP 80，边缘 HTTPS） |
| ECS IP | 47.86.175.205 |
| SSH 用户 | root |
| 应用目录 | `/opt/jojo-lab/` |
| Node 进程 | `127.0.0.1:4173`（systemd: `jojo-lab.service`） |
| 环境变量文件 | `/etc/jojo-lab/env`（服务器上，不进 Git） |
| 私有状态 | `/opt/jojo-lab/work/private/jojo-state.json` |

### 登录

| 模式 | PIN | 说明 |
|------|-----|------|
| 正式 | `1106`（可通过 `JOJO_LOGIN_PIN` 改） | 读写共享进度 |
| Demo | `8888` | 不持久化到正式数据 / OSS |

---

## 与同一 ECS 上其他项目的关系

本机还跑着 **cynadu.ai** 等（端口 `3000` 等）。Jojo 部署** intentionally isolated**：

| 项目 | Jojo LAB | CYNADU 等 |
|------|----------|-----------|
| Nginx | `/etc/nginx/conf.d/jojo-lab.conf` | `/etc/nginx/nginx.conf` 主配置 |
| 域名 | `lab.jojo1222.com` | `cynadu.ai` 等 |
| 端口 | 4173 | 3000 / 7001 等 |
| 目录 | `/opt/jojo-lab/` | 各自目录 |

`deploy-jojo-lab.sh` **不会修改** `nginx.conf` 或 `cynadu-beta.conf`。

---

## OSS / MiniMax（运维备忘）

- **OSS**：用户上传的图片（画廊、Card Cottage、自定义首页背景）。Bucket `jojolab`，区域香港。**不需要**把 `lab.jojo1222.com` 绑为 OSS 自定义域名；默认用 Bucket 签名 URL 即可。
- **MiniMax Key**：保存在服务器 `work/private/jojo-state.json` 的 `aiSettings.apiKey`，或通过登录后在「主页齿轮」填写。前端不会回显 Key；知道 PIN 的登录用户可共用该 Key 调用 Song Notes。
- **服务器 OSS 凭证**：在 `/etc/jojo-lab/env`（部署时写入，勿提交 Git）。

---

## Nginx 性能（已启用，仅 Jojo 站点）

`deploy/jojo-lab.nginx.conf` 已配置：

- **gzip**：压缩 `app.js`、`styles.css` 等文本
- **长期缓存**：`/assets/` 静态图
- **不缓存**：`/api/`

说明：**首次加载慢**主要来自多张 **3MB+ 的 hero PNG**，gzip 无法显著压缩 PNG；第二次访问会快很多（浏览器缓存）。

---

## 常见问题

### `SSH key not found`

→ 创建并填写 `scripts/deploy.local.env`，设置 `JOJO_SSH_KEY`。

### 朋友 pull 代码后部署失败

→ 他本地也需要自己的 `scripts/deploy.local.env`（Git 不会带过来）。

### 改了 nginx 没生效

→ 再跑一次 `bash scripts/deploy-jojo-lab.sh`，或 SSH 上执行 `nginx -t && systemctl reload nginx`。

### 只想改 MiniMax Key，不想整站部署

SSH 登录后编辑：

```text
/opt/jojo-lab/work/private/jojo-state.json
```

改 `aiSettings.apiKey`，然后：

```bash
systemctl restart jojo-lab
```

或在浏览器登录 → 主页齿轮 → MiniMax → 保存。

### 本地开发（不部署）

```bash
node server.js
```

打开 http://127.0.0.1:4173/

---

## 给 AI 助手的检查清单

帮用户部署或排查时，按顺序确认：

- [ ] `scripts/deploy.local.env` 是否存在且 `JOJO_SSH_KEY` 指向真实 `.pem`
- [ ] 是否使用统一命令 `bash scripts/deploy-jojo-lab.sh`（不要让人改 `.sh` 里的路径）
- [ ] 是否误将 `deploy.local.env` 或 `.pem` 提交到 Git
- [ ] 部署后 `systemctl status jojo-lab` 是否为 `active (running)`
- [ ] `curl -I https://lab.jojo1222.com/` 是否 200
- [ ] 问题是否与其他站点有关——若涉及 `cynadu.ai`，查 `/etc/nginx/nginx.conf`，不是 Jojo 的 conf

---

## 相关路径速查

```text
Jojo_Lab/
├── docs/deploy-jojo-lab.md          ← 本文档
├── scripts/
│   ├── deploy-jojo-lab.sh           ← 共享部署脚本
│   ├── deploy-jojo-lab.bat
│   ├── deploy.local.env.example     ← 模板（Git）
│   └── deploy.local.env             ← 本地配置（不 Git）
├── deploy/
│   ├── jojo-lab.nginx.conf
│   ├── jojo-lab.service
│   └── jojo-lab.proxy.conf
└── server.js                        ← Node 入口
```

服务器：

```text
/opt/jojo-lab/                       ← 应用代码
/etc/jojo-lab/env                    ← PIN、OSS 等环境变量
/etc/nginx/conf.d/jojo-lab.conf      ← 仅 Jojo 的 Nginx
/etc/systemd/system/jojo-lab.service
```
