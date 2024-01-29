<script setup lang="ts">
const photos = await queryContent('photos').findOne();
</script>

<template>
    <h2 class="text-center text-5xl mt-20 mb-10">Photos</h2>
    <div class="grid grid-cols-4 gap-4">
        <div v-for="photo in photos.body" :key="photo.src" class="relative overflow-hidden">
            <NuxtImg class="w-full h-auto pb-5 block transform transition-transform duration-300 hover:scale-105"
                :src="`/${photo.src}`" :alt="photo.alt" format="webp" />
        </div>
    </div>
</template>