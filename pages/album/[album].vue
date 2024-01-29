<script lang="ts" setup>
const route = useRoute();
const slug = route.params['album'] as string;
console.log(route.params)
const album = await queryContent('albums').where({ slug: slug }).findOne();
</script>

<template>
    <div class="album-container">
        <div class="image-container">
            <NuxtImg :src="album.image.src" :alt="album.image.alt" class="album-image" />
        </div>
        <h1 class="album-title">{{ album.name }}</h1>
        <div class="album-info">
            <div v-html="album.notes" class="album-notes"></div>
            <div class="song-links">
                <div v-for="song in album.songs" :key="song.name" class="song">
                    <h2>{{ song.name }}</h2>
                    <div class="links">
                        <a v-for="link in song.links" :key="link.source" :href="link.link" target="_blank" class="link">
                            <!-- You can replace this with icons for each source -->
                            {{ link.source }}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped>
.album-container {
    max-width: 800px;
    margin: auto;
    padding: 20px;
}

.image-container {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
}

.album-image {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
}

.album-title {
    text-align: center;
    font-size: 2em;
    margin-bottom: 15px;
}

.album-info {
    padding: 20px;
    background-color: #f5f5f5;
    border-radius: 8px;
}

.album-notes {
    margin-bottom: 20px;
}

.song-links {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.song {
    background-color: #e9e9e9;
    padding: 10px;
    border-radius: 8px;
}

.links {
    display: flex;
    gap: 10px;
}

.link {
    background-color: #d1d1d1;
    padding: 5px 10px;
    border-radius: 5px;
    text-decoration: none;
    color: #333;
}
</style>