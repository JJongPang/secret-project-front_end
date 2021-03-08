import './style.css';
import renderList from './listRenderer';
import { debounce } from './util';

const app = document.querySelector('#app');
const fetchMoreTrigger = document.querySelector('#fetchMore');
let page = 0;

const fetchMore = async () => {
    const target = page ? fetchMoreTrigger : app;
    target.classList.add('loading');
    await renderList(page++);
    target.classList.remove('loading');
};
const onScroll = (e) => {
    // do something
    // 연속으로 발생하는 이벤트에 대해서...
    // throttle: 일정시간간격으로 한번씪만 실행
    // debounce: 마지막 한 번만 실행
    const { scrollHeight, scrollTop, clientHeight } = e.target.scrollingElement;
    if (scrollHeight === scrollTop + clientHeight) {
        fetchMore();
    }
};

document.addEventListener('scroll', debounce(onScroll, 300));
fetchMore();
