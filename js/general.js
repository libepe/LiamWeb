document.addEventListener('DOMContentLoaded', () => {

    navegacionPaginas();

    toPagInicio();
});


function navegacionPaginas() {
  const contenidos = document.querySelectorAll('.contenidopag');

  window.addEventListener('scroll', () => {
    contenidos.forEach(contenido => {
        contenido.style.transform = `translateY(${-window.scrollY}px)`;

    });
  });
}


window.addEventListener('scroll', navegacionPaginas);


function toPagInicio(){

    const toInicio = document.getElementById('inicio');
    const paginicio = document.getElementById('pag-inicio');
    const pagcontacto = document.getElementById('pag-contacto');
    const pagportfolio=document.getElementById('pag-portfolio');

    toInicio.addEventListener('click', e => {
        e.preventDefault();

        [ paginicio, pagportfolio, pagcontacto].forEach(p => {
            p.classList.remove('aparece', 'desaparece');
        });

        pagportfolio.classList.add('desaparece');      
        pagcontacto.classList.add('desaparece');
        void pagportfolio.offsetWidth;

        paginicio.classList.add('aparece');

        cambiosDisenoPagPortfolio();
        cambiosDisenoPagContacto();
        window.scrollTo(0,0);

    });

}