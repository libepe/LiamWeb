document.addEventListener('DOMContentLoaded', () => {

    toPagPortfolio();
});


function toPagPortfolio(){

    const paginicio = document.getElementById('pag-inicio');
    const pagportfolio = document.getElementById('pag-portfolio');
    const pagcontacto = document.getElementById('pag-contacto');
    const toPortfolios = document.querySelectorAll('.toportfolio');

    toPortfolios.forEach(toPortfolio => {
        toPortfolio.addEventListener('click', e => {
            e.preventDefault();

            [paginicio, pagportfolio, pagcontacto].forEach(p => {
            p.classList.remove('aparece', 'desaparece', 'pordefecto');
            });

            paginicio.classList.add('desaparece');
            pagcontacto.classList.add('desaparece');

            pagportfolio.classList.add('aparece', 'fixedpag');


          pagTransicion(() => {
                    pagportfolio.classList.remove('fixedpag');
                    cambiosDisenoPagPortfolio();
                    cambiosDisenoPagContacto();
                });

        });
    });

}


function cambiosDisenoPagPortfolio(){
    const portfoliomenu=document.getElementById('toportfolio-menu');
    const pagportfolio = document.getElementById('pag-portfolio');

    if(pagportfolio.classList.contains('aparece')){
        portfoliomenu.classList.add('colorear');
    }else{
        portfoliomenu.classList.remove('colorear');

    }

}