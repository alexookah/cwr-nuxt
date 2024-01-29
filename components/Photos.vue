<script setup lang="ts">
const photos = await queryContent('photos').findOne();
</script>

<template>
  <div>
    <h2 class="text-center text-5xl mt-20 mb-10">Photos</h2>
    <div class="masonry">
      <div v-for="photo in photos.body" :key="photo.src" class="masonry-item">
        <NuxtImg class="block w-full h-auto transition-transform duration-300 hover:scale-105" :src="photo.src"
          :alt="photo.alt" format="avif,webp" loading="lazy" />
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
  margin-bottom: 1em;
}

@media (max-width: 768px) {
  .masonry {
    column-count: 2;
  }
}

@media (max-width: 480px) {
  .masonry {
    column-count: 1;
  }
}
</style>
