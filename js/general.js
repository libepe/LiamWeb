document.addEventListener('DOMContentLoaded', () => {

    toPagInicio();
});





function pagTransicion(activado) {
    const root = document.documentElement; // 👈 html

    root.classList.add('noscrollbar');

    requestAnimationFrame(() => {

        requestAnimationFrame(() => {
            root.classList.remove('noscrollbar');
            activado();
        });
    });
}




function toPagInicio(){


    const toInicio = document.getElementById('inicio');
    const paginicio = document.getElementById('pag-inicio');
    const pagcontacto = document.getElementById('pag-contacto');
    const pagportfolio=document.getElementById('pag-portfolio');

    toInicio.addEventListener('click', e => {
        e.preventDefault();

        [ paginicio, pagportfolio, pagcontacto].forEach(p => {
            p.classList.remove('aparece', 'desaparece', 'pordefecto');
        });

        pagportfolio.classList.add('desaparece');      
        pagcontacto.classList.add('desaparece');

        paginicio.classList.add('aparece', 'fixedpag');
        

          pagTransicion(() => {
              paginicio.classList.remove('fixedpag');
              cambiosDisenoPagPortfolio();
              cambiosDisenoPagContacto();
          });
      })
}
  

