
// // 선택한 class를 순차적으로 찾고 css 변경
//     var items = document.querySelectorAll('.ci');
//     var cnt = 0;
    
//     function activeFunc() {
//         // 모든 요소에서 active 클래스를 제거
//         items.forEach(function(a) {
//             a.classList.remove('active');
//         });
        
//         // 현재 cnt에 해당하는 요소에 active 클래스 추가
//         items[cnt].classList.add('active');  
//         // cnt를 다음 요소로 이동 (순환)
//         cnt++;
//         if (cnt >= items.length) {
//             cnt = 0; // 다시 처음으로 돌아감
//         }
//     }
//     setInterval(activeFunc, 2000);

//     const list = document.querySelectorAll('.card');
//     let currentIndex = 0;

//     // 각 카드별 지연 시간 (밀리초 단위)
//     const delays = [2000, 2000, 4000, 4000]; // 예시: 카드 개수만큼 시간 설정

//     function cardActive() {
//         // 모든 요소에서 active 클래스를 제거
//         list.forEach(list => list.classList.remove('active'));
        
//         // 현재 인덱스에 해당하는 요소에 active 클래스 추가
//         list[currentIndex].classList.add('active');
        
//         // 다음 인덱스 계산
//         currentIndex = (currentIndex + 1) % list.length;
        
//         // 현재 카드에 해당하는 지연 시간으로 다음 실행 예약
//         setTimeout(cardActive, delays[currentIndex]);
//     }

//     // 초기 실행
//     cardActive();