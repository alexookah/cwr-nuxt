<script lang="ts" setup>

useSeoMeta({
  title: 'Dark Pop Band',
  ogTitle: 'Dark Pop Band from Thessaloniki - Come with Reverse',
  description: 'Come with Reverse, a dark pop band from Thessaloniki, blends classical and ethnic influences in their debut album, aiming for diverse musical collaborations',
  ogDescription: 'Come with Reverse is a dark pop band',
  ogImage: 'https://comewithreverse.com/logo-black.svg',
  twitterCard: 'summary_large_image',
});

</script>

<template>
  <main class="py-10">
    <HeroBanner />

    <div class="container">
      <Albums />
      <Events />
      <Photos />
      <AboutUs />
    </div>

  </main>
</template>
