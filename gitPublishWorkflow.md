# 千里的小屋 — GitHub Pages 本地推送教程

## 快速推送（三步）

```powershell
cd E:\QServerCode\QServer\QWeb\wwwroot
git add .
git commit -m "改了什么"
git push origin main
```

推送后等 1-2 分钟，刷新 https://qianli52525.github.io/ 即可看到更新。

---

## 详细步骤

### 1. 打开 PowerShell

开始菜单搜索 "PowerShell" 打开

### 2. 进入 wwwroot 目录

```powershell
cd E:\QServerCode\QServer\QWeb\wwwroot
```

### 3. 查看改动（可选）

```powershell
git status
```

会列出哪些文件被修改/新增/删除了。

### 4. 添加改动到 Git

```powershell
git add .
```

`.` = 所有改动。只提交某个文件用 `git add 文件名`。

### 5. 提交并写备注

```powershell
git commit -m "描述你改了什么"
```

描述随便写，方便以后看历史。示例：
```powershell
git commit -m "新增一首歌"
git commit -m "修改首页样式"
git commit -m "添加新壁纸"
```

### 6. 推送到 GitHub

```powershell
git push origin main
```

---

## 常见问题

| 情况 | 解决方法 |
|------|----------|
| 想改还没 commit 的文件 | 直接改，再 `git add .` + `commit` |
| 想改已经 commit 但没 push 的描述 | `git commit --amend -m "新描述"` |
| push 后发现改错了 | 修改文件 → 再走一遍完整流程 |
| 不小心提交了不该提交的文件 | `git rm 文件名` → `commit` → `push` |
| 查看历史提交记录 | `git log --oneline` |
| push 提示认证错误 | PAT 可能过期，去 https://github.com/settings/tokens 重新生成 |

---

## 不能删的文件

| 文件 | 说明 |
|------|------|
| `QWeb.csproj` | ASP.NET 项目定义（wwwroot 的父目录） |
| `Program.cs` | ASP.NET 主程序（wwwroot 的父目录） |
| `web.config` | IIS 入口配置 |
| `.git/` | Git 仓库数据 |

其他网站内容文件（index.html、bgpic/、music/ 等）可随意修改，改完 push 即可。

---

## 项目结构

```
E:\QServerCode\QServer\QWeb\          ← ASP.NET 项目
├── QWeb.csproj / Program.cs          ← 不能删
└── wwwroot\                          ← 网站内容（Git 仓库）
    ├── index.html                    ← 首页
    ├── bgpic/                        ← 壁纸库
    ├── music/                        ← 音乐站
    ├── files/                        ← 学习资料
    ├── countdown/                    ← 倒计时
    ├── eastereggs/                   ← 彩蛋
    └── ...                           ← 其他
```

网站地址：https://qianli52525.github.io/
仓库地址：https://github.com/QianLI52525/qianli52525.github.io
