
// price 를 숫자(천단위 콤마)로 전환 함수 
export function formatPrice(price) {
   return price.toLocaleString();
}
// price 를 7.5 로 전환 함수 
export function formatPriceShort(price) {
   return (price / 1000).toFixed(1);
}


// img 동적 바인딩 함수
export function getImgUrl(img) {
   return new URL(`/src/assets/img/${img}.png`, import.meta.url).href;
}

export default { formatPrice, formatPriceShort, getImgUrl };

