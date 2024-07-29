<script setup lang="ts">
const currentYear = new Date().getFullYear();
const { viewer } = useAuth();
</script>

<template>
  <footer class="bg-white order-last">
    <div class="max-w-4xl mx-auto p-5">
      <div
        class="container flex flex-wrap justify-between gap-12 mt-6 md:gap-24 md:max-w-[50%]"
      >
        <div class="w-3/7">
          <div class="text-sm">
            <NuxtLink to="/shipping-and-returns" class="py-1.5 block"
              >Shipping & Returns</NuxtLink
            >
            <NuxtLink to="/privacy-policy" class="py-1.5 block"
              >Privacy Policy</NuxtLink
            >
            <NuxtLink href="/terms-and-conditions" class="py-1.5 block"
              >Terms & Conditions</NuxtLink
            >
            <NuxtLink to="/contact" class="py-1.5 block">Contact Us</NuxtLink>
          </div>
        </div>
        <div class="w-3/7">
          <!-- <div class="mb-1 font-semibold">{{ $t('messages.account.myAccount') }}</div> -->
          <div class="text-sm">
            <NuxtLink to="/products" class="py-1.5 block">Shop</NuxtLink>
            <NuxtLink to="/my-account" class="py-1.5 block">{{
              $t("messages.account.myAccount")
            }}</NuxtLink>
            <NuxtLink to="/my-account/?tab=orders" class="py-1.5 block">{{
              $t("messages.shop.orderHistory")
            }}</NuxtLink>
            <NuxtLink
              :to="viewer ? '/my-account?tab=wishlist' : '/wishlist'"
              class="py-1.5 block"
              >{{ $t("messages.shop.wishlist") }}</NuxtLink
            >
            <!-- <a href="/" class="py-1.5 block">{{ $t('messages.general.newsletter') }}</a> -->
          </div>
        </div>
      </div>
    </div>

    <nav>
      <Socials class="pb-3 pt-6" />
    </nav>

    <div class="container border-t">
      <div class="copywrite text-center">
        <p class="py-4">
          <a href="mailto:contact@comewithreverse.com"
            >contact@comewithreverse.com</a
          >
        </p>
        <p class="py-4 text-xs">{{ currentYear }} © COME WITH REVERSE</p>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="postcss">
a {
  @apply hover:underline;
}
</style>
