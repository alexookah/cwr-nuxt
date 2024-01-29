<script setup lang="ts">
const { formatURI } = useHelpers();
const albums = await queryContent('albums').sort({ releaseDate: -1 }).find();

function getFormat(src: string) {
    return src.endsWith('.gif') ? undefined : 'avif,webp';
}
</script>
<template>
    <div>
        <h2 class="text-center text-5xl mt-20 mb-10">Music</h2>
        <div class="grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-5 content-center">
            <div v-for="album in albums" :key="album.slug" class="block mx-auto">
                <NuxtLink :to="`/album/${formatURI(album.slug)}`" :title="album.name">
                    <NuxtImg :src="album.image.src" :alt="album.image.alt" height="400" width="400"
                        :format="getFormat(album.image.src)" loading="lazy" />
                </NuxtLink>
            </div>
        </div>
    </div>
</template>
