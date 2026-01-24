document.addEventListener('DOMContentLoaded', () => {

    toPagInicio();
});







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

        paginicio.classList.add('aparece');

       
        

              cambiosDisenoPagPortfolio();
              cambiosDisenoPagContacto();

      })
}
  

