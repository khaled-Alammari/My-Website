const logo = header.children[0];
const leftArrow = document.querySelector('main #carousel #left-arrow');
const rightArrow = document.querySelector('main #carousel #right-arrow');
const carousel = document.getElementById('elements');
const element = document.getElementsByClassName('element');
const roadsSec = document.getElementsByClassName('roads')[0];

function giveNum(s) {
    return +Array.from(s).filter(e => +(e + 1)).join('');
};

carousel.style.left = '1vw';

// Variables Of The Elements
if (window.matchMedia("(max-width: 767px)").matches) {
    globalThis.elementsWidth = 55;
    globalThis.container = 58;
} else if (window.matchMedia("(max-width: 991px)").matches) {
    globalThis.elementsWidth = 37.5;
    globalThis.container = 78;
} else {
    globalThis.elementsWidth = 24.666;
    globalThis.container = 78;
};


const arrowEffect = elementsWidth + 1;
// width of elements * num of elements + gap between the cards - (watched space - 2 of the border)
const limit = -(elementsWidth * element.length + element.length - container);



logo.onclick = _ => window.scroll(0, 0);

/*
    so the js file can use style property, i have to put it here,
    because i wrote the style in another file, not in index.html file.
*/
// carousel.style.left = '2vw';

leftArrow.className = 'unclickable';


window.addEventListener('scroll', _ => {
    if (window.scrollY >= roads.offsetTop - 300 && window.scrollY < roads.offsetTop + 200) {
        toRoads.className = 'on';
    } else {
        toRoads.className = 'off';
    };
    if (window.scrollY >= roadsSec.offsetTop - 500) {
        roads.style.transform = 'translateY(0)';
        roads.style.opacity = '1';
    };
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
        carousel.style.left = `${giveNum(carousel.style.left) + arrowEffect}vw`;
        if (giveNum(carousel.style.left) >= 1) {
            // carousel.style.left = '1vw';
            leftArrow.classList.add('unclickable');
        };
        rightArrow.classList.remove('unclickable');
    }
}
rightArrow.onclick = _ => {
    if (rightArrow.className !== 'unclickable') {
        carousel.style.left = `${giveNum(carousel.style.left) - arrowEffect}vw`;
        if (giveNum(carousel.style.left) <= limit) {
            // carousel.style.left = `${limit - 1}vw`;
            rightArrow.classList.add('unclickable');
        };
        leftArrow.classList.remove('unclickable')
    }
}