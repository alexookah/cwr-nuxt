import { defineNuxtPlugin } from 'nuxt/app';
import GLightbox from 'glightbox';
import 'glightbox/dist/css/glightbox.min.css';

export interface Photo {
  src: string;
  alt?: string
}

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.provide('openLightbox', (photos: Photo[], src: string) => {

    const img = useImage();
    const webpPhotos = photos.map(photo => ({
      src: img(photo.src, { format: 'avif,webp' }),
      alt: photo.alt
    }))

    const lightbox = GLightbox({
      elements: webpPhotos.map(photo => ({
        href: photo.src,
        type: 'image',
        alt: photo.alt,
        zoomable: false
      }))
    });

    const photoIndex = photos.findIndex(photo => photo.src === src);
    if (photoIndex !== -1) {
      lightbox.openAt(photoIndex);
    }
  });
});

