<script lang="ts" setup>

const { description, shortDescription, siteImage } = useAppConfig();

useSeoMeta({
  title: 'Dark Pop Band',
  ogTitle: 'Dark Pop Band from Thessaloniki - Come with Reverse',
  description: description,
  ogDescription: shortDescription,
  ogImage: siteImage,
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
