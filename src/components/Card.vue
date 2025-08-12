<script setup lang="ts">
   import { useCardActive } from '../assets/ts/card.js';
   import type { DataProps } from '../assets/ts/dataProps.ts'

   const props = defineProps<DataProps & { customClass?: string }>();

   const delays = [2000, 2000, 4000, 4000]; // 예시: 카드 개수만큼 시간 설정 (props.items.length 권장)
   const { currentIndex } = useCardActive(delays, props.items.length);

   import { formatPriceShort, getImgUrl } from '../assets/js/main.js';
</script>

<template>
   <div :class="['zone', customClass]">
      <div v-if="menuTitle" class="menuTi">{{ menuTitle }}</div>
      <div class="content">
         <div class="cardBox">
            <div
               v-for="(item, index) in items"
               :key="item.id"
               class="card vforBox"
               :class="{ active: currentIndex === index }"
            >
               <div class="face face1">
                  <img v-if="item.img" :src="getImgUrl(item.img)" :alt="item.ko" class="img" />
                  <div v-if="item.ko" class="ko">{{ item.ko }}</div>
                  <div v-if="item.price !== undefined && item.price !== null" class="price">{{ formatPriceShort(item.price) }}</div>
               </div>

               <div class="face face2">
                  <div class="cardLine">
                     <div v-if="item.ko" class="ko">{{ item.ko }}</div>
                     <div v-if="item.price !== undefined && item.price !== null" class="price">{{ formatPriceShort(item.price) }}</div>
                  </div>
                  <div v-if="item.ex" class="ex">{{ item.ex }}</div>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>


<style scoped lang="scss">
// @use 순서 중요 - 반드시 처음
@use "../assets/css/card.css" as *;
@import url('https://fonts.cdnfonts.com/css/poppins');


</style>