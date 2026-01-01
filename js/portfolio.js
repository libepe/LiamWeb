document.addEventListener('DOMContentLoaded', () => {

    toPagPortfolio();
});


function toPagPortfolio(){
    const paginicio = document.getElementById('pag-inicio');
    const pagportfolio = document.getElementById('pag-portfolio');
    const toPortfolios = document.querySelectorAll('.toportfolio');

    toPortfolios.forEach(toPortfolio => {
        toPortfolio.addEventListener('click', e => {
            e.preventDefault();
            paginicio.classList.remove('aparece');
            paginicio.classList.add('desaparece');       
            pagportfolio.classList.add('aparece');
            cambiosDisenoPagPortfolio();
            window.scrollTo(0, 0);
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