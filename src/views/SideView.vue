<script setup lang="ts">
   // 해당 scss file은 style 에서 @use
   import '../assets/main.scss';
   import '../assets/main.css';
   import * as data from '../assets/js/dataList.js';

</script>

<template>
    <div class="side-view">
       
    </div>
</template>

<style lang="scss" scoped>
    @use '../assets/scss/varHome.scss' as *;
    @use "../assets/style/appStyle.scss" as *;
.side-view {
   height: 100vh;
   background-color: $bg-side-view;  /* fallback for old browsers */
   // background: -webkit-linear-gradient(to top, #E1F5C4, #EDE574);  /* Chrome 10-25, Safari 5.1-6 */
   // background: linear-gradient(to top, #E1F5C4, #EDE574); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

}

</style>