import { defineNuxtPlugin } from 'nuxt/app';
import GLightbox from 'glightbox';
import 'glightbox/dist/css/glightbox.min.css';

interface Photo {
  src: string;
  alt?: string;
}

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.provide('openLightbox', (photos: Photo[], src: string) => {
    const lightbox = GLightbox({
      elements: photos.map(photo => ({
        href: photo.src,
        type: 'image',
        alt: photo.alt
      }))
    });

    const photoIndex = photos.findIndex(photo => photo.src === src);
    if (photoIndex !== -1) {
      lightbox.openAt(photoIndex);
    }
  });
});

