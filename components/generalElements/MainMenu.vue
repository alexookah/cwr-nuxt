<template>
    <nav>
      <NuxtLink to="/">{{ $t('messages.general.home') }}</NuxtLink>
      <NuxtLink to="/products"> Shop </NuxtLink>
      <NuxtLink to="/contact">{{ $t('messages.general.contact') }}</NuxtLink>
  
      <NuxtLink class="lg:hidden" to="/wishlist" :prefetch="false">Wishlist</NuxtLink>
      <NuxtLink class="lg:hidden" to="/my-account" :prefetch="false">My Account</NuxtLink>
    </nav>
  </template>