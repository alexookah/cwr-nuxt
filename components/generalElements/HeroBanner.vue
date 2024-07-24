  
<template>
  <div class="container flex flex-col justify-center pt-10 items-center">
    <NuxtImg src="/logo-black.svg" height="400" width="500" class="" alt="Come with Reverse logo" />
    <h1 class="text-4xl pt-12">the dark side of pop</h1>
  </div>
  <!-- <swiper :modules="modules" :slides-per-view="1" :space-between="0" navigation :pagination="{ clickable: true }"
        :scrollbar="{ draggable: true }" @swiper="onSwiper" @slideChange="onSlideChange">
        <swiper-slide>
            <img src="/woonuxt_base/assets/images/hero-3.jpg" alt="Brand 1" />
        </swiper-slide>
        <swiper-slide>
            <img src="/woonuxt_base/assets/images/hero-3.jpg" alt="Brand 2" />
        </swiper-slide>
        <swiper-slide>
            <img src="/woonuxt_base/assets/images/hero-3.jpg" alt="Brand 2" />
        </swiper-slide>
        <swiper-slide>
            <img src="/woonuxt_base/assets/images/hero-3.jpg" alt="Brand 2" />
        </swiper-slide>
        <swiper-slide>
            <img src="/woonuxt_base/assets/images/hero-3.jpg" alt="Brand 2" />
        </swiper-slide>
    </swiper> -->
</template>

<script>
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// Import Swiper styles
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log('slide change');
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation, Pagination, A11y],
      loop: true,
      speed: 500,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    };
  },
};
</script>