const menuIcon = document.querySelector('.menu-icon');
const navList = document.querySelector('.nav-list');
const bgFocus = document.querySelector('.dark-bg-effect');

menuIcon.addEventListener('click', () => {
    if (navList.classList.contains('ativo')) {
        navList.classList.remove('ativo');
        document.querySelector('.menu-icon img').src = 'img/menu.png';
        bgFocus.style.display = 'none';

    } else {
        navList.classList.add('ativo');
        document.querySelector('.menu-icon img').src = 'img/close.png';
        bgFocus.style.display = 'block';
    }
});