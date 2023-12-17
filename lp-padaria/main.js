// Botão scroll

let buttonScroll = document.querySelector('#btnScroll');

buttonScroll.addEventListener('click', () => {

    if (buttonScroll.classList.contains('bx-chevrons-up')) {
    window.scroll({ top: 0, behavior: "smooth" });
    } else {
    window.scroll({ top: 2000, behavior: "smooth" });
    }
    buttonScroll.classList.toggle('bx-chevrons-up');
});

// Slider menu

const imagens = document.querySelector('.carrossel');
const imagem = document.querySelectorAll('.carrossel .card');

let count = 0;

function carrossel(){
    count++;
    
    if(count > imagem.length - 3){
        count = 0;
    }

    imagens.style.transform = `translateX(${-count * 452}px)`;
}

setInterval(carrossel, 1800);