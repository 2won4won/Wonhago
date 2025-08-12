<script  setup lang="ts" >
   import {  formatPriceShort, getImgUrl } from '../assets/js/main.js';
   
   // dataProps.ts import 해서 재사용
   import type { DataProps } from '../assets/ts/dataProps.ts'
   const props = defineProps<DataProps>()

</script>

<template>
   <div :class = " ['zone', customClass]">
      <div v-show = "menuTitle"  class="menuTi">  {{ menuTitle }}  </div>
      <div class="content ">
         <div v-for = "item in items" :key="item.id"  class=" vforBox  "  > 
            <img v-if = "item.img" :src="getImgUrl(item.img)" v-bind="item.img ? { alt: item.ko } : { }"   class="img">
            <div v-if = "item.en" class="en" > {{ item.en }} </div>
            <div v-if = "item.ko" class="ko" > {{ item.ko }} </div>
            <div v-if = "item.ex" class="ex" > {{ item.ex }} </div>
            <div v-if = "item.goods" class="goods" >
               <div  v-for = " goods in item.goods " :key = "goods.id"  class="" > 
                  <div v-if = "goods.name" class="ko"> {{ goods.name }} </div>
                  <div v-if = "goods.num !== undefined && goods.num !== null" class="ko"> {{ goods.num }} </div>
               </div>   
            </div>
            <div v-if = "item.price !== undefined && item.price !== null"  class="price" > {{ formatPriceShort(item.price) }} </div>
         </div>
      </div>
   </div>
</template>

<style scoped lang="scss">
@import url('https://fonts.cdnfonts.com/css/poppins');


</style>