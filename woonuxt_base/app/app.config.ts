/**
 * App configuration.
 * This file is used to configure the app settings.
 * Below are the default values.
 */
export default defineAppConfig({
  siteName: 'Come with Reverse',
  shortDescription: 'Come with Reverse is a dark pop band',
  description: 'Come with Reverse, a dark pop band from Thessaloniki, blends classical and ethnic influences in their debut album, aiming for diverse musical collaborations',
  baseUrl: 'https://comewithreverse.com',
  siteImage: 'https://comewithreverse.com/logo-black.svg',
  storeSettings: {
<<<<<<< HEAD
    autoOpenCart: true,
    showReviews: false,
    showFilters: false,
    showOrderByDropdown: false,
    showSKU: false,
    showRelatedProducts: false,
    showProductCategoriesOnSingleProduct: false,
    showBreadcrumbOnSingleProduct: false,
=======
    autoOpenCart: false,
    showReviews: true,
    showFilters: true,
    showOrderByDropdown: true,
    showSKU: true,
    showRelatedProducts: true,
    showProductCategoriesOnSingleProduct: true,
    showBreadcrumbOnSingleProduct: true,
    showMoveToWishlist: true,
>>>>>>> main
    saleBadge: 'percent', // 'percent', 'onSale' or 'hidden'
  },
});
