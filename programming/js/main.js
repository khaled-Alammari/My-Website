const card = document.getElementsByClassName('card');
const closedCard = document.getElementsByClassName('closed')[0];
const msg = closedCard.children[1];
const skip = closedCard.children[2].children[0];
const ok = closedCard.children[2].children[1];
const prog = document.getElementsByClassName('progress')[0].children[0];
const content = document.getElementsByClassName('content');
const doneCard = document.getElementsByClassName('done-card')[0];
const doneBtn = document.getElementsByClassName('done-btn');
const notDone = document.querySelector('.done-card .no');
const done = document.querySelector('.done-card .yes');
const back = document.getElementsByClassName('back')[0];



if (localStorage.getItem('progress')) {
    prog.style.width = localStorage.getItem('progress');
    for (let i = 0; i < doneBtn.length; i++) {
        if (getNum(localStorage.getItem('progress')) / 25 - 1 > i) {
            doneBtn[i].classList.add('finished');
            doneBtn[i].textContent = 'تم الإنجاز!';
        };
    };
} else {
    localStorage.setItem('progress', '25%')
    prog.style.width = localStorage.getItem('progress');
};

// reload animation
for (let i = 0; i < card.length; i++) {
    card[i].style.transition = `transform .5s ${i * .2}s`;
    card[i].style.transform = 'translateY(0)';
};
let animation = setInterval(_ => {
    for (let i = 0; i < card.length; i++) {
        card[i].style.transition = `opacity 1s 0s, background-color 1s 0s, transform 1s 1s`;
    };
    clearInterval(animation);
}, 0)


for (let i = 0; i < card.length; i++) {
    card[i].onclick = _ => {
        if (getNum(localStorage.getItem('progress')) / 25 - 1 >= i) {
            for (let j = 0; j < card.length; j++) {
                if (card[j] !== card[i]) {
                    card[j].classList.add('dis');
                } else {
                    card[i].classList.add('active')
                    let currentSec = setInterval(_ => {
                        card[i].parentElement.style.display = 'none';
                        document.querySelector(`.content.${card[i].classList[1]}`).classList.add('active');
                        prog.parentElement.style.display = 'none';
                        back.style.visibility = 'initial';
                        clearInterval(currentSec);
                    }, 2000);
                };
            };
        } else {

            msg.textContent = `ينصح بإنهاء بطاقة ${card[i - 1].children[0].children[1].textContent}`;
            console.log(getNum(localStorage.getItem('progress')) / 25 - 1)
            closedCard.style.visibility = "initial";
            closedCard.style.opacity = "1";
            card[i].parentElement.style.filter = 'blur(5px)';
            card[i].parentElement.style.pointerEvents = 'none';
            prog.parentElement.style.filter = 'blur(5px)';
        };
    };
};

ok.onclick = _ => {
    closedCard.style.visibility = "hidden";
    closedCard.style.opacity = "0";
    card[0].parentElement.style.filter = 'blur(0px)';
    card[0].parentElement.style.pointerEvents = 'initial';
    prog.parentElement.style.filter = 'blur(0px)';
};

skip.onclick = _ => {
    ok.click();
    for (let i = 0; i < card.length; i++) {
        if (RegExp(card[i].children[0].children[1].textContent).test(msg.textContent)) {
            localStorage.setItem('progress', `${(i + 2) / card.length * 100}%`)
            prog.style.width = localStorage.getItem('progress');
            card[i + 1].click();
            break;
        };
    };
};

back.onclick = _ => {
    window.location.reload();
};

for (let i = 0; i < doneBtn.length; i++) {
    doneBtn[i].onclick = _ => {
        if (!/finished/.test(doneBtn[i].classList)) {
            doneCard.style.visibility = 'initial';
            doneCard.style.opacity = '1';
            content[i].style.pointerEvents = 'none';
            content[i].style.filter = 'blur(5px)';
            back.style.filter = 'blur(5px)';
            back.style.pointerEvents = 'none';
        };
    };
};

notDone.onclick = _ => {
    doneCard.style.visibility = 'hidden';
    doneCard.style.opacity = '0';
    document.querySelector('.content.active').style.filter = 'blur(0px)';
    document.querySelector('.content.active').style.pointerEvents = 'initial';
    back.style.filter = 'blur(0px)';
    back.style.pointerEvents = 'initial';
};

done.onclick = _ => {
    notDone.click();
    document.querySelector('.content.active').lastElementChild.classList.add('finished');
    document.querySelector('.content.active').lastElementChild.textContent = '!تم الإنجاز';
    if (localStorage.getItem('progress') !== '100%') {
        localStorage.setItem('progress', `${getNum(localStorage.getItem('progress')) + 25}%`)
    }
    back.click()
};

function getNum(str) {
    return +str.split('').filter(e => /[0-9]/.test(e)).join('');
};