//HEADER Y FOOTER//

document.addEventListener('DOMContentLoaded', function () {
    cambioColorHeader();
    menuMovil();
    navegacionPaginas();
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
    const menuHs=document.querySelectorAll('.h');

    bars.addEventListener('click', () => {
        menu.classList.add('abremenu');
    })

    menuHs.forEach(menuH => { 
        menuH.addEventListener('click',function(){
            menu.classList.remove('abremenu');

        })
    })

    document.addEventListener('click', (event) => {
        if (!menu.contains(event.target) && event.target !== bars) {
            menu.classList.remove('abremenu');
        }
    })
}






function navegacionPaginas(){
    const contenidos = document.querySelectorAll('.contenidopag');

    window.addEventListener('scroll', () => {
        contenidos.forEach(contenido => contenido.style.transform = `translateY(${-window.scrollY}px)`);
    });
}










