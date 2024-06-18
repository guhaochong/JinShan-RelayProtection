import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'zh-CN',

  title: 'JinShan-RelayProtection',
  description: 'JinShan-RelayProtection Site',

  base: '/JinShan-RelayProtection/',  // 添加这一行，确保路径与仓库名称匹配
  base: '/JinShan-RelayProtection/',

  theme: defaultTheme({
    logo: 'https://vuejs.press/images/hero.png',

    navbar: [
      { text: '首页', link: '/' },
      { text: '快速开始', link: '/get-started' },
      { text: '关于', link: '/about' }
    ],

    sidebar: {
      '/': [
        {
          text: '指南',
          children: [
            '/get-started.md',
            '/about.md',
          ],
        },
      ],
    },
  }),

  bundler: viteBundler(),
})
