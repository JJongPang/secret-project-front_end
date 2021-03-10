const nav = document.querySelector('nav');

// 첫 번째 방법
// 스크롤 이벤트가 발생했을 때

// 현재 스크롤 위치를 가져온다.

// 스크롤 위치를 바탕으로 active 클래스를 추가하거나 제거한다.

// Write JS Code Here!
//내가 푼 답
// const navHeight = nav.getBoundingClientRect().height;
// document.addEventListener('scroll', (e) => {
//     const { scrollTop } = e.target.scrollingElement;
//     if (scrollTop > navHeight) {
//         nav.classList.add('active');
//     } else {
//         nav.classList.remove('active');
//     }
// });

// 내가 푼 답
// let position = 0;
// document.addEventListener('scroll', (e) => {
//     const { scrollTop } = e.target.scrollingElement;
//     if (scrollTop > navHeight) {
//         nav.classList.add('active');
//         position = scrollTop;
//     }
//     if (scrollTop < position) {
//         nav.classList.remove('active');
//         console.log('scrollTop', scrollTop);
//         console.log(position);
//     }
// });

window.addEventListener('scroll', (e) => {
    const top = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    top >= 50 ? nav.classList.add('active') : nav.classList.remove('active');
});
