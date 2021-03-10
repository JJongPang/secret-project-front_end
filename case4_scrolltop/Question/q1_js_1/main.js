const nav = document.querySelector('nav');

const navHeight = nav.getBoundingClientRect().height;
// 첫 번째 방법
// 스크롤 이벤트가 발생했을 때

// 현재 스크롤 위치를 가져온다.

// 스크롤 위치를 바탕으로 active 클래스를 추가하거나 제거한다.

// Write JS Code Here!
// document.addEventListener('scroll', (e) => {
//     const { scrollTop } = e.target.scrollingElement;
//     if (scrollTop > navHeight) {
//         nav.classList.add('active');
//     } else {
//         nav.classList.remove('active');
//     }
// });

document.addEventListener('scroll', (e) => {
    let position = 0;
    const { scrollTop } = e.target.scrollingElement;
    if (scrollTop > navHeight) {
        nav.classList.add('active');
        position = scrollTop;
    } else if (position > scrollTop) {
        nav.classList.remove('active');
    }
});
