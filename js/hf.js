//HEADER Y FOOTER//

document.addEventListener('DOMContentLoaded', function () {
    cambioColorHeader();
    menuMovil();
});



//HEADER SHOWING SCROLL//

function cambioColorHeader() {
    const menu = document.getElementById('menu');
    console.log('menu is:', menu);
    window.addEventListener('scroll', () => {
        console.log('scroll event', window.scrollY);
        if (window.scrollY > 50) {
            menu.classList.add('colorscroll');
            console.log('on')
        } else {
            menu.classList.remove('colorscroll');
        }
    })
}



//MENU MOVIL//

function menuMovil() {
    const bars = document.getElementById('bars-movil');
    const menu = document.getElementById('menu');

    bars.addEventListener('click', () => {
        menu.classList.add('abremenu');
    })

    document.addEventListener('click', (event) => {
        if (!menu.contains(event.target) && event.target !== bars) {
            menu.classList.remove('abremenu');
        }
    })
}



//PLACEHOLDERS//

function placeholderInput() {
    const placeholder = document.getElementById('mensaje-placeholder');
    const input = document.getElementById('mensaje-texto');

    input.addEventListener('input', () => {
        if (input.value.trim() !== "") {
            placeholder.classList.add('ver');
        } else {
            placeholder.classList.remove('ver');
        }
    })
}
placeholderInput();















