<script setup lang="ts">
    // import DivList from '../components/DivList.vue'; 
    import Swiper from '@/components/Swiper.vue';
       // 해당 scss file은 style 에서 @use
   import '../assets/main.scss';
   import '../assets/main.css';
   import * as data from '../assets/js/dataList.js';

   const slidesPerView = 4;
   const swiperSpeed = 500;
   const spaceBetween = 30;
   console.log(slidesPerView);

</script>

<template>
    <div class="eso-view">
        <Swiper 
        :slidesData="data.eso" 
        :swiperSpeed="swiperSpeed"
        :slidesPerView="slidesPerView"
        :spaceBetween="spaceBetween" />
    </div>>
</template>

<style lang="scss" scoped>
    @use '../assets/scss/varHome.scss' as *;
    @use "../assets/style/homeStyle.scss" as *;


</style>