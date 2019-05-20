'use strict';

createTree(document.querySelector('.tree'));

function createTree(element) {
    element.addEventListener('click', (event) => {
const title = event.target.closest('.title');
if (!title) {
    return
}
const list = title.closest('li').querySelector('ul');
if (!list) {
    return
}
list.hidden = !list.hidden
    });
}