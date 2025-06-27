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
  description: '或许，这对我们来说，只是一个选择。',
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
  head: `<meta name="google-site-verification" content="udvo-pqn-XT_i_r8B4NUXcmbVUYvovkFioPJ59x_vqI" />`,

  /**
   * 站点导航配置 图标来自: https://feathericons.com
   */
  nav: [
    { title: '首页', path: '/', icon: 'home' },
    { title: '归档', path: '/archives', icon: 'archive' },
    { title: '分类', path: '/categories', icon: 'folder' },
    { title: '标签', path: '/tags', icon: 'tag' },
    { title: '友链', path: '/links', icon: 'link' },
    { title: '朋友圈', path: 'https://pyq.kemiao.online', icon: 'message-circle' },
    { title: '相册', path: 'https://photos.050815.xyz', icon: 'camera' },
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
      title: 'Vue',
      url: 'https://cn.vuejs.org/',
      avatar: 'https://cn.vuejs.org/logo.svg',
      description: '易学易用，性能出色，适用场景丰富的 Web 前端框架。'
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
    },
    {
      title: 'Lily Ellenvia',
      url: 'https://blog.lilynet.work',
      avatar: 'https://avatars.githubusercontent.com/u/118451956?v=4',
      description: '喜歡睡覺的普通人'
    },
    {
      title: '夜梦星尘の折腾日记',
      url: 'https://tech.yemengstar.com/',
      avatar: 'https://tech.yemengstar.com/wp-content/uploads/2024/04/cropped-yemenglogoNEW-32x32.png',
      description: '眼底星河荡漾，踏着梦走过时光。'
    },
    {
      title: '浪海导航',
      url: 'https://www.langhai.net/',
      avatar: 'https://www.langhai.net/assets/images/langhai-logo.png',
      description: '浪海导航 ~ 收录各种类型的博客以及论坛网站'
    },
    {
      title: '琼西往事',
      url: 'https://fushaolei.fun/',
      avatar: 'https://cdn.jsdelivr.net/gh/fushaolei/img/20200524104925.jpg',
      description: 'Do Not Be Sorry, Be Better'
    },
    {
      title: '龙腾收录网',
      url: 'https://dh.lt6.ltd/',
      avatar: 'https://dh.lt6.ltd/favicon.ico',
      description: '我们致力于为广大站长提供一个纯净的精品网站收录,在龙腾收录网可互换友情链接，增加彼此网站曝光度!'
    },
    {
      title: 'ksh',
      url: 'https://ksh7.com/',
      avatar: 'https://ksh7.com/img/avatar.webp',
      description: 'Life Oriented Programming'
    },
    {
      title: 'Admibrill',
      url: 'https://blog.qyadbr.top/',
      avatar: 'https://source-admibrill.pages.dev/file/f69c9c86b22cb90df18a1.png',
      description: '有志者，事竟成。'
    },
    {
      title: '纸鹿摸鱼处',
      url: 'https://blog.zhilu.cyou/',
      avatar: 'https://www.zhilu.cyou/api/avatar.png',
      description: '纸鹿至麓不知路，支炉制露不止漉'
    },
    {
      title: '大佬论坛',
      url: 'https://www.dalao.net/',
      avatar: 'https://www.dalao.net/upload/attach/202410/1_1728884298539.webp',
      description: '站长论坛，互联网站长综合交流，十年之约合作论坛'
    },
    {
      title: 'BlogFinder',
      url: 'https://bf.zzxworld.com/',
      avatar: 'https://bf.zzxworld.com/images/favicon.png',
      description: '每个博客都是一座宝藏'
    },
    {
      title: '浩瀚星河',
      url: 'https://haohanxinghe.com',
      avatar: 'https://haohanxinghe.com/assets/images/avatar.webp',
      description: '代码，日常，生活'
    },
    {
      title: '清羽飞扬',
      url: 'https://blog.liushen.fun/',
      avatar: 'https://blog.liushen.fun/info/avatar.ico',
      description: '柳影曳曳，清酒孤灯，扬笔撒墨，心境如霜'
    },
    {
      title: '时歌的博客',
      url: 'https://www.lapis.cafe/',
      avatar: 'https://www.lapis.cafe/_astro/avatar.exAKhE7w_1xwha6.webp',
      description: '理解以真实为本，但真实本身并不会自动呈现'
    },
    {
      title: '懋和道人',
      url: 'https://www.dao.js.cn/',
      avatar: 'https://img.dao.js.cn/zb_users/upload/2021/10/202110151634246697912592.png-webp',
      description: '李懋和，俗名李栋梁。书法、国画爱好者，互联网安全与前端建设者。'
    },
    {
      title: '拾柒',
      url: 'https://www.s17.cn',
      avatar: 'https://www.s17.cn/logo.png',
      description: '奇奇怪怪。'
    },
    {
      title: '洛屿的小站',
      url: 'https://www.drluo.top/',
      avatar: 'https://www.drluo.top/img/avatar.webp',
      description: '嗨，靓仔，今天也要有个好心情哦！'
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
