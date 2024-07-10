<template>
  <header class="sticky top-0 z-40 bg-white shadow-sm shadow-light-500" id="top">
    <div class="container flex items-center justify-between py-4">
      <div class="flex items-center">
        <!-- <MenuTrigger class="lg:hidden" /> -->
        <Logo />
      </div>
      <MainMenu class="items-center hidden gap-10 text-sm text-gray-500 lg:flex lg:px-4" />
      <div class="flex gap-6 justify-end items-center">
        <NuxtLink to="/products" class="lg:hidden pb-1" title="Shop"><Icon name="ion:bag-outline" size="21" /></NuxtLink>
        <NuxtLink to="/my-account" class="sm:hidden pb-1"><Icon name="ion:person-outline" size="21" /></NuxtLink>
        <SignInLink />
        <CartTrigger />
      </div>
    </div>
  </header>
</template>