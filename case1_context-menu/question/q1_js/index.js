// Write Javascript code here!
const wrapper = document.querySelector('.wrapper');
const items = document.querySelectorAll('.item');

wrapper.addEventListener('click', (e) => {
    const target = e.target;
    e.stopPropagation();
    if (!target.classList.contains('item')) return;
    target.classList.add('open');
    items.forEach((elem) => {
        if (elem !== target) {
            elem.classList.remove('open');
        }
    });
});

document.body.addEventListener('click', (e) => {
    if (e.target.classList.contains('context')) return;
    items.forEach((item) => {
        item.classList.remove('open');
    });
});
