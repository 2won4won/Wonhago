// src/types/props.d.ts
export interface DataProps {
   title: string;
   menuTitle: string; // 메뉴 타이틀 (예: Only Hot, Espresso)
   items?: Array<any> | string;
   customClass?: string | string[];   // 메뉴별 추가 클래스
}
export interface SlideItem {
   id: string | number;
   en: string;
   ko: string;
   ex?: string;
   price?: number;
}
export interface SwiperProps {
  slidesData: SlideItem[];
  swiperSpeed?: number;
  slidesPerView?: number;
  spaceBetween?: number;
}