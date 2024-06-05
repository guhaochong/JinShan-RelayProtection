module.exports = {
  title: '你的站点名称',
  description: '站点描述',
  themeConfig: {
    // 导航栏配置
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
      // ...其他导航项...
    ],

    // 侧边栏配置
    sidebar: {
      '/': [ // 首页的侧边栏
        {
          title: '指南', // 侧边栏标题
          collapsable: false, // 保持侧边栏展开
          children: [
            '/guide/01',
            '/guide/02',
            '/guide/03'
            // ...其他指南页面链接...
          ]
        }
      ],
      '/guide/': [ // 指南部分的侧边栏
        // ...指南页面的侧边栏配置...
      ]
      // ...其他页面的侧边栏配置...
    },

    // 其他 themeConfig 配置...
  }
}