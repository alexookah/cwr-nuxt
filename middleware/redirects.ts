export default definePageMiddleware((to, from) => {
    if (to.path === '/shop') {
      return navigateTo('/products');
    } else if (to.path === '/contact-us') {
      return navigateTo('/contact');
    }
  });