const path = require('path');
const prismic = require('@prismicio/client');
const fetch = require('node-fetch');

const BASE_URL = '/docs';

module.exports = {
  title: 'Navify Documentation',
  tagline:
    'Navify is the app platform for web developers. Build amazing mobile, web, and desktop apps all with one shared code base and open web standards',
  url: 'https://navifyframework.web.app',
  baseUrl: `${BASE_URL}/`,
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/meta/favicon.ico',
  organizationName: 'navify',
  projectName: 'navify-docs',
  themeConfig: {
    metadata: [
      {
        name: 'og:type',
        content: 'website',
      },
      {
        name: 'og:site_name',
        content: 'Navify Framework Docs',
      },
    ],
    colorMode: {
      defaultMode: 'light',
    },
    navbar: {
      logo: {
        alt: 'Site Logo',
        src: `/logos/navify-text.svg`,
        href: '/',
        target: '_self',
        width: 139,
        height: 28,
      },
      items: [
        {
          type: 'doc',
          docId: 'index',
          label: 'Guide',
          position: 'left',
        },
        {
          type: 'doc',
          docId: 'components',
          label: 'Components',
          position: 'left',
        },
        {
          type: 'doc',
          docId: 'cli',
          label: 'CLI',
          position: 'left',
        },
        {
          type: 'doc',
          docId: 'native',
          label: 'Native',
          position: 'left',
        },
        {
          type: 'search',
          position: 'right',
        },
        {
          type: 'separator',
          position: 'right',
        },
        {
          type: 'localeDropdown',
          position: 'right',
          dropdownItemsBefore: [],
          className: 'icon-link language navbar__item',
        },
        {
          type: 'iconLink',
          position: 'right',
          icon: {
            alt: 'github logo',
            src: `/logos/github.svg`,
            href: 'https://github.com/navify/',
            target: '_blank',
          },
        },
      ],
    },
    prism: {
      theme: { plain: {}, styles: [] },
      // https://github.com/FormidableLabs/prism-react-renderer/blob/master/src/vendor/prism/includeLangs.js
      additionalLanguages: ['shell-session', 'http'],
    },
    // algolia: {
    //   appId: '8T24EUBIR4',
    //   apiKey: '8ef30cafe86472f389e9e107b6db9507',
    //   indexName: 'navifyframework',
    //   contextualSearch: true,
    // },
  },
  plugins: [
    'docusaurus-plugin-sass',
    [
      'docusaurus-plugin-module-alias',
      {
        alias: {
          'styled-components': path.resolve(__dirname, './node_modules/styled-components'),
          react: path.resolve(__dirname, './node_modules/react'),
          'react-dom': path.resolve(__dirname, './node_modules/react-dom'),
          '@components': path.resolve(__dirname, './src/components'),
        },
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        routeBasePath: '/',
        sidebarPath: require.resolve('./sidebars.js'),
        // editUrl: ({ versionDocsDirPath, docPath }) => {
        //   if ((match = docPath.match(/api\/(.*)\.md/)) != null) {
        //     return `https://github.com/navify/navify-docs/tree/main/docs/api/${match[1]}.md`;
        //   }
        //   if ((match = docPath.match(/cli\/commands\/(.*)\.md/)) != null) {
        //     return `https://github.com/navify/navify-cli/edit/main/packages/@navify/cli/src/commands/${match[1].replace(
        //       '-',
        //       '/'
        //     )}.ts`;
        //   }
        //   if ((match = docPath.match(/native\/(.*)\.md/)) != null) {
        //     return `https://github.com/navify/jigra-plugins/edit/main/${match[1]}/README.md`;
        //   }
        //   return `https://github.com/navify/navify-docs/edit/main/${versionDocsDirPath}/${docPath}`;
        // },
        // exclude: ['README.md'],
      },
    ],
    '@docusaurus/plugin-content-pages',
    '@docusaurus/plugin-debug',
    '@docusaurus/plugin-sitemap',
  ],
  themes: [
    [
      //overriding the standard docusaurus-theme-classic to provide custom schema
      path.resolve(__dirname, 'docusaurus-theme-classic'),
      {
        customCss: [
          require.resolve('./node_modules/modern-normalize/modern-normalize.css'),
          require.resolve('./node_modules/@navify-internal/navify-ds/dist/tokens.css'),
          require.resolve('./src/styles/custom.scss'),
        ],
      },
    ],
    // path.resolve(__dirname, './node_modules/@docusaurus/theme-search-algolia'),
  ],
  customFields: {},
};
