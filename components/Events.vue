<script setup lang="ts">
const events = await queryContent('events').sort({ date: -1 }).find();
</script>

<template>
    <h2 class="text-4xl text-center mt-20 mb-10">Events</h2>
    <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div v-for="event in events" :key="event.slug" class="relative overflow-hidden">
            <NuxtLink :to="`/event/${decodeURIComponent(event.slug)}`" :title="event.name">
                <NuxtImg class="w-full h-auto pb-5 block transform transition-transform duration-300 hover:scale-105"
                :src="event.image.src" :alt="event.image.alt" format="avif,webp" loading="lazy" width="638" height="900"  />
            </NuxtLink>
        </div>
    </div>
</template>