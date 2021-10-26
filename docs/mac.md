# 💻 Mac

### Alfred [<Badge type="tip" text="传送门" vertical="middle" />](https://www.alfredapp.com)

::: tip
Alfred 是 macOS 屡获殊荣的应用程序，通过热键、关键字、文本扩展等提高您的效率。搜索您的 Mac 和 Web，通过自定义操作来控制您的 Mac，并提高效率。
:::

### Dash [<Badge type="tip" text="传送门" vertical="middle" />](https://kapeli.com/dash)

::: tip
Dash 可让您的 Mac 即时离线访问 200+ API 文档集。
:::

**推荐理由：**

- 离线文档查阅：快速方便的 API 索引，包含 JavaScript、React 等语言及库的文档

### iTerm2 [<Badge type="tip" text="传送门" vertical="middle" />](https://iterm2.com/)

::: tip
iTerm2 是终端的替代品，也是 iTerm 的继任者。它适用于 Mac 与 macOS 10.14 或较新的。iTerm2 将终端带入现代，具有您从来不知道自己一直想要的功能。
:::

**推荐理由：**

- 可以打造美观高效的 Mac 终端
- 支持分屏！

### Zsh [<Badge type="tip" text="传送门" vertical="middle" />](https://ohmyz.sh/)

::: tip
Zsh是一个Linux下强大的shell工具,是bash替代品中表现最佳的一个。跟Bash相比，Zsh的补全功能很强大，可以自动补全命令、参数、文件名、进程、用户名、变等等，同时还支持插件扩展，能支持更多功能方便我们高效使用。
:::

**推荐理由：**

- 支持命令提示与智能补全
- 支持快速与自动跳转


### Homebrew

::: tip
Homebrew是一个包管理器，用于安装Apple没有预装但你需要的UNIX工具。（比如著名的wget）。拥有安装、卸载、更新、查看、搜索等很多实用的功能。简单的一条指令，就可以实现包管理，而不用你关心各种依赖和文件路径的情况，十分方便快捷。
:::

**基本使用：**

```shell
# 安装，终端中执行
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

# 安装任意包：
brew install <packageName>
# 示例：安装node
brew install node

# 卸载任意包
brew uninstall git

# 查询可用包
brew search <packageName>

# 查看已安装包列表
brew list
```


### n <Badge type="tip" text="管理Node版本" vertical="middle" />

::: warning
windows不适用
:::

::: tip
用来进行 node 版本的切换，方便轻量 
:::

**基本使用：**

```shell
# 安装
npm install -g n

# 列出目前已经安装的Node.js 版本
n ls

# 列出远程所有的Node.js版本(可以通过--all列举所有的)
n ls-remote

# 安装指定版本
# 安装最新正式发布版本
sudo n latest
# 安装最新的长期支持正式发布版本
sudo n lts
# 安装指定版本
sudo n 12.22.1

# 切换版本,然后选中特定版本，回车即可
n

# 卸载版本
sudo n rm 12.22.1
```

### nuoshell [<Badge type="tip" text="传送门" vertical="middle" />](https://www.nuoshell.com/)

::: tip
集多功能于一身的 SSH 客户端工具，Mac 系统SSH客户端软件可选择的余地少之又少，BUG少、稳定且功能丰富的软件价格又非常高昂，这一款是免费的。
:::

