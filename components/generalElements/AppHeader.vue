<template>
  <header class="sticky top-0 z-40 bg-white shadow-sm shadow-light-500" id="top">
    <div class="container flex items-center justify-between py-4">
      <div class="flex items-center">
        <!-- <MenuTrigger class="lg:hidden" /> -->
        <Logo />
      </div>
      <MainMenu class="items-center hidden gap-10 text-sm text-gray-500 lg:flex lg:px-4" />

      <div class="flex gap-8 justify-end items-center">
        <NuxtLink to="/products" class="lg:hidden flex items-center justify-center bg-gray-100 text-gray-600 px-4 py-2 rounded-full hover:bg-gray-200">
          <Icon name="ion:bag-outline" size="21" class="mr-2" />
          <span>Shop</span>
        </NuxtLink>
        <NuxtLink to="/my-account" class="sm:hidden">
          <Icon name="ion:person-outline" size="21" class="mr-1 md:mr-0 mt-1" />
        </NuxtLink>
        <SignInLink />
        <CartTrigger />
      </div>
    </div>
  </header>
</template>