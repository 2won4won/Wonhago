<script setup lang="ts">
    import { onMounted } from 'vue'
    import { useRouter } from 'vue-router'

    //const router = useRouter()
    // onMounted(() => router.replace('/home'))   // 즉시 홈으로 이동
    //setTimeout(() => router.replace('/home'), 3000);
</script>

<template>
    <div class="welcome-view">
      <div class="welcome-massage">
         <div class="hello"> 안녕하세요  </div>
         <div class="hello"> 215CafeCamp 입니다. </div>
 
         <div> 
            <div> 운영시간  </div>
            <div> 11:00 ~ 16:00 </div>
            <div> 17:00 ~ 20:00 </div>
         </div>

         <div> 
            <div> 휴무일  </div>
            <div> 매주 수요일 </div>
         </div>
 
         <div>  </div>
      </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../assets/scss/mixin.scss'  as *;
@use '../assets/style/appStyle.scss'  as *;

.welcome-view { 
   //  background: #000000;  /* fallback for old browsers */
   //  background: -webkit-linear-gradient(to bottom, #e74c3c, #000000);  /* Chrome 10-25, Safari 5.1-6 */
    background: $bg-welcome-view; /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    height: 100vh;

   //  welcome-massage 중앙 정렬
   @include layout-div(flex, center, center, row);

   .welcome-massage {
      border: 0.1rem wheat solid;
      font-size: 3rem;
      color: aliceblue;

   }

}
</style>