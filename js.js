let tree = document.querySelectorAll('ul')[0];
let li = tree.querySelectorAll('li');

for (let i = 0; i < li.length; i++) {
    let treeLi = li[i];
    let span = document.createElement('span');
    treeLi.insertBefore(span, treeLi.firstChild);
    span.append(span.nextSibling);
}

tree.addEventListener('click', (event) => {
    let target = event.target;
    if (target.tagName != 'SPAN') {
        return;
    }
    let child = target.parentNode.querySelectorAll('ul')[0];
    if (!child) {
        return;
    }
    child.hidden = !child.hidden;
});
