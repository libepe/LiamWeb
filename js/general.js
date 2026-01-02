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
    const fondo=document.getElementById('fondo');

    const toInicio = document.getElementById('inicio');
    const paginicio = document.getElementById('pag-inicio');
    const pagcontacto = document.getElementById('pag-contacto');
    const pagportfolio=document.getElementById('pag-portfolio');

    toInicio.addEventListener('click', e => {
        e.preventDefault();
        fondo.classList.remove('abrefondo');

        fondo.classList.add('cierrafondo');

        [ paginicio, pagportfolio, pagcontacto].forEach(p => {
            p.classList.remove('aparece', 'desaparece');
        });

        pagportfolio.classList.add('desaparece');      
        pagcontacto.classList.add('desaparece');
        void pagportfolio.offsetWidth;

        fondo.classList.add('abrefondo');
        paginicio.classList.add('aparece');
        cambiosDisenoPagPortfolio();
        cambiosDisenoPagContacto();

        window.scrollTo(0, 0);
    });

}