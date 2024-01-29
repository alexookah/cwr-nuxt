<script setup lang="ts">
const events = await queryContent('events').sort({ releaseDate: -1 }).find();
</script>

<template>
    <h2 class="text-center text-5xl mt-20 mb-10">Events</h2>
    <div class="grid grid-cols-4 gap-4">
        <div v-for="event in events" :key="event.slug" class="relative overflow-hidden">
            <router-link :to="`/albums/${event.slug}`">
                <NuxtImg class="w-full h-auto pb-5 block transform transition-transform duration-300 hover:scale-105"
                :src="event.image.src" :alt="event.image.alt" format="webp" />
            </router-link>
        </div>
    </div>
</template>