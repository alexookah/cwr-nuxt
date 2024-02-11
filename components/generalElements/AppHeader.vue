<template>
    <header class="sticky top-0 z-40 bg-white shadow-sm shadow-light-500" id="top">
      <div class="container flex items-center justify-between py-4">
        <div class="flex items-center">
          <!-- <MenuTrigger class="lg:hidden" /> -->
          <Logo />
        </div>
        <MainMenu class="items-center hidden gap-10 text-sm text-gray-500 lg:flex lg:px-4" />
        <div class="flex gap-4 justify-end items-center">
          <NuxtLink to="/products" class="lg:hidden" title="Shop">
            <Icon name="ph:t-shirt" size="20" />
          </NuxtLink>
          <NuxtLink to="/wishlist" title="Wishlist">
            <Icon name="ion:heart-outline" size="20" />
          </NuxtLink>
          <SignInLink />
          <CartTrigger />
        </div>
      </div>
    </header>
  </template>