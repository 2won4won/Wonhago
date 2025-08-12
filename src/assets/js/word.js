export const words = [
  '달지 않은 건강 쌍화탕',
  '경동한의원 원장님의 비법 쌍화탕',
  '천궁,백작약,숙지황,황기,구기자 등 약재 넣어 다린 쌍화탕'
];

// const words = [
//   '달지 않은 건강 쌍화탕',
//   '경동한의원 원장님의 비법 쌍화탕',
//   '천궁,백작약,숙지황,황기,구기자 등 약재 넣어 다린 쌍화탕'
// ];

// let part = '',
//     i = 0,
//     offset = 0,
//     forwards = true,
//     skip_count = 0,
//     skip_delay = 35,
//     speed = 90;

// export function wordflick() {

//    //v-for 일때 동적으로 class 변경 불가-> 동작타겟 명확히 지정(.ex.word)
//   const wordElement = document.querySelector('.ex.word'); 
//   if (!wordElement) {
//     console.error('Cannot find .word element!');
//     return;
//   }
//   setInterval(() => {
//     if (forwards) {
//       if (offset >= words[i].length) {
//         skip_count++;
//         if (skip_count >= skip_delay) {
//           forwards = false;
//           skip_count = 0;
//         }
//       }
//     } else {
//       if (offset === 0) {
//         forwards = true;
//         i++;
//         if (i >= words.length) i = 0;
//       }
//     }
//     part = words[i].substr(0, offset);
//     if (skip_count === 0) {
//       if (forwards) offset++;
//       else offset--;
//     }
//     wordElement.textContent = part;
//   }, speed);
// }