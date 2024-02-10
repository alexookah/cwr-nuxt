<script lang="ts" setup>

useSeoMeta({
  title: 'Come With Reverse - Experimental Dark Pop Band from Thessaloniki, Greece',
  ogTitle: `Come With Reverse`,
  description: 'Come With Reverse is an experimental dark pop band from Thessaloniki, Greece. Influenced by classical and traditional-ethnic music, their debut album features innovative orchestration and timbre. Expressing all aspects of the human experience, they aspire to collaborate on future projects with diverse genres of music.',
  ogDescription: `Come With Reverse is an experimental dark pop band from Thessaloniki, Greece`,
  ogImage: 'https://comewithreverse.com/logo-black.svg',
  twitterCard: `summary_large_image`,
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