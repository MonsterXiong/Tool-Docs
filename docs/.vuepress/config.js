module.exports = {
  title:"Tools",
  description:"追求极致的冲浪体验~~~",
  base:'/Tool-Docs/',
  head: [['link', { rel: 'icon', href: 'favicon.ico' }]],
  themeConfig: {
    logo: "/images/logo.png",
    // 是否启用 最近更新时间戳 默认值：true
    lastUpdated:false,
    // 是否启用 贡献者列表 默认值：true
    // 最近更新时间戳 标签的文字 默认值： 'Last Updated'
    // lastUpdatedText
    contributors:false,
    // 贡献者列表 标签的文字 默认值： 'Contributors'
    // contributorsText:flase,
    // Tip 自定义容器 的默认标题 默认值： 'TIP'
    tip:"介绍",
    // Warning 自定义容器 的默认标题 默认值： 'WARNING'
    warning:"提示",
    navbar: [
      {
        text: "📁 待整理工具",
        link: "/todo.md"
      },
      {
        text: "💪 工具",
        link: "/tool.md",
      },
      {
        text: "📘 在线工具",
        link: "/online.md",
      },
      {
        text: "💻 Mac",
        link: "/mac.md",
      },
      { text: '👷 Github', link: 'https://github.com/MonsterXiong/Tool-Docs' },
    ],
  },
};
