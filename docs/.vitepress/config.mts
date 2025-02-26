import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/Warframe-Guide/",
  title: "Warframe Guide",
  description: "星际战甲知识库",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '机制', link: '/机制/' },
      { text: '热门模式', link: '/热门模式/' }
    ],

    sidebar: {
      '热门模式': [
        {text: '仲裁', link: '/热门模式/仲裁'},
        {text: '中断', link: '/热门模式/中断'},
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
