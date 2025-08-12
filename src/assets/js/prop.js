   import {  formatPriceShort, getImgUrl } from './main.js';
   import * as data from './dataList.js';
   
   // export const props = defineProps () --> 한 컴퍼넌트에서 한번만 호출
   // 각 conponents에서 props를 재정의 해야함 
   //  import { props as importProps } from '../assets/js/prop.js'
   // const props = defineProps(importProps)
    export const props = {
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
   }
  
