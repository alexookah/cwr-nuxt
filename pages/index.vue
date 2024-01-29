<script lang="ts" setup>

useHead({
  title:  'Come With Reverse - Experimental Dark Pop Band from Thessaloniki, Greece',
  meta: [{ name: 'description', content: 'Come With Reverse is an experimental dark pop band from Thessaloniki, Greece. Influenced by classical and traditional-ethnic music, their debut album features innovative orchestration and timbre. Expressing all aspects of the human experience, they aspire to collaborate on future projects with diverse genres of music.', }],
  link: [{ rel: 'canonical', href: 'https://v3.woonuxt.com/' }],
});
</script>

<template>
  <main>
    <HeroBanner />
    <Albums />
    <Events />
    <Photos />

  </main>
</template>

<style scoped>
.brand img {
  max-height: min(8vw, 120px);
  object-fit: contain;
  object-position: center;
}
</style>
