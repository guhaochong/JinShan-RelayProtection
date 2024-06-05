module.exports = {
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
      '/': [
        {
          text: '指南',
          items: [
            { text: '开始', link: '/guide/01' },
            { text: '安装', link: '/guide/02' },
            { text: '配置', link: '/guide/03' }
          ]
        }
      ],
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
        serviceWorker: {
          updatePopup: {
            message: "发现新内容可用。",
            buttonText: "刷新"
          }
        },
        // 完整的主题配置
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
            '/': [
              {
                text: '指南',
                items: [
                  { text: '开始', link: '/guide/01' },
                  { text: '安装', link: '/guide/02' },
                  { text: '配置', link: '/guide/03' }
                ]
              }
            ],
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
          // 这里是新添加的部分
          nextLinks: true,
          prevLinks: true,
          nextText: '下一页',
          prevText: '上一页'
        }
      }
    }
  }
}
