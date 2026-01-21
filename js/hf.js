//HEADER Y FOOTER//

document.addEventListener('DOMContentLoaded', function () {
    cambioColorHeader();
    menuMovil();
});



//HEADER SHOWING SCROLL//

function cambioColorHeader() {
    const menu = document.getElementById('menu');

        window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            console.log('scrolled')
            menu.classList.add('colorscroll');
        } else {
            menu.classList.remove('colorscroll');
        }
        })}




//MENU MOVIL//

function menuMovil() {
    const bars = document.getElementById('bars-movil');
    const menu = document.getElementById('menu');
    const menuHs=document.querySelectorAll('.h');
    const inicio=document.getElementById('inicio');

    bars.addEventListener('click', () => {
        menu.classList.add('abremenu');
        inicioMenuMovil();
    })

    menuHs.forEach(menuH => { 
        menuH.addEventListener('click',function(){
            menu.classList.remove('abremenu');
            inicioMenuMovil();

        })
    })

    document.addEventListener('click', (event) => {
        if (!menu.contains(event.target) && event.target !== bars) {
            menu.classList.remove('abremenu');
            inicioMenuMovil();
        }
    })

    function inicioMenuMovil(){
        if(menu.classList.contains('abremenu')){
            inicio.classList.add('inicio-retirado');
        }else{
            inicio.classList.remove('inicio-retirado');
        }
    }
}
















