const header = document.getElementsByTagName('header')[0];
const dropdown = document.getElementsByClassName('dropdown-menu')[0];
const menuButton = document.getElementsByClassName('menu')[0];
const toRoads = document.querySelector('header nav ul li');
const menuItems = dropdown.children[0].children;
const roads = document.getElementById('roads');

if (window.scrollY < 50) {
  header.style.height = '15vh';
}

; // 100 is the height of the header.

toRoads.onclick = _ => window.scrollTo(0, roads.offsetTop - 100);

menuItems[1].onclick = _ => toRoads.click();

for (let i = 0; i < menuItems.length; i++) {
  menuItems[i].addEventListener('click', _ => dropdown.style.left = '-100%');
}

;
window.addEventListener('scroll', _ => {
  if (window.scrollY < 50) {
    header.style.height = '15vh';
  } else {
    header.style.height = '12vh';
  }

  ;
});

menuButton.onclick = _ => {
  dropdown.style.left = '0%';
};