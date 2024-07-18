<template>
  <nav>
    <NuxtLink to="/">{{ $t('messages.general.home') }}</NuxtLink>
    <!-- <NuxtLink to="/products"> Shop </NuxtLink> -->
    <NuxtLink to="/products" class=" flex items-center justify-center bg-gray-200 text-gray-600 px-4 py-2 rounded-full ml-4 hover:bg-gray-300">
      <Icon name="ion:bag-outline" size="21" class="mr-2" />
      <span>Shop</span>
    </NuxtLink>

    <NuxtLink to="/contact">{{ $t('messages.general.contact') }}</NuxtLink>

    <NuxtLink class="lg:hidden" to="/wishlist" :prefetch="false">Wishlist</NuxtLink>
    <NuxtLink class="lg:hidden" to="/my-account" :prefetch="false">My Account</NuxtLink>
  </nav>
</template>