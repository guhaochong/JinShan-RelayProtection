module.exports = {
  base: '/JinShan-RelayProtection/',
  title: '你的站点名称',
  description: '站点描述',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      {
        text: '指南',
        items: [
          { text: '开始', link: '/guide/01' },
          { text: '安装', link: '/guide/02' },
          { text: '配置', link: '/guide/03' }
        ]
      }
    ],
    sidebar: {
      '/guide/': [
        {
          text: '指南',
          items: [
            { text: '开始', link: '/guide/01' },
            { text: '安装', link: '/guide/02' },
            { text: '配置', link: '/guide/03' }
          ]
        }
      ]
    },
    locales: {
      '/': {
        lang: 'zh-CN',
        title: '你的站点名称',
        description: '站点描述',
        label: '简体中文',
        selectText: '选择语言',
        ariaLabel: '选择语言',
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdated: '上次更新',
        outlineTitle: '本页内容', 
        next: '下一页',
        prev: '上一页',
        serviceWorker: {
          updatePopup: {
            message: "发现新内容可用。",
            buttonText: "刷新"
          }
        }
      }
    }
  }
}
