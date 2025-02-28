import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    markdown: {
        math: true,
        lineNumbers: true,
        toc: { level: [1, 2] },
        image: {
            // 图片启用懒加载。
            lazyLoading: true
        }
    },
    base: "/Warframe-Guide/",
    title: "Warframe Guide",
    description: "星际战甲知识库",
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        // logo: '/logo.png', //站点logo
        nav: [
            {text: '机制', link: '/机制/'},
            {
                text: '热门模式', items: [
                    {text: '仲裁', link: '/热门模式/仲裁/'},
                    {text: '中断', link: '/热门模式/中断/'},
                ]
            }
        ],

        sidebar: {
            '/热门模式/仲裁/': [
                {
                    text: "仲裁",
                    items: [
                        {text: '待更新', link: '/热门模式/仲裁/无'},
                        {text: '待更新', link: '/热门模式/中断/无'}
                    ]
                }
            ],
            '/热门模式/中断/': [
                {
                    text: "中断",
                    items: [
                        {text: '中断竞速浅谈', link: '/热门模式/中断/中断竞速浅谈'},
                        {text: '待更新', link: '/热门模式/中断/无'}
                    ]
                }
            ],
        },

        socialLinks: [
            {icon: 'bilibili', link: 'https://space.bilibili.com/3493111175055606'},
            {icon: 'github', link: 'https://github.com/wxhn1225/Warframe-Guide'}
        ],
        footer: {
            message: '星际战甲Q群：602704599',
            copyright: 'Copyright © 2025 wxhn1225'
        }
    }
})
