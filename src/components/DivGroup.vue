<script setup lang="ts" >
import {  formatPriceShort, getImgUrl } from '../assets/js/main.js';
import { computed } from 'vue';

// dataProps.ts import 해서 재사용
import type { DataProps } from '../assets/ts/dataProps.ts'
// const props = defineProps<DataProps>()
const props = withDefaults(defineProps<DataProps>(), {
  groupSize: 2,
  sectionCount: 3,
})


const groupedItems = computed(() => {
  const items = props.items || [];
  const groups = [];
  const size = props.groupSize || 2;
  const sectionCount = props.sectionCount || 3;

  for (let i = 0; i < items.length; i += size) {
    groups.push(items.slice(i, i + size));
  }

  const chunkSize = Math.ceil(groups.length / sectionCount);
  const finalGroups = [];

  for (let i = 0; i < sectionCount; i++) {
    finalGroups.push(groups.slice(i * chunkSize, (i + 1) * chunkSize));
  }

  return finalGroups;
});
</script>


<template>
  <div :class="['zone', customClass]">
    <div v-if="menuTitle" class="menuTi">{{ menuTitle }}</div>
    <div class="content">
      <div v-for="(section, sectionIndex) in groupedItems" :key="sectionIndex" class="zone-section">
        <div v-for="(pair, pairIndex) in section" :key="pairIndex" class="pair">
          <div v-for="item in pair" :key="item.id" class="vforBox">
            <div>
            <img
              v-if="item.img"
              :src="getImgUrl(item.img)"
              :alt="item.ko"
              v-bind="item.img ? { alt: item.ko } : { }" 
              class="img"
            />
            <div v-if="item.en" class="en">{{ item.en }}</div>
            <div v-if="item.price !== undefined && item.price !== null" class="price">
              {{ formatPriceShort(item.price) }}
            </div>
             </div>
            <div v-if="item.ko" class="ko">{{ item.ko }}</div>
            <div v-if="item.ex" class="ex">{{ item.ex }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped lang="scss">
@import url('https://fonts.cdnfonts.com/css/poppins');


</style>