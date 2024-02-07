<script lang="ts" setup>
const route = useRoute();
const slug = route.params.album as string;
const album = await queryContent('albums').where({ slug }).findOne();

const getIconName = (source) => {
  const iconMap = {
    youtube: 'mdi:youtube',
    lyrics: 'mdi:music-note',
    bandcamp: 'mdi:bandcamp',
    spotify: 'mdi:spotify',
    apple: 'mdi:apple',
  };
  return iconMap[source.toLowerCase()] || '';
};
</script>

<template>
  <div class="max-w-2xl md:max-w-3xl mx-auto p-5">
    <div class="flex justify-center mb-5">
      <NuxtImg :src="album.image.src" :alt="album.image.alt" class="w-full h-auto rounded-lg" width="600" height="600" />
    </div>
    <h1 class="text-center text-4xl mb-4">{{ album.name }}</h1>
    <div class="p-5 bg-gray-100 rounded-lg">
      <div v-html="album.notes" class="mb-5"></div>
      <div class="flex flex-col gap-2.5">
        <div v-for="song in album.songs" :key="song.name" class="bg-gray-200 p-2.5 rounded-lg">
          <div class="flex justify-between items-center">
            <h2 class="flex-grow">{{ song.name }}</h2>
            <div class="flex gap-2">
              <a v-for="link in song.links" :key="link.source" :href="link.link" target="_blank" class="flex items-center bg-gray-300 hover:bg-gray-600 px-2.5 py-1 rounded text-gray-800">
                <!-- {{ link.source }} -->
                <Icon :name="getIconName(link.source)" size="20" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
