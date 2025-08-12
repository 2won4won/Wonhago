<script  setup lang="ts" >
   // Swiper 기본 import
   import { Swiper, SwiperSlide } from 'swiper/vue';
   import 'swiper/css';
   import 'swiper/css/pagination';
   import 'swiper/css/navigation';
   import { Pagination, Navigation, Autoplay } from 'swiper/modules';

   import { formatPriceShort } from '../assets/js/main.js';

    // dataProps.ts import 해서 재사용
   import type { SwiperProps } from '../assets/ts/dataProps.ts'
   const props = defineProps<SwiperProps>();
   const { slidesData, swiperSpeed = 600, slidesPerView = 3, spaceBetween = 30 } = props;

</script>

<template>
   <!-- Swiper seasonal 메뉴 -->
  <div class="zone">
    <Swiper
      :modules="[Pagination, Navigation, Autoplay]"
      :observer="true"
      :observeParents="true"
      :navigation="false"
      :loop="true"
      :autoplay="{ delay: 2500, disableOnInteraction: false }"
      :freeMode="false"
      :speed="swiperSpeed"
      :slidesPerView="slidesPerView"
      :spaceBetween="spaceBetween"
      class="swiper-container"
    >
      <SwiperSlide v-for="slide in slidesData" :key="slide.id">
        <div class="slide-content">
          <div class="en">{{ slide.en }}</div>
          <div class="ko">{{ slide.ko }}</div>
          <div class="ex">{{ slide.ex }}</div>
          <div class="price">{{ formatPriceShort(slide.price) }}</div>
        </div>
      </SwiperSlide>
    </Swiper>
  </div> 
</template>

<style scoped lang="scss">
@use '../assets/main.scss' as *;
@use '../assets/main.css' as *;
.zone {
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
}
.swiper-container {
  width: 100%;
  margin: 0 auto;
  
  .swiper-wrapper {
    box-sizing: border-box;
    align-items: stretch;
    
    .swiper-slide {
      border: 0.1rem solid rgb(114, 191, 99);
      height: 100%;
      box-sizing: border-box;
      flex-shrink: 0;
      
      .slide-content {
        padding: 1rem;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        
        .en {
          font-weight: bold;
          margin-bottom: 0.5rem;
        }
        
        .ko {
          margin-bottom: 0.5rem;
        }
        
        .ex {
          font-size: 0.9rem;
          color: #666;
          margin-bottom: 0.5rem;
        }
        
        .price {
          font-weight: bold;
          color: #72bf63;
        }
      }
    }
  }
}   

</style>