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
            p.classList.remove('aparece', 'desaparece');
            });

            paginicio.classList.add('desaparece');
            pagcontacto.classList.add('desaparece');

            setTimeout(() => {
                window.scrollTo({ top: 0, behavior: 'auto' });
                pagportfolio.classList.add('aparece');
                cambiosDisenoPagPortfolio();
                cambiosDisenoPagContacto();
            }, 200);

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