<script  setup  lang="ts" >
   // import { onMounted } from 'vue';

   import * as data from '../assets/js/dataList.js';
   import DivList from '../components/DivList.vue';
   import DivGroup from '../components/DivGroup.vue';
   import DivDetail from '../components/DivDetail.vue';
   import DivLoop from '../components/DivLoop.vue';
   import Icon from '../components/Icon.vue';
   import Card from '../components/Card.vue';

   import Swiper from '@/components/Swiper.vue';
   
   // 공통 scss 전역으로 임포트 -> 각 vue file 공통으로 사용 -> 각각 import 할 필요 없음
   // 해당 scss file은 style 에서 @use
   import '../assets/main.scss';
   import '../assets/main.css';

   // onMounted(() => {
   //   //alert(JSON.stringify(data.eso));
   //  //console.log(meat);
   // });
   const slidesPerView = 3;
   const swiperSpeed = 500;
   const spaceBetween = 30;
   console.log(slidesPerView);

   
</script>

<template>
    <div class = "container ">
    
      <div class="grid" >
         <div class="title shadow"> 215CafeCamp's BBQ </div>
         <DivList title = " " :menuTitle="''" :items="data.meat" customClass="meat" />
         <DivLoop title = " " :menuTitle="'set'" :items="data.set" customClass="set" />
         <DivList title = " " :menuTitle="''" :items="data.season" customClass="season" />
  
      </div>
      <div class="grid" > 
         <div class="title shadow"> 215CafeCamp's SideMenu </div>
         <Card title = " " :menuTitle="''" :items="data.side" customClass="cardZone" />
      </div>
      <div class="grid" >
         <div class="title shadow"> 215CafeCamp's Cafe </div>
         <DivGroup title = " " :menuTitle="''" :items="data.eso" customClass="eso" />
         <DivList title = " " :menuTitle="'hot or ice'" :items="data.fruit" customClass="fruit" />
         <DivList title = " " :menuTitle="'only Ice'" :items="data.ice" customClass="ice" />
         <!-- <Swiper :slidesData="data.ice"  /> -->
         <!-- <Swiper :slidesData="data.ice" :swiperSpeed="swiperSpeed"
         :slidesPerView="slidesPerView"
         :spaceBetween="spaceBetween" /> -->
         <DivList title = " " :menuTitle="'only hot'" :items="data.hot" customClass="hot" />
  
      </div>
   </div>
</template>

<style lang="scss">
@use '../assets/scss/varHome.scss' as *;
@use "../assets/style/homeStyle.scss" as *;

   .title { background: url('../assets/img/backSummer.jpg'); color: white; }


</style>