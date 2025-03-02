import {defineConfig, type DefaultTheme} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    markdown: {
        math: true,
        lineNumbers: true,
        toc: {level: [1, 2]},
        image: {
            // 图片启用懒加载。
            lazyLoading: true
        },
        container: {
            tipLabel: '提示',
            warningLabel: '警告',
            dangerLabel: '危险',
            infoLabel: '信息',
            detailsLabel: '详细信息'
        }
    },
    head: [
        ['link', {rel: 'icon', href: '/Warframe-Guide/哈士奇.png'}],
        ['link', {rel: 'stylesheet', href: '/Warframe-Guide/custom.css'}],
    ],
    lastUpdated: true,
    base: "/Warframe-Guide/",
    title: "Warframe Guide",
    description: "星际战甲知识库",
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        outline: {label: "大纲",},
        logo: '/书籍.png', //站点logo
        search: {
            provider: 'local',
            options: {
                translations: {
                    button: {
                        buttonText: '搜索文档',
                        buttonAriaLabel: '搜索文档'
                    },
                    modal: {
                        noResultsText: '无法找到相关结果',
                        resetButtonTitle: '清除查询条件',
                        footer: {
                            selectText: '选择',
                            navigateText: '切换',
                            closeText: '返回'
                        }
                    }
                }
            }
        },
        nav: nav(),

        sidebar: {
            '/热门模式/': {base: '/热门模式/', items: sidebarHotType()},
            '/机制/': {base: '/机制/', items: sidebarMachine()},
            '/战甲攻略/': {base: '/战甲攻略/', items: sidebarWarframe()}
        },

        socialLinks: [
            {icon: 'bilibili', link: 'https://space.bilibili.com/3493111175055606'},
            {icon: 'github', link: 'https://github.com/wxhn1225/Warframe-Guide'}
        ],
        footer: {
            message: '星际战甲Q群：602704599',
            copyright: `版权所有 © 2025-${new Date().getFullYear()} 喜欢`
        },
        lastUpdated: {
            text: '上次更新',
        },
        lightModeSwitchTitle: '切换到浅色模式',
        darkModeSwitchTitle: '切换到深色模式',
        skipToContentLabel: '跳转到内容'
    }
})

function nav(): DefaultTheme.NavItem[] {
    return [
        {
            text: '机制',
            link: '/机制/'
        },
        {
            text: '战甲攻略',
            link: '/战甲攻略/'
        },
        {
            text: '热门模式',
            items: [
                {text: '仲裁', link: '/热门模式/仲裁/'},
                {text: '中断', link: '/热门模式/中断/'},
                {text: '新模式', link: '/热门模式/最新模式/无'},
            ]
        },
    ]
}

function sidebarHotType(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: "仲裁",
            collapsed: false,
            items: [
                {text: '待更新', link: '/仲裁/无'},
                {text: '待更新', link: '/中断/无'}
            ]
        },
        {
            text: "中断",
            collapsed: false,
            items: [
                {text: '中断竞速浅谈', link: '/中断/中断竞速浅谈'},
                {text: '待更新', link: '/中断/无'}
            ]
        },
        {
            text: "新模式",
            collapsed: false,
            items: [
                {text: '中断竞速浅谈', link: '/中断/中断竞速浅谈'},
                {text: '待更新', link: '/中断/无'}
            ]
        }
    ]
}

function sidebarMachine(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: "机制",
            collapsed: false,
            items: [
                {text: '减伤机制综述', link: '/减伤机制综述'},
                {text: '待更新', link: '/中断/无'}
            ]
        }
    ]
}

function sidebarWarframe(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: '战甲攻略',
            collapsed: false,
            items:[
                {text:'伏特', link: '/伏特'},
            ]
        }
    ]
}