import { defineConfigWithTheme } from 'witepress'
import type { Config as ThemeConfig } from '@kdujs/theme'
import baseConfig from '@kdujs/theme/config'
import { headerPlugin } from './headerMdPlugin'

const nav = [
  {
    text: 'Docs',
    activeMatch: `^/(docs)/`,
    items: [
      { text: 'Guide', link: '/docs/' },
    ]
  },
  {
    text: 'About',
    activeMatch: `^/about/`,
    items: [
      { text: 'FAQ', link: '/about/faq' },
      { text: 'Team', link: '/about/team' },
      { text: 'Code of Conduct', link: '/about/coc' }
    ]
  }
]

export const sidebar = {
  '/docs/': [
    {
      text: 'Getting Started',
      items: [
        { text: 'Overview', link: '/docs/' },
        { text: 'Environment Setup', link: '/docs/intro/environment' },
        { text: 'CLI Install', link: '/docs/intro/cli' },
        { text: 'Packages & CDN', link: '/docs/intro/cdn' },
        { text: 'Next Steps', link: '/docs/intro/next' },
      ]
    },
    {
      text: 'Developing',
      items: [
        { text: 'Starting', link: '/docs/developing/starting' },
        { text: 'Previewing', link: '/docs/developing/previewing' },
        { text: 'Developing for iOS', link: '/docs/developing/ios' },
        { text: 'Developing for Android', link: '/docs/developing/android' },
        { text: 'Development Tips', link: '/docs/developing/tips' },
        { text: 'Hardware Back Button', link: '/docs/developing/hardware-back-button' },
        { text: 'Keyboard', link: '/docs/developing/keyboard' },
      ]
    },
    {
      text: 'Layout',
      items: [
        { text: 'Structure', link: '/docs/layout/structure' },
        { text: 'Responsive Grid', link: '/docs/layout/grid' },
        { text: 'Global Stylesheets', link: '/docs/layout/global-stylesheets' },
        { text: 'CSS Utilities', link: '/docs/layout/css-utilities' },
      ]
    },
    {
      text: 'Theming',
      items: [
        { text: 'Basics', link: '/docs/theming/basics' },
        { text: 'Platform Styles', link: '/docs/theming/platform-styles' },
        { text: 'CSS Variables', link: '/docs/theming/css-variables' },
        { text: 'CSS Shadow Parts', link: '/docs/theming/css-shadow-parts' },
        { text: 'Colors', link: '/docs/theming/colors' },
      ]
    },
    {
      text: 'Kdu',
      items: [
        { text: 'Overview', link: '/docs/kdu/overview' },
      ]
    },
    {
      text: 'Reference',
      items: [
        { text: 'Glossary', link: '/docs/reference/glossary' },
      ]
    }
  ]
}

export default defineConfigWithTheme<ThemeConfig>({
  extends: baseConfig,

  lang: 'en-US',
  title: 'Navify',
  description: 'Navify - The Progressive JavaScript Framework',
  srcDir: 'src',
  srcExclude: ['tutorial/**/description.md'],
  scrollOffset: 'header',

  themeConfig: {
    nav,
    sidebar,

    socialLinks: [
      { icon: 'languages', link: '/translations/' },
      { icon: 'github', link: 'https://github.com/navify/' }
    ],

    editLink: {
      repo: 'navify/navify-docs',
      text: 'Edit this page on GitHub'
    },

    footer: {
      license: {
        text: 'MIT License',
        link: 'https://opensource.org/licenses/MIT'
      },
      copyright: `Copyright © 2022-present Navify`
    }
  },

  markdown: {
    config(md) {
      md.use(headerPlugin)
    }
  },

  wite: {
    define: {
      __KDU_OPTIONS_API__: false
    },
    optimizeDeps: {
      include: ['gsap', 'dynamics.js'],
      exclude: ['@kdujs/repl']
    },
    // @ts-ignore
    ssr: {
      external: ['@kdujs/repl']
    },
    server: {
      host: true,
      fs: {
        // for when developing with locally linked theme
        allow: ['../..']
      }
    },
    build: {
      minify: 'terser',
      chunkSizeWarningLimit: Infinity
    },
    json: {
      stringify: true
    }
  },

  kdu: {
    reactivityTransform: true
  }
})
