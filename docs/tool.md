# 💪 工具

## 剪切

### Ditto [<Badge type="tip" text="传送门" vertical="middle" />](https://ditto-cp.sourceforge.io/)

::: tip 介绍
Ditto是一款免费开源的 windows 剪切板管理工具，它可以批量的复制,使用快捷键打开剪切板历史，然后`Ctrl / Shift`来选择你希望粘贴的内容，`Enter`即可选择性的粘贴多行内容；另外剪切板历史还可以搜索，快速找到复制内容；
:::

## 截图

### Snipaste [<Badge type="tip" text="传送门" vertical="middle" />](https://www.snipaste.com/) [<Badge type="tip" text="中文传送门" vertical="middle" />](https://zh.snipaste.com/)

::: tip 介绍
Snipaste是一款非常强大的截图工具，几乎所有操作都支持快捷键，还有 Pin to screen 的功能，节省了太多对比 UI 和 Design，还有一些需要切换屏幕对比操作的时间。
:::

### VeryCapture [<Badge type="tip" text="传送门" vertical="middle" />](https://verycapture.com/cn/index.html)

::: tip 介绍
VeryCapture 是一款功能丰富且强大的电脑屏幕捕捉工具，目前仅有 Windows 版本。相比之前安利过的截屏或录屏工具，VeryCapture 不仅将截屏和录屏两大板块整合到一起，而且界面简洁，操作也很简单。启动程序后，只需双击 Ctrl 键，即可快速唤出主界面，你可以使用它来进行全屏截图、区域截图、延时截图、长截图、GIF 录制、画面录制等多种功能操作，还支持对截取的图片进行标注和修改。此外，软件还加入了 OCR 文字识别、图片置顶显示等功能，让你分享或演示电脑窗口时更加方便高效。
:::

## GIF

### ScreenToGif [<Badge type="tip" text="传送门" vertical="middle"/>](https://www.screentogif.com/)

::: tip 介绍
一款体积非常轻便，而且完全免费的 GIF 录屏工具，可以单独操作录制的帧，删除或者加快或者修改，它可以将你录制的 GIF 图进行再次编辑，还能添加滤镜效果。本身还自带白班，你可以将你的鼠绘作品制作成 GIF 动图。
:::


### GifCam [<Badge type="tip" text="传送门" vertical="middle"/>](https://gifcam.en.softonic.com/)

::: tip 介绍
GifCam 小巧便捷，可以选择录屏帧率，录制的过程可以调整窗口大小和位置，也可以暂停和继续，它能通过多画面的计算，将截取区域相同的部分自动删除，如果对截取区域没有操作，它会将此帧的画面延长，从而使你录制的 GIF 文件非常小。
:::

## 🔗 API工具篇

### Apifox [<Badge type="tip" text="传送门" vertical="middle" />](https://www.apifox.cn)

::: tip 介绍
API 文档、调试、Mock、测试一体化协作平台。Apifox = Postman + Swagger + Mock + JMeter。
:::

**推荐理由：**

- 对于前端：拿来做mock mock出来的数据很人性化
- 对于后端：拿来做调试 postmam的功能完全具备并支持自动校验数据结构
- 对于测试：拿来做接口自动化测试 可视化配置断言功能杠杠的
- 对于团队：一体化协同工具 打通前端、后端及测试研发闭环

### Postman [<Badge type="tip" text="传送门" vertical="middle" />](https://www.postman.com/) [<Badge type="tip" text="汉化" vertical="middle" />](https://github.com/hlmd/Postman-cn)

::: tip 介绍
Postman是用于构建和使用API的一个API平台。Postman简化了API生命周期的每一步，简化了协作，所以您可以更快地创建更好的API。
:::

### Apipost [<Badge type="tip" text="传送门" vertical="middle" />](https://www.apipost.cn/)

::: tip 介绍
ApiPost=API接口调试工具+接口文档管理工具+Mock工具协作之上,提升研发团队整体效率
:::

## ✏️ 写作篇

### 语雀 [<Badge type="tip" text="传送门" vertical="middle" />](https://www.yuque.com/)

::: tip 介绍
语雀是一个蚂蚁金服孵化出来的专业的云端知识库，类似wiki，目前已经覆盖了10 万阿里员工的使用，来进行文档编写及知识沉淀。思维导图，日记编排非常好用。
:::

### Mdnice [<Badge type="tip" text="传送门" vertical="middle" />](https://editor.mdnice.com/)

::: tip 介绍
mdnicde全名为Markdown Nice，支持给markdown添加“主题元素”，支持多种主观，支持微信公众号、知乎、还有掘金！
:::

###  Shields [<Badge type="tip" text="传送门" vertical="middle" />](https://shields.io/)

::: tip 介绍
shields.io 主要是用来可以生成 在Markdown 文档中的徽章，我们经常在github的项目上看到这些徽章，来表述比如单元测试覆盖率、打包的大小、版本信息、认证信息等。
:::

## ⌨ 命令行工具篇 

### nvm [<Badge type="tip" text="管理Node版本" vertical="middle" />](https://github.com/coreybutler/nvm-windows/releases/tag/1.1.8)

::: tip 介绍
用来进行 node 版本的切换。
:::
### nrm <Badge type="tip" text="npm镜像管理工具" vertical="middle" />

::: tip 介绍
nrm是npm的镜像源管理工具,有时候因为访问国外资源原因导致速度太慢,使用nrm可以快速地在npm源间切换,也可以管理你内部的npm来源
:::

**基本使用：**

```shell
# 安装
npm install -g nrm

# 列出可选择的源:[注：前面带 * 号的表示正在使用的源]
nrm ls

# 切换使用的源
nrm use <registry>

# 添加一个源[reigstry` 为源名，`url` 为源的路径， `home` 为源的主页。`home` 可以不设置。]
nrm add <registry> <url> [home]
# 示例
nrm add company http://npm.company.com/  

# 删除源
nrm del company

# 测试源速度
# * npm ---- 833ms
nrm test npm 
```

