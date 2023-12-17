
function slider1(flings) {
    document.getElementById('one').src = flings;
    document.documentElement.style.setProperty('--main-color', '#fb0c11');
    document.documentElement.style.setProperty('--bg-dark', '#311d1d');
    document.documentElement.style.setProperty('--bg-light', '#594141');
};

function slider2(flings) {
    document.getElementById('one').src = flings;
    document.documentElement.style.setProperty('--main-color', '#52ff37');
    document.documentElement.style.setProperty('--bg-dark', '#20311d');
    document.documentElement.style.setProperty('--bg-light', '#455941');
};

function slider3(flings) {
    document.getElementById('one').src = flings;
    document.documentElement.style.setProperty('--main-color', '#4157fd');
    document.documentElement.style.setProperty('--bg-dark', '#1d1f31');
    document.documentElement.style.setProperty('--bg-light', '#414359');
}

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
}