import { ref, onMounted, onUnmounted } from 'vue';

// cards는 DOM이 아닌 Props로 items 배열을 받고, 활성화 인덱스 상태 관리

export function useCardActive(delays: number[], count: number) {
  const currentIndex = ref(0);
  let timerId: number | null = null;

  function run() {
    // 다음 인덱스 준비
    currentIndex.value = (currentIndex.value + 1) % count;
    
    // 다음 타이머 예약 (현재 인덱스가 아닌 변경 후 인덱스로 딜레이 세팅)
    timerId = window.setTimeout(run, delays[currentIndex.value]);
  }

  function start() {
    if (timerId) clearTimeout(timerId);
    timerId = window.setTimeout(run, delays[currentIndex.value]);
  }

  function stop() {
    if (timerId) {
      clearTimeout(timerId);
      timerId = null;
    }
  }

  onMounted(() => {
    start();
  });

  onUnmounted(() => {
    stop();
  });

  return {
    currentIndex,
    start,
    stop
  };
}
