'use strict';

const items = document.querySelectorAll('details');
document.body.addEventListener('click', (e) => {
    if (e.target.nodeName !== 'P' && e.target.nodeName !== 'SUMMARY') {
        items.forEach((item) => {
            item.removeAttribute('open');
        });
        return;
    }
    items.forEach((item) => {
        if (item !== e.target.parentElement) {
            item.removeAttribute('open');
        }
    });
});
