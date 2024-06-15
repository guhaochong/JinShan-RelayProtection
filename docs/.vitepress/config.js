module.exports = {
  base: '/JinShan-RelayProtection/',
  title: 'JinShan-RelayProtection',
  description: 'JinShan-RelayProtection',
    lang: 'zh-CN', // 设置默认语言为中文
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
            {
              text: '配置',
              collapsible: true, // 添加这个属性
              items: [
                { text: '基本配置', link: '/guide/03' },
                { text: '高级配置', link: '/guide/04' }
              ]
            }
          ]
        }
      ],
      '/': [
        {
          text: '指南',
          items: [
            { text: '开始', link: '/guide/01' },
            { text: '安装', link: '/guide/02' },
            {
              text: '配置',
              collapsible: true, // 添加这个属性
              items: [
                { text: '基本配置', link: '/guide/03' },
                { text: '高级配置', link: '/guide/04' }
              ]
            }
          ]
        }
      ]
    ],
    editLinkText: '在 GitHub 上编辑此页',
    lastUpdated: '上次更新',
    nextText: '下一页',
    prevText: '上一页',
    outlineTitle: '本页内容', // 自定义 "On this page"
    serviceWorker: {
      updatePopup: {
        message: "发现新内容可用。",
        buttonText: "刷新"          }
        }
      }
    }
  }
}
