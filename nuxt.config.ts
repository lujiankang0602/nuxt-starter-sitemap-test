// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['nuxt-simple-sitemap'],
  // nitro: {
  //   prerender: {
  //     crawlLinks: true,
  //     routes: ['/', 'sitemap.xml'],
  //     ignore: ['/tak', '/konfiguration', '/checkout'],
  //   },
  // },
  // site: {
  //   url: 'http://nuxtseo.com',
  // },
  sitemap: {
    sitemaps: {
      index: [
        { sitemap: 'https://www.baidu.com' },
        { sitemap: 'https://www.google.com' },
      ],
    },
  },
});
