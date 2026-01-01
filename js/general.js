document.addEventListener('DOMContentLoaded', () => {

    navegacionPaginas();
    toPagInicio();
});


function navegacionPaginas(){
    const contenidos=document.querySelectorAll('.contenidopag');

    window.addEventListener('scroll', () => {
        contenidos.forEach(contenido => contenido.style.transform =`translateY(${-window.scrollY}px)`);
    });
}


function toPagInicio(){
    const toInicio = document.getElementById('inicio');
    const paginicio = document.getElementById('pag-inicio');
    const pagcontacto = document.getElementById('pag-contacto');

    toInicio.addEventListener('click', e => {
        e.preventDefault();
        paginicio.classList.remove('desaparece');      
        pagcontacto.classList.remove('aparece');
        cambiosDisenoPagPortfolio();
        cambiosDisenoPagContacto();
        paginicio.classList.add('aparece');   
    });

}