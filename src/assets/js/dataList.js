export const meat = [
   { id: 1, ko: '생삼겹살', price: 25000, img:'imgMeat01',
            ex: '국내산 생고기 \n 조리전 1인 기준 200g \n  BBQ 굽는 시간 30분\n  2인 이상 주문 가능'},
   { id: 2, ko: '생목살', price: 25000, img:'imgMeat02',
            ex: '국내산 생고기 \n 조리전 1인 기준 200g \n  BBQ 굽는 시간 30분\n  2인 이상 주문 가능'},
   { id: 4, ko: '생갈비살', price: 35000, img:'imgMeat04',
            ex: '미국산 생고기 \n 조리전 1인 기준 250g \n  BBQ 굽는 시간 15분\n  2인 이상 주문 가능'}
];

export const set = [
   /*
   { id: 1, ko: '돼지 SET(2~3인용)', price: 100000, img:'imgSet01',
            ex: '50,000+25,000+25,000+2,000+4,000+6,500+6,500=119,000',
            item: [
               { name: '제주 막고기', num: '500g' }, 
               { name: '삼겹살', num: '200g' }, 
               { name: '목살', num: '200g' }, 
               { name: '햇반', num: '1개' }, 
               { name: '라면', num: '1개' }, 
               { name: '아메리카노', num: '1+1' }
               ]
   }, 
   */
   { id: 3, ko: '소돼지 SET(2~3인용)', price: 120000, img:'',
            ex: '70,000+25,000+25,000+2,000+4,000+6,500+6,500=139,000',
            goods: [
               { name: '생갈비살', num: '500g' }, 
               { name: '삼겹살', num: '200g' }, 
               { name: '목살', num: '200g' }, 
               { name: '햇반', num: '1개' }, 
               { name: '라면', num: '1개' }, 
               { name: '아메리카노', num: '1+1' }
               ]
   }         
];

export const side = [
   //{ id: 1, en:'', ko: '된장찌개', price: 7000, img:'imgSide01', ex: ''},
   { id: 1, en:'', ko: '4가지 감튀', price: 13000, img:'imgSide01', 
            ex: '각기 다른 모양의 감자튀김,\n 해쉬브라운, 치즈스틱을 \n 에어프라이어로 구워서 \n  건강하게 드실 수 있습니다.'},
   { id: 2, en:' ', ko: '국물 떡볶이', price: 15000, img:'imgSide02', 
            ex: '적당히 매콤하고 \n  달달한  \n  떠먹는 국물 떡볶이입니다. \n  쫄깃쫄깃 한입 사이즈 밀떡'},
   { id: 3, en:'  ', ko: '빠삭 먹태', price: 18000, img:'imgSide03', 
            ex: '빠~삭하고 포실포실한 \n 먹태 구이입니다. \n 건강한 먹거리입니다.\n 칼로리 걱정은 DOWN.'},
   { id: 4, en:'', ko: '나초', price: 20000, img:'imgSide01', 
             ex: '빠~삭하고 포실포실한 \n 먹태 구이입니다. \n 건강한 먹거리입니다.\n 칼로리 걱정은 DOWN.'}
];

export const season = [
   { id: 1, en:'', ko: '코코빙수', price: 18000, img:'imgSeason01', ex: ''},
   { id: 2, en:'', ko: '오렌빙수', price: 18000, img:'imgSeason02', ex: ''},
   { id: 3, en:' ', ko: '레몬빙수', price: 19000, img:'imgSeason03', ex: ''},
   { id: 4, en:'  ', ko: '로즈빙수', price: 19000, img:'imgSeason04', ex: ''}
];

export const eso = [
   { id: 1, en:'Espresso', ko: '에스프래소', price: 6500, img:'', ex: ''},
   { id: 2, en:'Americano', ko: '아메리카노', price: 6500, img:'', ex: ''},
   { id: 3, en:'Cafe Latte', ko: '카페라떼', price: 7000, img:'', ex: ''},
   { id: 4, en:'Cappuccino', ko: '카푸치노', price: 7000, img:'', ex: ''},
   { id: 5, en:'Vanilla Latte', ko: '바닐라 라떼', price: 8000, img:'', ex: ''},
   { id: 6, en:' Sua Da ', ko: '연유 라떼', price: 8000, img:'', ex: ''}
];

export const fruit = [
   { id: 1, en:'Lemon', ko: '썬키스트 레몬', price: 7500, img:'', ex: '골다공증 예방, 면역력 강화'},
   { id: 2, en:'Omija', ko: '문경 오미자', price: 8000, img:'', ex: '피부 미용, 간 해독 작용'},
   { id: 3, en:'JeJu Cereal Powder', ko: '보리개역', price: 7000, img:'', ex: '옛제주식 미숫가루'}
];

export const ice = [
   { id: 1, en:'Iced Tea', ko: '피치 아이스티', price: 7500, img:'', ex: '면역력 강화, 장 건강 촉진'},
   { id: 2, en:'Mango MilkShake', ko: '망고밀크쉐이크', price: 10000, img:'', ex: '우유 + 하겐다즈 망고'},
   { id: 3, en:'Yuja Smoothie', ko: '유자스무디', price: 9000, img:'', ex: '상큼한 유자청'},
   { id: 4, en:'Candy Smoothie', ko: '캔디스무디', price: 9000, img:'', ex: '솜사탕 + 소다'},
];

export const hot = [
   { id: 1, en:'SSangWhaTang', ko: '쌍화탕', price: 10000, img:'', ex: ''},
];