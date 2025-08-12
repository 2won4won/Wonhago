<script setup lang="ts">
</script>

<template>
    <h1> TestView </h1>
</template>

<style lang="scss" scoped>

</style><script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import './assets/main.css'
import './assets/main.scss'
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
setTimeout(() => router.replace('/home'), 4000) 
</script>

<template>

<header v-if="!$route.meta.hideNav" >
   <div class="wrapper">
      <nav class="nav" >
         <RouterLink to="/">Welcome</RouterLink>
         <RouterLink to="/home">Home</RouterLink>
         <RouterLink to="/about">About</RouterLink>
         <RouterLink to="/main">Main</RouterLink>
         <RouterLink to="/test">Test</RouterLink>
      </nav>
   </div>
</header>

<RouterView />
</template>

<style lang="scss">
#app {
/* max-width: 1280px; */
/* margin: 0 auto; */
/* padding: 2rem; */
//   font-weight: normal;
// background: #000000;  /* fallback for old browsers */
// background: -webkit-linear-gradient(to bottom, #e74c3c, #000000);  /* Chrome 10-25, Safari 5.1-6 */
// background: linear-gradient(to bottom, #e74c3c, #000000); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */



//   background-image: linear-gradient(to top, #dbdcd7 0%, #dddcd7 24%, #e2c9cc 30%, #e7627d 46%, #b8235a 59%, #801357 71%, #3d1635 84%, #1c1a27 100%) !important;
//   height: 100vh;
.nav {

   font-size: 5rem; 
> a {
   margin-right: 3rem;
}
}
}
.wrapper .nav  {
color: white !important;
font-size: 1rem;
}
@media only screen and (max-width: 479px) {
html {
   background-size: cover !important;
   font-size: 30%;
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
