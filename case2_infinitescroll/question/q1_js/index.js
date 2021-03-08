import './style.css';
import renderList from './listRenderer';

const app = document.querySelector('#app');
const fetchMoreTrigger = document.querySelector('#fetchMore');
let page = 0;

const loadMore = async () => {
    const target = page ? fetchMoreTrigger : app;
    target.classList.add('loading');
    await renderList(page++);
    target.classList.remove('loading');
};

const onScroll = (e) => {
    // do something (hint: e.target.scrollingElement)

    // scrollTop = scroll된 높이
    // scrollHeight = scroll된 전체 높이
    // clientHeight = 보이는 만큼의 높이
    // const scrollTop = e.target.scrollingElement.scrollTop;
    // const clientHeight = e.target.scrollingElement.clientHeight;
    // const scrollHeight = e.target.scrollingElement.scrollHeight;

    const { scrollHeight, scrollTop, clientHeight } = e.target.scrollingElement;
    if (scrollHeight === scrollTop + clientHeight) {
        loadMore();
    }
};

document.addEventListener('scroll', onScroll);
loadMore();
