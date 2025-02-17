import { defineNuxtPlugin } from '#app'
import { createVNode, render } from 'vue'
import LoadProductSizeGuide from '~/components/productElements/LoadProductSizeGuide.vue'

export default defineNuxtPlugin((nuxtApp) => {

  nuxtApp.vueApp.mixin({
    mounted() {
      // Only run on product pages
      if (!this.$route || this.$route.name !== 'product-slug') return
      
      // Wait for next tick to ensure DOM is ready
      setTimeout(() => {
        // Find the first hr tag
        const firstHr = document.querySelector('.lg\\:max-w-md hr')
        if (!firstHr || !this.product) return

        // Check again in case another component added it during timeout
        if (document.querySelector('.size-guide-wrapper')) return

        // Create wrapper element
        const wrapper = document.createElement('div')
        wrapper.className = 'size-guide-wrapper mb-4'
        
        // Insert before the hr
        firstHr.parentNode?.insertBefore(wrapper, firstHr)

        // Create the size guide component
        const sizeGuide = createVNode(LoadProductSizeGuide, {
          product: this.product
        })

        // Render the component into wrapper
        render(sizeGuide, wrapper)
      }, 50)
    },
  })
})