<script lang="ts" setup>
const route = useRoute();
const slug = route.params.event as string;
const event = await queryContent('events').where({ slug }).findOne();

const openImageInLightbox = (src: string) => {
  const { $openLightbox } = useNuxtApp();
  $openLightbox([{ src }], src);
};
</script>


<template>
  <div class="container mx-auto p-6 my-14 bg-white shadow-lg rounded-lg md:max-w-3xl">
    <h1 class="text-4xl font-bold text-center mb-6 text-gray-800">{{ event.name }}</h1>

    <div class="mb-6 flex justify-center">
      <NuxtImg
        :src="event.image.src"
        :alt="event.image.alt"
        class="w-full max-w-[300px] h-auto rounded-md shadow-sm cursor-pointer"
        @click="openImageInLightbox(event.image.src)" />
    </div>

    <div class="mb-6">
      <h2 class="text-2xl font-semibold mb-4 text-gray-700">Event Details</h2>
      <p class="mb-2 text-gray-600"><strong>Date:</strong> {{ event.date }}</p>
      <p class="mb-2 text-gray-600"><strong>Time:</strong> {{ event.time }}</p>
      <p class="mb-2 text-gray-600"><strong>Location:</strong> {{ event.location }}</p>
      <p class="mb-2 text-gray-600">
        <strong>Venue: </strong>
        <a :href="event.venueLink" target="_blank" class="underline hover:text-blue-800"> {{ event.venue }}</a>
      </p>
    </div>

    <div v-if="event.body">
      <h2 class="text-xl font-semibold mb-2">Event Info</h2>
      <div class="event-body mb-6 prose max-w-none" v-html="event.body"></div>
    </div>

    <div v-if="event.artists" class="mb-6">
      <h2 class="text-2xl font-semibold mb-4 text-gray-700">Artists</h2>
      <p class="text-gray-600">{{ event.artists }}</p>
    </div>

    <div>
      <a :href="event.eventLink" target="_blank" class="inline-block bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-full mt-4"> Event Link </a>
    </div>
  </div>
</template>