const secs = document.getElementsByTagName('main')[0];
const title = secs.children[0];
const h2s = document.getElementsByClassName('h2s')[0];
const leftArrow = title.children[0];
const theStep = title.children[1];
const rightArrow = title.children[2];
const advice = document.getElementsByClassName('advice');

let actSec = document.querySelector('section.active');


for (let i = 0; i < advice.length; i++) {
    advice[i].children[0].children[0].textContent = i + 1;
    advice[i].children[0].onclick = _ => {
        if (advice[i].children[0].className === 'active') {
            advice[i].children[0].classList.remove('active');
            console.log(advice[i].children[0].classList)
        } else {
            for (let i = 0; i < advice.length; i++) {
                advice[i].children[0].classList.remove('active');
            };
            advice[i].children[0].classList.add('active');
            console.log(2)
        };
    };
};

h2s.style.left = `${(h2s.children.length - 1) * -300}px`;

function giveNum(s) {
    return Array.from(s).filter(e => +(e + 1)).join('');
};

leftArrow.onclick = _ => {
    if (leftArrow.classList.length === 2) {
        for (let i = 1; i < secs.children.length; i++) {
            secs.children[i].classList.remove('active');
        };
        secs.children[+actSec.classList[1][2] + 2].classList.add('active')
        actSec = document.querySelector('section.active');
        h2s.style.left = `${+giveNum(h2s.style.left) + 300}px`
        rightArrow.classList.add('active')
        if (+actSec.classList[1][2] === secs.children.length - 3) {
            leftArrow.classList.remove('active');
        };
    };
};

rightArrow.onclick = _ => {
    if (rightArrow.classList.length === 2) {
        for (let i = 1; i < secs.children.length; i++) {
            secs.children[i].classList.remove('active');
        };
        secs.children[+actSec.classList[1][2]].classList.add('active')
        actSec = document.querySelector('section.active');
        h2s.style.left = `${+giveNum(h2s.style.left) - 300}px`
        leftArrow.classList.add('active')
        if (!+actSec.classList[1][2]) {
            rightArrow.classList.remove('active');
        };
    };
}