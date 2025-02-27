import { defineConfig } from 'vitepress'

import mathjax3 from 'markdown-it-mathjax3';

const customElements = [
  'math',
  'maction',
  'maligngroup',
  'malignmark',
  'menclose',
  'merror',
  'mfenced',
  'mfrac',
  'mi',
  'mlongdiv',
  'mmultiscripts',
  'mn',
  'mo',
  'mover',
  'mpadded',
  'mphantom',
  'mroot',
  'mrow',
  'ms',
  'mscarries',
  'mscarry',
  'mscarries',
  'msgroup',
  'mstack',
  'mlongdiv',
  'msline',
  'mstack',
  'mspace',
  'msqrt',
  'msrow',
  'mstack',
  'mstack',
  'mstyle',
  'msub',
  'msup',
  'msubsup',
  'mtable',
  'mtd',
  'mtext',
  'mtr',
  'munder',
  'munderover',
  'semantics',
  'math',
  'mi',
  'mn',
  'mo',
  'ms',
  'mspace',
  'mtext',
  'menclose',
  'merror',
  'mfenced',
  'mfrac',
  'mpadded',
  'mphantom',
  'mroot',
  'mrow',
  'msqrt',
  'mstyle',
  'mmultiscripts',
  'mover',
  'mprescripts',
  'msub',
  'msubsup',
  'msup',
  'munder',
  'munderover',
  'none',
  'maligngroup',
  'malignmark',
  'mtable',
  'mtd',
  'mtr',
  'mlongdiv',
  'mscarries',
  'mscarry',
  'msgroup',
  'msline',
  'msrow',
  'mstack',
  'maction',
  'semantics',
  'annotation',
  'annotation-xml',
  'mjx-container',
  'mjx-assistive-mml',
];




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
        {text: '仲裁', link: '/热门模式/仲裁/index'},
        {text: '中断', link: '/热门模式/中断/index'},
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/wxhn1225/Warframe-Guide' }
    ]
  },

    markdown: {
    config: (md) => {
      md.use(mathjax3);
    },
  },

})
