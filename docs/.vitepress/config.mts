import {defineConfig, type DefaultTheme} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    cleanUrls: true,
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
        outline: {level: [2, 3], label: "大纲",},
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
            '/机制/': sidebarMachine(),
            '/配置/战甲/': sidebarWarframe(),
            '/配置/热门武器/': sidebarWeapon(),
            '/指南/任务类型/': sidebarMissionType(),
            '/指南/热门玩法/': sidebarHotPlay(),
            '/竞速/': sidebarSpeed(),
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
            link: '/机制/',
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
        {text: '热门武器', link: '/配置/热门武器/'},
    ]
}


//导航栏指南
function navGuide(): DefaultTheme.NavItemWithLink[] {
    return [
        {text: '任务类型', link: '/指南/任务类型/'},
        {text: '热门玩法', link: '/指南/热门玩法/'},
    ]
}


//侧边栏任务类型
function sidebarMissionType(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: "普通",
            collapsed: false,
            base: '/指南/任务类型/普通',
            items: [
                {text: '捕获', link: '捕获'},
                {text: '歼灭', link: '歼灭'},
                {text: '拦截', link: '拦截'},
                {text: '中断', link: '中断'},
            ]
        },
        {
            text: "自由漫游",
            collapsed: false,
            base: '/指南/任务类型/自由漫游',
            items: [
                {text: '夜灵平原', link: '捕获'},
                {text: '蜘蛛山谷', link: '歼灭'},
                {text: '拦截', link: '拦截'},
                {text: '中断', link: '中断'},
            ]
        },
        {
            text: "反重力曲翼",
            collapsed: false,
            base: '/指南/任务类型/反重力曲翼',
            items: []
        },
        {
            text: "航道星舰",
            collapsed: false,
            base: '/指南/任务类型/航道星舰',
            items: []
        },
        {
            text: "石榴2代",
            collapsed: false,
            base: '/指南/任务类型/石榴2代',
            items: []
        },
    ]
}

//侧边栏机制
function sidebarMachine(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: "机制讲堂",
            collapsed: false,
            base: '/机制/机制讲堂/',
            items: [
                {text: '01-伤害计算（待更新）', link: '01-伤害计算'},
                {text: '02-暴击（待更新）', link: '02-暴击'},
                {text: '03-量化（待更新）', link: '03-量化'},
                {text: '04-护甲（待更新）', link: '04-护甲'},
                {text: '05-部位倍率（待更新）', link: '05-部位倍率'},
                {text: '06-火焰Dot（待更新）', link: '06-火焰Dot'},
                {text: '07-电、毒气Dot（待更新）', link: '07-电、毒气Dot'},
                {text: '08-射线的多重（待更新）', link: '08-射线的多重'},
                {text: '09-真理密语（待更新）', link: '09-真理密语'},
                {text: '10-重击触染（待更新）', link: '10-重击触染'},
                {text: '11-投射物类技能（待更新）', link: '11-投射物类技能'},
                {text: '12-成长系数（待更新）', link: '12-成长系数'},
                {text: '13-减伤综述', link: '13-减伤综述'},
            ]
        },
        {
            text: '机制研究',
            collapsed: false,
            base: '/机制/机制研究/',
            items: []
        }
    ]
}

//侧边栏战甲
function sidebarWarframe(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: '战甲',
            collapsed: false,
            base: '/配置/战甲/',
            items: [
                {text: '伏特', link: '伏特'},
            ]
        },
    ]
}


//侧边栏武器
function sidebarWeapon(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: '主手',
            collapsed: false,
            base: '/配置/热门武器/主手/',
            items: [
                {text: '爆裂生化炮', link: '爆裂生化炮'},
            ]
        },
        {
            text: '副手',
            collapsed: false,
            base: '/配置/热门武器/副手/',
            items: [
                {text: '阿利乌', link: '阿利乌'},
            ]
        },
        {
            text: '近战',
            collapsed: false,
            base: '/配置/热门武器/近战/',
            items: [
                {text: '真理权杖', link: '真理权杖'},
            ]
        },
    ]
}

//侧边栏竞速
function sidebarSpeed(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: '竞速',
            collapsed: false,
            base: '/竞速/',
            items: [
                {text: '中断竞速浅谈', link: '中断竞速浅谈'},
            ]
        }
    ]
}


//侧边栏热门玩法
function sidebarHotPlay(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: "前期",
            collapsed: false,
            base: '/指南/热门玩法/前期/',
            items: [
                {text: '4K（待更新）', link: '4k'},
            ]
        },
        {
            text: "中期",
            collapsed: false,
            base: '/指南/热门玩法/中期/',
            items: [
                {text: '赤毒、信条、安可（待更新）', link: '赤毒、信条、安可'},
            ]
        },
        {
            text: "后期",
            collapsed: false,
            base: '/指南/热门玩法/后期/',
            items: [
                {text: 'JJC（待更新）', link: 'JJC'},
                {text: '中断9999', link: '中断9999'},
                {text: '仲裁（待更新）', link: '仲裁'},
                {
                    text: '投稿',
                    collapsed: false,
                    items: [
                        {text: 'JJC玩法分享初稿', link: 'JJC玩法分享初稿'},
                    ]
                },
            ]
        },
        {
            text: "通用",
            collapsed: false,
            base: '/指南/热门玩法/通用/',
            items: [
                {text: '日、周常任务（待更新）', link: '日、周常任务'},
                {text: '星币获取（待更新）', link: '星币获取'},
                {text: '材料获取（待更新）', link: '材料获取'},
                {text: '震地（待更新）', link: '震地'},
            ]
        },
    ]
}