<script lang="ts" setup>
const route = useRoute();
const slug = route.params.album as string;
const album = await queryContent('albums').where({ slug }).findOne();

function getLinkIconDetails(source: string) {
  const linkIcons: Record<string, { name: string; ariaLabel: string }> = {
    youtube: { name: 'mdi:youtube', ariaLabel: 'Watch on YouTube' },
    lyrics: { name: 'mdi:music-note', ariaLabel: 'View lyrics' },
    bandcamp: { name: 'mdi:bandcamp', ariaLabel: 'Listen on Bandcamp' },
    spotify: { name: 'mdi:spotify', ariaLabel: 'Listen on Spotify' },
    apple: { name: 'mdi:apple', ariaLabel: 'Listen on Apple Music' },
  };

  // Normalize the source to lowercase to ensure case-insensitive matching.
  const safeSource = source.toLowerCase();
  const iconDetails = linkIcons[safeSource];

  return {
    iconName: iconDetails ? iconDetails.name : '',
    ariaLabel: iconDetails ? iconDetails.ariaLabel : 'Open link',
  };
}

useSeoMeta({
  title: `${album.name}`,
  ogTitle: `${album.name} - Come With Reverse`,
  description: `Discover "${album.name}", a remarkable album by Come With Reverse, released on ${album.releaseDate}.`,
  ogDescription: `Listen to "${album.name}", an experimental dark pop album by Come With Reverse. Available now.`,
  ogImage: `https://comewithreverse.com/${album.image.src}`,
  twitterCard: `summary_large_image`,
});

const reverseDateFormat = (dateString: string) => {
  return dateString.split('-').reverse().join('-');
};
</script>

<template>
  <div class="max-w-2xl md:max-w-3xl mx-auto p-5">
    <div class="flex justify-center mb-5">
      <NuxtImg :src="album.image.src" :alt="album.image.alt" class="w-full h-auto rounded-lg" width="600" height="600" />
    </div>
    <h1 class="text-center text-4xl mb-4">{{ album.name }}</h1>
    <div class="text-center mb-6 text-xl text-gray-600">
      <span>Release Date: </span>
      <span>{{ reverseDateFormat(album.releaseDate) }}</span>
    </div>

    <div class="p-5 bg-gray-100 rounded-lg">
      <div v-html="album.notes" class="mb-5"></div>
      <div class="flex flex-col gap-2.5">
        <div v-for="song in album.songs" :key="song.name" class="bg-gray-200 p-2.5 rounded-lg">
          <div class="flex justify-between items-center">
            <h2 class="flex-grow">{{ song.name }}</h2>
            <div class="flex gap-2">
              <NuxtLink
                v-for="link in song.links"
                :key="link.source"
                :href="link.link"
                target="_blank"
                :aria-label="getLinkIconDetails(link.source).ariaLabel"
                class="flex items-center bg-gray-300 hover:bg-gray-600 px-2.5 py-1 rounded text-gray-800">
                <Icon :name="getLinkIconDetails(link.source).iconName" size="20" />
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
