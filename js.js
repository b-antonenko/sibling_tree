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

// your code works, but wrong. Ul must hidden only when we push on his parent li.
// your elements are hidden when I push near elements, it's not that we want 
