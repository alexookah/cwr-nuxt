<script setup lang="ts">
const albums = await queryCollection('albums').order('releaseDate', 'DESC').all();

</script>
<template>
  <div>
    <h2 class="text-4xl text-center mt-20 mb-10">Music</h2>
    <div class="grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-5 content-center">
      <div v-for="album in albums" :key="album.slug" class="block mx-auto">
        <NuxtLink :to="`/album/${decodeURIComponent(album.slug)}`" :title="album.name">
          <template v-if="album.video">
            <video autoplay loop muted playsinline width="400" height="400" :poster="album.image.src">
              <source :src="album.video.src" type="video/webm" />
              <source :src="album.video.mp4" type="video/mp4" />
              <img :src="album.image.src" :alt="album.image.alt" />
            </video>
          </template>
          <template v-else>
            <NuxtImg :src="album.image.src" :alt="album.image.alt" height="400" width="400" format="avif,webp" loading="lazy" />
          </template>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
