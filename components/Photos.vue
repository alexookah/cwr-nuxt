<script setup lang="ts">
import { useNuxtApp } from 'nuxt/app';

const result = await queryCollection('photos').first();
const photos = result.images;

const { $openLightbox } = useNuxtApp();
const openImageInLightbox = (src: string) => {
  $openLightbox(photos, src);
};
</script>

<template>
  <div>
    <h2 class="text-4xl text-center mt-20 mb-10">Photos</h2>
    <div class="masonry">
      <div v-for="photo in photos" :key="photo.src" class="masonry-item">
        <NuxtImg
          class="block w-full h-auto transition-transform duration-300 hover:scale-105 cursor-pointer"
          :src="photo.src"
          :alt="photo.alt"
          format="avif,webp"
          loading="lazy"
          :width="photo.width"
          :height="photo.height"
          @click="openImageInLightbox(photo.src)" />
      </div>
    </div>
  </div>
</template>


<style scoped>
.masonry {
  column-count: 4;
  column-gap: 1em;
}

.masonry-item {
  break-inside: avoid-column;
  padding-bottom: 1em;
}

@media (max-width: 640px) {
  .masonry {
    column-count: 2;
  }
}

/* @media (max-width: 480px) {
  .masonry {
    column-count: 1;
  }
} */

html.glightbox-open {
  overflow: unset;
}
</style>
