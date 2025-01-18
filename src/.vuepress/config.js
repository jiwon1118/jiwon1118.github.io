import { defaultTheme, defineUserConfig } from 'vuepress'
import { searchPlugin } from '@vuepress/plugin-search'
import { backToTopPlugin } from '@vuepress/plugin-back-to-top'
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'

export default defineUserConfig({
  sourceDir: "src",
  dest: "docs/",
  
  lang: 'en-US',

  title: 'team sunsin',
  description: "study hard.",

  head: [
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'tech-blog:jiwon1118' }],
    ['meta', { property: 'og:description', content: "Hello!" }],
    ['meta', { property: 'og:image', content: 'https://jiwon1118.github.io/images/jiwon-template.png' }],
    ['meta', { property: 'og:url', content: 'https://jiwon1118.github.io' }],
  ],
  
  locales: {
    // The key is the path for the locale to be nested under.
    // As a special case, the default locale can use '/' as its path.
    '/en/': {
      lang: 'en-US',
    //   title: 'tech-blog:cashmallow',
    //   description: "cashmallow dev team's technology blog about wanting to contribute to the open source ecosystem",
    },
    '/': {
      lang: 'ko-KR',
    //   title: 'tech-blog:cashmallow',
    //   description: "cashmallow dev team's technology blog about wanting to contribute to the open source ecosystem",
    },
  },


  locales: {
    '/zh/': {
      lang: 'zh-CN',
    },
    '/en/': {
      lang: 'en-US',
    },
    '/': {
      lang: 'ko-KR',
    },
  },

  theme: defaultTheme({
    selectLanguageText: "lang",

    locales: {
      '/zh/': {
        selectLanguageName: '简体中文',
      },
      '/en/': {
        selectLanguageName: 'English',
      },
      '/': {
        selectLanguageName: '한국어',
      },
    },

    logo: "/images/leaf.png",
    logoDark: "/images/apple.png",

    repo: "https://github.com/oss-cashmallow/oss-cashmallow.github.io/discussions",
    repoLabel: "discussions",

    contributors: false,

    editLink: false,
    // editLinkText: '✏️',

    lastUpdated: true,
    lastUpdatedText: "Last Updated",

    colorMode: "auto",
    colorModeSwitch: true,

    navbar: [
      { text: "jiwon", link: "https://github.com/jiwon1118" },
      { text: "resume", link: "/resume" },
    ],

    sidebar: {
      "/": [
        {
          text: "resume",
          collapsible: true,
          children: [
            "/resume/#executive-summary",
	    "/resume/#working-experience",
	    "/resume/#projects",
	    "/resume/#education",
	    "/resume/#qualifications",
	
          ],
        },
        {
          text: "team",
          collapsible: true,
          children: [
            "/team/tiger/",
            "/team/recruit/",
            "/team/how2pr/",
            "/team/tiger2agile/",
          ],
        },
        {
          text: "opensource",
          collapsible: true,
          children: [
            "/tech/share/opensource/",
          ],
        },
      ],
    },
  }),

  plugins: [
    searchPlugin({

    }),
    backToTopPlugin(),
    googleAnalyticsPlugin({
      id: "G-FLZV4X141M",
      debug: true,
    }),
  ],

})

