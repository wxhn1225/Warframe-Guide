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
        ['link', {rel: 'stylesheet', href: '/Warframe-Guide/custom.css'}], //表格居中
    ],
    lastUpdated: true,
    base: "/Warframe-Guide/",
    title: "Warframe Guide",
    description: "星际战甲知识库",
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        outline: {level:[2,3],label: "大纲",},
        logo: '/书籍.png', //站点logo
        docFooter:
            {
                prev: '上一页',
                next: '下一页'
            },
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
            '/配置/': {base: '/配置/', items: sidebarBuild()},
            '/最新/': {base: '/最新/', items: sidebarLatest()},
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
        returnToTopLabel: '回到顶部',
        sidebarMenuLabel: '菜单',
        darkModeSwitchLabel: '主题',
        lightModeSwitchTitle: '切换到浅色模式',
        darkModeSwitchTitle: '切换到深色模式',
        skipToContentLabel: '跳转到内容'
    }
})

//导航栏
function nav(): DefaultTheme.NavItem[] {
    return [
        {
            text: '机制',
            link: '/机制/'
        },
        {
            text: '配置',
            items: navBuild(),
        },
        {
            text: '指南',
            items: navGuide(),
        },
        {
            text: '最新',
            link: '/最新/',
        }
    ]
}

//导航栏配置
function navBuild(): DefaultTheme.NavItemWithLink[] {
    return [
        {text: '战甲', link: '/配置/战甲/'},
        {text: '热门武器', link: '/配置/中断/'},
    ]
}



//导航栏指南
function navGuide(): DefaultTheme.NavItemWithLink[] {
    return [
        {text: '任务类型', link: '/热门模式/仲裁/'},
        {text: '热门玩法', link: '/热门玩法/仲裁/'},
    ]
}


//侧边栏热门玩法
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
    ]
}

//侧边栏机制
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

//侧边栏战甲
function sidebarBuild(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: '战甲',
            collapsed: false,
            items: [
                {text: '伏特', link: '/战甲/'},
            ]
        },
        {
            text: '武器',
            collapsed: false,
            items: [
                {text: '伏特', link: '/伏特'},
            ]
        }
    ]
}

//侧边栏最新
function sidebarLatest(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: "最新",
            collapsed: false,
            items: [
                {text: '新战甲', link: '/减伤机制综述'},
                {text: '新武器', link: '/减伤机制综述'},
                {text: '新模式', link: '/减伤机制综述'},
                {text: '新玩法', link: '/中断/无'}
            ]
        }
    ]
}
