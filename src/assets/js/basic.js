   import {  formatPriceShort, getImgUrl } from '../assets/js/main.js';
   
   const props = defineProps ({
      title: String ,         
      menuTitle: String ,   // 메뉴 타이틀 (예: Only Hot, Espresso)
      items: {
         type: [ String, Array ],
         default: () => [],
      },
      customClass: {       // 메뉴별 추가 클래스
         type: [ String, Array ],
         default: '',
      }
   })