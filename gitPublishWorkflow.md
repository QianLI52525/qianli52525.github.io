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

## Git 工作原理（三个区域）

```
工作区（你改文件）       暂存区（git add）       本地仓库（git commit）       远程仓库（git push）
你正在编辑的地方  →   准备好的改动  →     本地历史记录  →          GitHub 上的仓库
```

| 命令 | 本质 |
|------|------|
| `git add` | 把改动放进「准备区」 |
| `git commit` | 把准备区的内容打包成一个「版本快照」存到本地 |
| `git push` | 把本地版本快照上传到 GitHub |

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

`.` = 所有**有改动**的文件（没改过的文件不会被加进来）。

只提交某个文件：
```powershell
git add 文件名
```

批量 add 后反悔某个文件：
```powershell
git reset 文件名
```

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

## commit 常用参数

| 命令 | 意思 |
|------|------|
| `git commit -m "xxx"` | 正常提交 |
| `git commit -a -m "xxx"` | 自动 add 已跟踪文件的修改 + 提交（新文件不会被加） |
| `git commit --amend --no-edit` | 把新改动追加到上次提交，不改备注 |
| `git commit --amend -m "新备注"` | 修改上次提交的备注 |

⚠️ **已经 push 过的提交不要用 `--amend`**，会改历史，导致下次 push 冲突。

---

## 常见问题

| 情况 | 解决方法 |
|------|----------|
| 想改还没 commit 的文件 | 直接改，再 `git add` + `commit` |
| 想改已经 commit 但没 push 的描述 | `git commit --amend -m "新描述"` |
| push 后发现改错了 | 修改文件 → 再走一遍完整流程 |
| 不小心提交了不该提交的文件 | `git rm 文件名` → `commit` → `push` |
| 查看历史提交记录 | `git log --oneline` |
| push 提示认证错误 | PAT 可能过期，去 https://github.com/settings/tokens 重新生成 |
| 改了很多文件，只想提交其中一部分 | `git add 文件名1 文件名2`（不加 `.`）|
| `git add .` 加了不想提交的文件 | `git reset 文件名` 把不想提交的撤出来 |

---

## 有文件不想提交，但 `git status` 一直显示

### 办法 A：用 `.gitignore`（推荐，一劳永逸）

把不想被 Git 跟踪的文件/文件夹写进 `.gitignore`，Git 从此无视它们：

```powershell
# 忽略某个文件
echo "文件名.txt" >> .gitignore

# 忽略某个文件夹
echo "文件夹名/" >> .gitignore

# 忽略所有 .log 文件
echo "*.log" >> .gitignore
```

### 办法 B：已经跟踪了，想取消跟踪但保留本地文件

```powershell
git rm --cached 文件名
echo "文件名" >> .gitignore
```

`--cached` 的意思是：只从 Git 的跟踪列表里删掉，本地文件不动。

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

## 本地预览

### 方式一：ASP.NET（推荐，和线上几乎一样）

```powershell
cd E:\QServerCode\QServer\QWeb
dotnet run
```
浏览器打开 `http://localhost:5000`（端口号以命令行输出为准）

### 方式二：静态文件服务器（只看静态页面）

```powershell
cd E:\QServerCode\QServer\QWeb\wwwroot
npx serve .
```
打开显示的地址（通常是 `http://localhost:3000`）

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
