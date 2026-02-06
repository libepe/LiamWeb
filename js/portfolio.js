document.addEventListener('DOMContentLoaded', () => {
    portfolioDeploy();
});


function portfolioDeploy() {
  const opener = document.getElementById('opener');
  const paginicio=document.getElementById('pag-inicio');


  window.addEventListener('scroll', () => {
    const scale = 1 + window.scrollY / 20;
    const opacity= 1 - window.scrollY / 300;

    opener.style.transform = `scale(${scale}) rotateZ(-135deg)`;
    paginicio.style.opacity= `${opacity}`;
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