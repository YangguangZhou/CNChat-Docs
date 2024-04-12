import { createRequire } from 'module'
import { defineConfig, type DefaultTheme } from 'vitepress'

const require = createRequire(import.meta.url)
const pkg = require('vitepress/package.json')

export default defineConfig({
  title: 'RawChat',
  lang: 'zh-CN',
  description: 'RawChat-ChatGPT官网镜像站',
  cleanUrls: true,
  // locales: locales.locales,
  // srcDir: './docs',
  lastUpdated: true,
  head: [
    // [
    //   'script',
    //   { async: '', async: '', 'data-website-id': '4da319ee-96d6-4af0-8854-7db1b19266da', src: 'https://umami.jerryz.com.cn/script.js' }
    // ],
    [
      'script',
      { async: '', src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2597042766299857', crossorigin: 'anonymous' } 
    ]
    // <script async src="https://umami.jerryz.com.cn/script.js" data-website-id="4da319ee-96d6-4af0-8854-7db1b19266da"></script>
    // <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2597042766299857" crossorigin="anonymous"></script>
  ],
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh_CN'
    }
  },
  themeConfig: {
    nav: nav(),
    outlineTitle: '本文目录',
    darkModeSwitchLabel: '外观',
    sidebarMenuLabel: '目录',
    returnToTopLabel: '回到顶部',
    sidebar: {
      '/guide/': sidebarGuide(),
      '/advance/': sidebarAdvance()
    },
    lastUpdatedText: '最后更新',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/YangguangZhou/RawChat-Docsl' },
      {
        icon: {
          svg: '<svg t="1679664028332" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1215" width="200" height="200"><path d="M679.424 746.861714l84.004571-395.995428c7.424-34.852571-12.580571-48.566857-35.437714-40.009143l-493.714286 190.281143c-33.718857 13.129143-33.133714 32-5.705142 40.557714l126.281142 39.424 293.156572-184.576c13.714286-9.142857 26.294857-3.986286 16.018286 5.156571l-237.129143 214.272-9.142857 130.304c13.129143 0 18.870857-5.705143 25.709714-12.580571l61.696-59.428571 128 94.281142c23.442286 13.129143 40.009143 6.290286 46.299428-21.723428zM1024 512c0 282.843429-229.156571 512-512 512S0 794.843429 0 512 229.156571 0 512 0s512 229.156571 512 512z" fill="" p-id="1216"></path></svg>'
        },
        link: 'https://cn.ai0.cn/'
      }

    ],
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },
    footer: {
      message: 'Released under the Mozilla Public License.',
      copyright: 'Copyright © 2024 Jerry Zhou(https://jerryz.com.cn) and RawChat Team'
    },
    editLink: {
      pattern: 'https://github.com/YangguangZhou/RawChat-Docs/blob/main/docs/:path',
      text: '在 GitHub 中编辑本页'
    },
    logo: 'https://cdn.jerryz.com.cn/gh/YangguangZhou/RawChat-Docs@main/docs/public/rawchat.png',
  }
})

function nav(): DefaultTheme.NavItem[] {
  return [
    { text: '使用教程', link: '/guide/introduction' },
    { text: '进阶教程', link: '/advance/prompt' },
    { text: '开始使用', link: 'https://cn.ai0.cn/' },
    { text: 'Github', link: 'https://github.com/YangguangZhou/RawChat-Docs' }
  ]
}

function sidebarGuide(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: '使用教程',
      items: [
        { text: '介绍', link: '/guide/introduction' },
        { text: '使用教程', link: '/guide/guide' },
        { text: '技术原理', link: '/guide/principle' },
        { text: '常见问题', link: '/guide/faq' },
        { text: '关于', link: '/guide/about' },
      ]
    }
  ]
}

function sidebarAdvance(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: '进阶教程',
      items: [
        { text: '身份提示词', link: '/advance/prompt' },
        { text: 'DALL·E 3', link: '/advance/dalle3' }
      ]
    }
  ]
}

