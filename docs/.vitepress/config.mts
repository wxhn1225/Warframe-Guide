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
        ['link', {rel: 'icon', href: 'dog.png'}],
        ['link', {rel: 'stylesheet', href: 'custom.css'}], //表格居中
    ],
    lastUpdated: true,
    title: "Warframe Guide",
    description: "星际战甲知识库",
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        outline: {level: [2, 3], label: "大纲",},
        logo: '/book.png', //站点logo
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
            '/Machine/': sidebarMachine(),
            '/Build/Warframe/': sidebarWarframe(),
            '/Build/Weapon/': sidebarWeapon(),
            '/Guide/MissionType/': sidebarMissionType(),
            '/Guide/HotPlay/': sidebarHotPlay(),
            '/Speed/': sidebarSpeed(),
            '/Version/': sidebarVersion(),
            '/Chore/': sidebarChore(),
        },

        socialLinks: [
            {icon: 'bilibili', link: 'https://space.bilibili.com/3493111175055606'},
            {icon: 'github', link: 'https://github.com/wxhn1225/Warframe-Guide'}
        ],
        footer: {
            message: '星际战甲Q群：602704599',
            copyright: `版权所有 © 2025-${new Date().getFullYear()} 喜欢 | <a href="https://beian.miit.gov.cn" target="_blank">蜀ICP备2025127462号</a>`
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
            link: '/Machine/',
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
            text: '版本相关',
            link: '/Version/Note',
        }
    ]
}

//导航栏配置
function navBuild(): DefaultTheme.NavItemWithLink[] {
    return [
        {text: '战甲', link: '/Build/Warframe/'},
        {text: '热门武器', link: '/Build/Weapon/'},
    ]
}


//导航栏指南
function navGuide(): DefaultTheme.NavItemWithLink[] {
    return [
        {text: '任务类型', link: '/Guide/MissionType/'},
        {text: '热门玩法', link: '/Guide/HotPlay/'},
    ]
}


//侧边栏任务类型
function sidebarMissionType(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: "普通",
            collapsed: false,
            base: '/Guide/MissionType/普通/',
            items: [
                {text: '捕获', link: '捕获'},
                {text: '歼灭', link: '歼灭'},
                {text: '拦截', link: '拦截'},
                {text: '中断', link: '中断'},
            ]
        },
        {
            text: "霍尼瓦亚",
            collapsed: false,
            base: '/Guide/MissionType/Höllvania/',
            items: [
                {text: '舞台防御', link: 'SolsticeSquare'},
            ]
        },
        {
            text: "自由漫游",
            collapsed: false,
            base: '/Guide/MissionType/自由漫游/',
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
            base: '/Guide/MissionType/反重力曲翼/',
            items: []
        },
        {
            text: "航道星舰",
            collapsed: false,
            base: '/Guide/MissionType/航道星舰/',
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
            base: '/Machine/Lecture/',
            items: [
                {text: '01-伤害计算', link: '01-DMG'},
                {text: '02-暴击（待更新）', link: '02-Critical'},
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
                {text: '13-减伤综述', link: '13-DR'},
            ]
        },
        {
            text: '机制研究',
            collapsed: false,
            base: '/Machine/Study/',
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
            base: '/Build/Warframe/',
            items: [
                {text: '伏特（Volt）', link: '伏特'},
                {text: '剧毒之触（Saryn）', link: '剧毒之触'},
                {text: '琉璃仕女（Gara）', link: 'Gara'},
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
            base: '/Build/Weapon/Primary/',
            items: [
                {text: '爆裂生化炮（托里德）', link: '爆裂生化炮'},
            ]
        },
        {
            text: '副手',
            collapsed: false,
            base: '/Build/Weapon/Secondary/',
            items: [
                {text: '阿利乌', link: '阿利乌'},
            ]
        },
        {
            text: '近战',
            collapsed: false,
            base: '/Build/Weapon/Melee/',
            items: [
                {text: '真理权杖（执法者）', link: '真理权杖'},
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
            base: '/Speed/',
            items: [
                {text: '中断竞速浅谈', link: 'Disruption'},
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
            base: '/Guide/HotPlay/Early/',
            items: [
                {text: '4K（待更新）', link: '4k'},
            ]
        },
        {
            text: "中期",
            collapsed: false,
            base: '/Guide/HotPlay/Mid/',
            items: [
                {text: '赤毒、信条、终幕', link: 'Lich'},
            ]
        },
        {
            text: "后期",
            collapsed: false,
            base: '/Guide/HotPlay/Late/',
            items: [
                {text: 'JJC玩法分享', link: 'JJC'},
                {text: '中断9999', link: 'Disruption9999'},
                {text: '仲裁（待更新）', link: '仲裁'},
            ]
        },
        {
            text: "通用",
            collapsed: false,
            base: '/Guide/HotPlay/General/',
            items: [
                {text: '日、周常任务（待更新）', link: '日、周常任务'},
                {text: '星币获取（待更新）', link: '星币获取'},
                {text: '材料获取（待更新）', link: '材料获取'},
                {text: '震地（待更新）', link: 'Slam'},
            ]
        },
    ]
}

function sidebarVersion(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: '版本相关',
            collapsed: false,
            base: '/Version/',
            items: [
                {text: '版本重点', link: 'Note'},
                {text: '最新', link: 'New'},
            ]
        },
    ]
}

function sidebarChore(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: '杂项',
            collapsed: false,
            base: '/Chore/',
            items: [
                {text: '更新日志', link: 'Log'},
                {text: '美句', link: 'Love'},
            ]
        },
    ]
}

