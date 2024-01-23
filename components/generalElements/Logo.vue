<script setup lang="ts">
const runtimeConfig = useRuntimeConfig();
const logoUrl = runtimeConfig?.public?.LOGO || null;
</script>

<template>
  <NuxtLink to="/">
    <img v-if="logoUrl" :src="logoUrl" alt="Logo" class="object-contain h-10" />
    <div v-else class="flex items-center gap-2 text-lg font-bold">
      <NuxtImg
        :width="50"
        :height="50"
        src="/images/cwr_small.png"
        fit="outside"
        format="webp"
        densities="x1 x2" />

    </div>
  </NuxtLink>
</template>