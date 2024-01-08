<template>
    <nav>
      <NuxtLink to="/products">{{ $t('messages.general.allProducts') }}</NuxtLink>
      <NuxtLink to="/contact">{{ $t('messages.general.contact') }}</NuxtLink>
  
      <NuxtLink class="lg:hidden" to="/wishlist" :prefetch="false">Wishlist</NuxtLink>
      <NuxtLink class="lg:hidden" to="/my-account" :prefetch="false">My Account</NuxtLink>
    </nav>
  </template>