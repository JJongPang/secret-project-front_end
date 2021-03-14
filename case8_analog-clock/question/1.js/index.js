// 요구 사항 정리
// 1. 시계의 시침(.hand.hour요소), 분침, 초침을
// 1초 간격으로 회전시켜 현재 시간을 표시한다.
// css --deg 값 을 js로  갑을 변경해 현재 시간을 표시한다.

const renderTime = (() => {
    const $hourHand = document.querySelector('.hand.hour');
    const $minuteHand = document.querySelector('.hand.minute');
    const $secondHand = document.querySelector('.hand.second');

    return () => {
        // 현재 시간을 가지고 온다.
        const now = new Date();

        const hours = now.getHours();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();

        // Write JS code here!
        // 초침 1초당 6도
        $secondHand.style.setProperty('--deg', seconds * 6);

        // 분침 1분당 6도, 1초당  0.1도
        $minuteHand.style.setProperty('--deg', minutes * 6 + seconds * 0.1);

        // 시침: 1시간당 30도(360/12), 1분당 0.5도(30/60), 1초당 (0.5/60)도
        $hourHand.style.setProperty('--deg', hours * 30 + minutes * 0.5 + seconds * 0.1);
    };
})();

// Dom의 생성이 파싱이 완료되었을 때
document.addEventListener('DOMContentLoaded', () => {
    setInterval(renderTime, 1000);
});
