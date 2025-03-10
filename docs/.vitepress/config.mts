import { createRequire } from 'module'
import { defineConfig, type DefaultTheme } from 'vitepress'

const require = createRequire(import.meta.url)
const pkg = require('vitepress/package.json')

export default defineConfig({
  title: 'CNChat',
  lang: 'zh-CN',
  description: 'CNChat-ChatGPT官网镜像站',
  cleanUrls: true,
  sitemap: {
    hostname: 'https://cn.jerryz.com.cn/'
  },
  lastUpdated: true,
  head: [
    [
      'script',
      { async: '', 'data-website-id': '12a103df-d80d-4ecb-978e-1a4a48d33c0e', src: 'https://umami.jerryz.com.cn/script.js' }
    ],
    [
      'script',
      { async: '', src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2597042766299857', crossorigin: 'anonymous' } 
    ],
    // <script async src="https://umami.jerryz.com.cn/script.js" data-website-id="4da319ee-96d6-4af0-8854-7db1b19266da"></script>
    // <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2597042766299857" crossorigin="anonymous"></script>
  ],
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh_CN'
    }
  },
  search: {
    provider: 'local',
    options: {
      locales: {
        zh: {
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
                navigateText: '切换'
              }
            }
          }
        }
      }
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
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },
    footer: {
      message: 'Released under the Mozilla Public License.',
      copyright: 'Copyright © 2024 Jerry Zhou(https://jerryz.com.cn)'
    },
    logo: 'https://cdn.jerryz.com.cn/gh/YangguangZhou/CNChat-Docs@main/docs/public/cnchat.png',
  }
})

function nav(): DefaultTheme.NavItem[] {
  return [
    { text: '使用教程', link: '/guide/introduction' },
    { text: '进阶教程', link: '/advance/prompt' },
    { text: '开始使用', link: 'https://cn.ai1.bar/' },
    { text: '促销活动', link: '/guide/sales' },
    { text: '联系我们', link: '/guide/contact' },
  ]
}

function sidebarGuide(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: '使用教程',
      items: [
        { text: '介绍', link: '/guide/introduction' },
        { text: '使用教程', link: '/guide/guide' },
        { text: '模型介绍', link: '/guide/models' },
        { text: '定价', link: '/guide/pricing' },
        { text: '保存会话', link: '/guide/save' },
        { text: '技术原理', link: '/guide/principle' },
        { text: '下载应用', link: '/guide/download' },
        { text: '常见问题', link: '/guide/faq' },
        { text: '促销活动', link: '/guide/sales' },
        { text: '联系我们', link: '/guide/contact' },
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

