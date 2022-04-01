const header = document.getElementsByTagName('header')[0];

if (window.scrollY < 50) {
    header.style.height = '15vh';
};

window.addEventListener('scroll', _ => {
    if (window.scrollY < 50) {
        header.style.height = '15vh';
    } else {
        header.style.height = '12vh';
    };
})

