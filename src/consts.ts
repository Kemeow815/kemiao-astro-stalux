import type { SiteConfig, BadgeOptions } from './types';

export const site: SiteConfig = {
  /**
   * 核心站点信息
   */
  title: '喵落阁',
  titleDefault: '喵落阁',
  siteName: '喵落阁',
  author: '克喵爱吃卤面',
  
  /**
   * SEO 核心配置
   */
  description: '克喵的博客',
  url: 'https://blog.050815.xyz',
  keywords: 'Stalux, 博客, 克喵, Astro',
  lang: 'zh-CN',
  locale: 'zh_CN',
  canonical: 'https://blog.050815.xyz',

  /**
   * 站点资源配置
   */
  favicon: 'https://cn.cravatar.com/avatar/1F6C8947D35A8186A1647009BA8BC5F2?size=256',
  avatarPath: 'https://cn.cravatar.com/avatar/1F6C8947D35A8186A1647009BA8BC5F2?size=256',
  
  /**
   * <head>元素硬嵌入
   */
  head: `<meta name="nishia" content="nihaiso">
        <script>console.log("喵落阁")</script>`,

  /**
   * 站点导航配置
   */
  nav: [
    { title: '首页', path: '/', icon: 'home' },
    { title: '归档', path: '/archives', icon: 'archive' },
    { title: '分类', path: '/categories', icon: 'folder' },
    { title: '标签', path: '/tags', icon: 'tag' },
    { title: '友链', path: '/links', icon: 'link' },
    { title: '关于', path: '/about', icon: 'user' }
  ],

  /**
   * 站点特效配置
   */
  textyping: [
    '欢迎来到克喵的博客!',
    '希望你能在这里找到有趣的内容~',
    'F12看看?',
    'Hello everyone!'
  ],

  /**
   * 评论系统配置
   */
  comment: {
    waline: {
      serverURL: 'https://waline-stalux.314926.xyz', // 你的Waline服务器地址 //我加白名单了,别让我在日志里逮到你用(╯▔皿▔)╯
      lang: 'zh-CN', // 语言设置
      emoji: ['https://unpkg.com/@waline/emojis@1.1.0/weibo'], // 表情包设置
      requiredFields: [], // 必填项
      reaction: false, // 文章反应
      meta: ['nick', 'mail', 'link'], // 评论者的元数据
      wordLimit: 200, // 字数限制
      pageSize: 10 // 评论分页大小
    }
  },

  /**
   * 社交媒体链接配置
   */
  medialinks: [
    { title: 'Github', url: 'https://github.com/Kemeow815', icon: 'github' },
    { title: 'Bilibili', url: 'https://space.bilibili.com/3546643173477234', icon: 'bilibili' },
    { title: 'Twitter', url: 'https://x.com/kemiaosw', icon: 'x-twitter' },
    // { title: 'Weibo', url: 'https://weibo.com/', icon: 'sinaweibo' },
    { title: 'QQ', url: 'https://qm.qq.com/q/J9VDiX6KoS', icon: 'qq' },
    { title: 'Telegram', url: 'https://t.me/KemiaoJun', icon: 'telegram' },
    { title: 'Music', url: 'https://music.163.com/#/user/home?id=1725716511', icon: 'neteasecloudmusic' },
  ],

  /**
   * 友情链接配置
   */
  friendlinks_title: '友链',
  friendlinks_description: '下面是我喜欢的朋友们的链接，欢迎访问他们的博客！',
  friendlinks: [
    {
      title: 'Astro',
      url: 'https://astro.build/',
      avatar: 'https://astro.build/favicon.svg',
      description: 'The web framework for content-driven websites'
    },
    {
      title: '纸鹿摸鱼处',
      url: 'https://blog.zhilu.cyou/',
      avatar: 'https://www.zhilu.cyou/api/avatar.png',
      description: '纸鹿至麓不知路，支炉制露不止漉'
    },
    {
      title: 'MDN Web Docs',
      url: 'https://developer.mozilla.org/',
      avatar: 'https://developer.mozilla.org/favicon.ico',
      description: 'Documenting web technologies, including CSS, HTML, and JavaScript, since 2005.'
    },
    {
      title: 'Simple Icons',
      url: 'https://simpleicons.org/',
      avatar: 'https://simpleicons.org/favicon.ico',
      description: '流行品牌的 3282 SVG 图标'
    },
    {
      title: 'Feather',
      url: 'https://feathericons.com/',
      avatar: 'https://feathericons.com/favicon.ico',
      description: 'Beautifully simple open-source icons'
    }
  ],

  /**
   * 页脚配置
   * 整合所有页脚相关设置，便于管理
   */
  footer: {
    // 站点构建时间，用于计算运行时长
    buildtime: '2025-06-21T22:00:00', // 站点构建时间，推荐使用ISO 8601标准格式(YYYY-MM-DDTHH:MM:SS)

    // 版权信息
    copyright: {
      enabled: true, // 是否启用版权信息
      startYear: 2025, // 可选：起始年份，如设置为2024，则显示2024-2025
      customText: '' // 可选：自定义版权文本，如为空则使用默认格式
    },

    // 主题信息
    theme: {
      showPoweredBy: true, // 是否显示"Powered by Astro"
      showThemeInfo: true // 是否显示"Theme is Stalux"
    },

    // 备案信息
    beian: {
      // ICP备案
      icp: {
        enabled: false, // 是否启用ICP备案显示
        number: '辽ICP备XXXXXXXX号' // ICP备案号，如不需要可留空
      },
      // 公安备案
      security: {
        enabled: false, // 是否启用公安备案显示
        text: '辽公网安备 XXXXXXXXXXXX号', // 公安备案号文字
        number: 'XXXXXXXXXXXX' // 公安备案号数字部分(用于链接跳转)
      }
    },

    // 徽章配置    
    badges: [
      {
        label: 'Built with',
        message: '❤',
        color: 'red',
        style: 'for-the-badge',
        alt: 'Built with Love',
        href: 'https://github.com/Kemeow815'
      },
      {
        label: 'Powered by',
        message: 'Astro',
        color: 'orange',
        style: 'flat-square',
        alt: 'Powered by Astro',
        href: 'https://astro.build/'
      },
      {
        label: 'Theme',
        message: 'Stalux',
        color: 'blueviolet',
        alt: 'Theme: Stalux',
        href: 'https://github.com/xingwangzhe/stalux'
      },
      {
        label: 'license',
        message: 'MIT',
        color: 'blue',
        alt: 'License: MIT',
        href: 'https://github.com/xingwangzhe/stalux/blob/main/LICENSE'
      },
      {
        label: '开往🚆',
        message: '友链接力',
        color: 'green',
        alt: '开往-友链接力',
        href: 'https://www.travellings.cn/go.html'
      },
      {
        label: '大佬论坛',
        message: '',
        color: 'yellowgreen',
        alt: '大佬论坛',
        href: 'https://www.dalao.net/'
      },
      {
        label: 'BlogFinder',
        message: '',
        color: 'purple',
        alt: 'BlogFinder',
        href: 'https://bf.zzxworld.com/'
      },
      {
        label: '空间穿梭',
        message: '',
        color: 'teal',
        alt: '空间穿梭-随机访问BlogsClub成员博客',
        href: 'https://www.blogsclub.org/go'
      },
      // {
      //   label: '多吉云',
      //   message: 'CDN',
      //   color: 'lightblue',
      //   alt: '多吉云CDN',
      //   href: 'https://www.dogecloud.com/?iuid=11702'
      // },
      {
        label: '十年之约',
        message: '',
        color: 'brightgreen',
        alt: '十年之约',
        href: 'https://www.foreverblog.cn/blog/6304.html'
      },
      {
        label: '博客宇宙',
        message: '',
        color: 'darkblue',
        alt: '博客宇宙',
        href: 'https://blogverse.cn/'
      }
    ] as BadgeOptions[]
  }
}
