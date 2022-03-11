const logo = header.children[0];
const toRoads = document.querySelector('header nav ul li');
const roads = document.getElementById('roads');
const leftArrow = document.querySelector('main #carousel #left-arrow');
const rightArrow = document.querySelector('main #carousel #right-arrow');
const carousel = document.getElementById('elements');

function giveNum(s) {
    return Array.from(s).filter(e => +(e + 1)).join('');
};

logo.onclick = _ => window.scroll(0, 0);

/*
    so the js file can use style property, i have to put it here,
    because i wrote the style in another file, not in index.html file.
*/
carousel.style.left = '2vw';

leftArrow.className = 'unclickable';

// 100 is the height of the header.
toRoads.onclick = _ => window.scrollTo(0, roads.offsetTop - 100);

window.addEventListener('scroll', _ => {
    if (window.scrollY >= roads.offsetTop - 300 && window.scrollY < roads.offsetTop + 200) {
        toRoads.className = 'on';
    } else {
        toRoads.className = 'off';
    };
    if (window.scrollY >= roads.offsetTop - 500) {
        roads.style.animationPlayState = 'running';
    }
});

/*
    how can I know if there is a hidden elements in the left side or not?
    the idea is the left value should be: -(the different between the parents' width of the carousel and the carousels'width)
    because if the parent have 100 value, and the child have 300 value, and the left was -(300 - 100) {-200}
    then the child has a 200 value out of its parent, which means that the value inside the parent is 100 (exactly like its parents' width) 
      * we can change the law to (parents' width - child width)

    data:
        parent width => 80vw;
        child width => (children.length * 25 + children.length - 1)vw
        in this case:
        child width => (4 * 25 + 4 - 1)vw => 103vw
*/
leftArrow.onclick = _ => {
    if (leftArrow.className !== 'unclickable') {
        // not letting a space
        if (giveNum(carousel.style.left) >= -25) {
            carousel.style.left = '2vw';
            leftArrow.className = 'unclickable';
        } else {
            carousel.style.left =  `calc(${carousel.style.left} + 25vw)`;
        }
        rightArrow.classList.remove('unclickable');
    }
}
rightArrow.onclick = _ => {
    if (rightArrow.className !== 'unclickable') {
        if (80 - (carousel.children.length * 25 + carousel.children.length - 1) >= giveNum(carousel.style.left) - 25) {
            carousel.style.left = `${80 - (carousel.children.length * 25 + carousel.children.length - 1) - 2}vw`;
            rightArrow.className = 'unclickable';
        } else {
            carousel.style.left = `calc(${carousel.style.left} - 25vw)`;
        }
        leftArrow.classList.remove('unclickable')
    }
}