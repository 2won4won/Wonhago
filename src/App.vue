<script setup lang="ts">
   import { RouterLink, RouterView } from 'vue-router'
   import './assets/main.css'
   import './assets/main.scss'

   import { onMounted, computed } from 'vue'

   import { useRoute } from 'vue-router'
   // route 객체
   const route = useRoute()

   // dataProps.ts import 해서 재사용
   import type { DataProps } from './assets/ts/dataProps.ts'
   const props = defineProps<DataProps>();

   // 폰트 색상 computed
const navFontColor = computed(() => {
  switch (route.name) {
   //  case 'meat': return '#fff'
   //  case 'side': return '#000'
    default:     return '#fff'
  }
})

// 배경 색상 computed
const navBgColor = computed(() => {
  switch (route.name) {
      case 'welcome': return 'var(--bg-welcome-view)'
      case 'meat': return 'var(--bg-meat-view)'
      case 'side': return 'var(--bg-side-view)'
      default:     return '#f3f3f3'
  }
})

</script>

<template>
 
   <!-- <header v-if="!$route.meta.hideNav"    > -->
   <div class="app-layout">
      <div class="header">
         <div>
            <div> Hello! </div>
         </div>
         <nav  class="app-nav"
               :style="{
                  '--nav-font-color': navFontColor,
                  '--nav-bg-color': navBgColor
               }"
         >
            <RouterLink to="/" > Welcome</RouterLink>
            <RouterLink to="/meat"> BBQ </RouterLink>
            <RouterLink to="/side">  SideMenu </RouterLink>
            <RouterLink to="/eso" > Espresso </RouterLink>
            <RouterLink to="/test">  Test </RouterLink>
            <RouterLink to="/home" > Espresso2 </RouterLink>
            <RouterLink to="/about"> BBQ2 </RouterLink>
            <RouterLink to="/main">  SideMenu2 </RouterLink>
            <RouterLink to="/test">  Test2 </RouterLink>
         </nav>
      </div>
      <main class="app-view">
         <RouterView />
      </main>
   </div>

</template>

<style lang="scss">
// 해당 scss file은 style 에서 @use
@use './assets/scss/mixin.scss'  as *;
@use './assets/style/appStyle.scss'  as *;
  /* max-width: 1280px; */
  /* margin: 0 auto; */
  /* padding: 2rem; */

@media only screen and (max-width: 479px) {
   html {
      background-size: cover !important;
      font-size: 45%;
   }

   .app-layout {
      height: 100vh;
      @include grid-differ('1fr 4fr' , 0 , 0);

      .app-nav {
         border: 0.1rem rgb(42, 11, 11) sloid;
         display: flex;
         flex-direction: column;

         >a {
            // a-tag div size 
            width: $a-width;
            height: $a-height;
            box-sizing: border-box;  /* div size fix */
            border-radius: 1rem;
            margin: $app-margin !important;

            // div layout
            @include layout-div(flex, center, center, row);

            //font
            font-weight: bold;
            text-decoration: none;
            // a tag div background color
            @include border-style($mobile-border, 0.5rem);

            &.router-link-active {
               font-weight: bold;
               // 활성 링크의 배경 및 텍스트 색상도 변수 기반으로 적용 가능
               // linear-gradiant 는 background or background-image 에 적용
               color: var(--nav-font-color);
               background: var(--nav-bg-color);
            }
         }
      }
   }
   

}
@media (min-width: 480px) and (max-width: 767px){
   html {
     background-color: rgb(221, 146, 42);
   }
}
@media (min-width: 768px) and (max-width: 1023px){
   html {
      background-color: chartreuse;
      font-size: 65%;
   }
}
@media (min-width: 1024px) and (max-width: 2559px) {
  html {
    background-color: rgb(172, 87, 145);
    font-size: 60% !important;
  }
}
@media (min-width: 2560px) {
   html {
      background-color: darkslategrey;
    font-size: 100%;
  }
}
</style>
