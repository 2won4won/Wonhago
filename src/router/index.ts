import { createRouter, createWebHistory } from 'vue-router'
// import WelcomeView from '../views/WelcomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
      {
         path: '/',
         name: 'welcome',
         component: () => import('../views/WelcomeView.vue'),
         meta: { hideNav: true }          // ★ 추가 nav 숨기기   
      },
      {
         path: '/home',
         name: 'home',
         component: () => import('../views/HomeView.vue'),
      },
      {
         path: '/meat',
         name: 'meat',
      //    route level code-splitting
      //    this generates a separate chunk (About.[hash].js) for this route
      //     which is lazy-loaded when the route is visited.
            component: () => import('../views/MeatView.vue'),
      },
      {
         path: '/side',
         name: 'side',
      //    route level code-splitting
      //    this generates a separate chunk (About.[hash].js) for this route
      //     which is lazy-loaded when the route is visited.
            component: () => import('../views/SideView.vue'),
      },
      {
         path: '/eso',
         name: 'eso',
      //    route level code-splitting
      //    this generates a separate chunk (About.[hash].js) for this route
      //     which is lazy-loaded when the route is visited.
            component: () => import('../views/EsoView.vue'),
      },
       {
        path: '/main',
         name: 'main',
        component: () => import('../views/MainView.vue'),
      },
      {
         path: '/test',
         name: 'test',
         component: () => import('../views/TestView.vue'),
      }
     
   ]
})

export default router
