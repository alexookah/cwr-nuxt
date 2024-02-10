export default defineNuxtConfig({
  // Get all the pages, components, composables and plugins from the parent theme
  extends: ['./woonuxt_base'],
  components: [{ path: './components', pathPrefix: false }],
  modules: ['@nuxt/content'],
  app: {
    head: {
      titleTemplate: `%s | Come with Reverse`,
      link: [
        { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' },
        // { rel: 'icon', href: '/favicon.png', type: 'image/png' },
        // { rel: 'icon', href: '/favicon.ico', type: 'image/x-icon' }
      ],
    },
  },

  /**
   * Depending on your servers capabilities, you may need to adjust the following settings.
   * It will affect the build time but also increase the reliability of the build process.
   * If you have a server with a lot of memory and CPU, you can remove the following settings.
   * @property {number} concurrency - How many pages to prerender at once
   * @property {number} interval - How long to wait between prerendering pages
   * @property {boolean} failOnError - This stops the build from failing but the page will not be statically generated
   */
  nitro: {
    prerender: {
      concurrency: 10,
      interval: 1000,
      failOnError: false,
    },
  },
});
