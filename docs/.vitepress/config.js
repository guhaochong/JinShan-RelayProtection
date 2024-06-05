import { defineConfig } from 'vitepress';

export default defineConfig({
  title: '你的站点名称',
  description: '站点描述',
  themeConfig: {
    locales: {
      '/': {
        lang: 'zh-CN',
        label: '简体中文',
        selectText: '选择语言',
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
        }
      },
      '/en/': {
        lang: 'en-US',
        label: 'English',
        selectText: 'Languages',
        nav: [
          { text: 'Home', link: '/en/' },
          {
            text: 'Guide',
            items: [
              { text: 'Getting Started', link: '/en/guide/01' },
              { text: 'Installation', link: '/en/guide/02' },
              { text: 'Configuration', link: '/en/guide/03' }
            ]
          }
        ],
        sidebar: {
          '/en/guide/': [
            {
              text: 'Guide',
              items: [
                { text: 'Getting Started', link: '/en/guide/01' },
                { text: 'Installation', link: '/en/guide/02' },
                { text: 'Configuration', link: '/en/guide/03' }
              ]
            }
          ]
        }
      }
    }
  }
});
