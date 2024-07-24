<script>
export default {
  data() {
    return {
      socialLinks: [
        { name: 'Facebook', icon: 'typcn:social-facebook', url: 'https://www.facebook.com/comewithreverse/' },
        { name: 'Instagram', icon: 'mdi:instagram', url: 'https://www.instagram.com/comewithreverse/' },
        { name: 'YouTube', icon: 'mdi:youtube', url: 'https://www.youtube.com/comewithreverser' },
        { name: 'Bandcamp', icon: 'mdi:bandcamp', url: 'https://comewithreverse.bandcamp.com/' },
        { name: 'Spotify', icon: 'mdi:spotify', url: 'https://open.spotify.com/artist/4bJc7aldJQHT6QJNMq5AqB?si=6DXExsd-Remi-5RxzdPaIg' },
        { name: 'Apple Music', icon: 'mdi:apple', url: 'https://music.apple.com/us/artist/come-with-reverse/543323161' },
        { name: 'Twitter', icon: 'mdi:twitter', url: 'https://twitter.com/comewithreverse' },
        { name: 'TikTok', icon: 'ic:baseline-tiktok', url: 'https://www.tiktok.com/@comewithreverse' },
      ],
    };
  },
};
</script>

<template>
  <ul class="flex justify-center gap-2 sm:gap-4 flex-wrap">
    <li v-for="link in socialLinks" :key="link.name" class="hover:bg-gray-100 p-1 sm:p-2 rounded-full transition-all">
      <NuxtLink :to="link.url" target="_blank" class="flex items-center justify-center" :title="`Follow us on ${link.name}`">
        <Icon :name="link.icon" class="w-6 h-6 sm:w-8 sm:h-8" />
      </NuxtLink>
    </li>
  </ul>
</template>
  
  