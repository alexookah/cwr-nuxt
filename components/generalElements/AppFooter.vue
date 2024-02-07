<script setup lang="ts">
const currentYear = new Date().getFullYear();
</script>

<template>
  <footer class="bg-white order-last">
    <div class="container flex flex-wrap justify-between gap-12 mt-12 md:gap-24">

      <!-- <div class="w-3/7 lg:w-auto">
        <div class="mb-1 font-semibold">Information</div>
        <div class="text-sm">
          <a class="py-1.5 block"
            href="https://github.com/scottyzen/woonuxt?tab=readme-ov-file#next-generation-front-end-for-woocommerce"
            target="_blank">About</a>
          <a href="/" class="py-1.5 block">Careers</a>
          <a href="/" class="py-1.5 block">Press</a>
          <a href="https://woonuxt.com/faq" class="py-1.5 block" rel="noreferrer" target="_blank">FAQ's</a>
        </div>
      </div> -->

      <div class="w-3/7 lg:w-auto">
        <div class="mb-1 font-semibold">{{ $t('messages.general.customerService') }}</div>
        <div class="text-sm">
          <NuxtLink to="/contact" class="py-1.5 block">Contact Us</NuxtLink>
          <a href="/" class="py-1.5 block">Shipping & Returns</a>
          <a href="/" class="py-1.5 block">Privacy Policy</a>
          <a href="/" class="py-1.5 block">Terms & Conditions</a>
        </div>
      </div>
      <div class="w-3/7 lg:w-auto">
        <div class="mb-1 font-semibold">{{ $t('messages.account.myAccount') }}</div>
        <div class="text-sm">
          <NuxtLink to="/my-account/" class="py-1.5 block">{{ $t('messages.account.myAccount') }}</NuxtLink>
          <NuxtLink to="/my-account/?tab=orders" class="py-1.5 block">{{ $t('messages.shop.orderHistory') }}</NuxtLink>
          <NuxtLink to="/wishlist" class="py-1.5 block">{{ $t('messages.shop.wishlist') }}</NuxtLink>
          <!-- <a href="/" class="py-1.5 block">{{ $t('messages.general.newsletter') }}</a> -->
        </div>
      </div>
    </div>

    <nav>
      <ul class="flex items-center justify-center space-x-10 pb-5">
        <Socials />
      </ul>
    </nav>

    <div class="container border-t">
      <div class="copywrite text-center">

        <p class="py-4">
          <a href="mailto:contact@comewithreverse.com">contact@comewithreverse.com</a>
        </p>
        <p class="py-4 text-xs ">
          {{ currentYear }} © COME WITH REVERSE
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="postcss">
a {
  @apply hover:underline;
}
</style>
