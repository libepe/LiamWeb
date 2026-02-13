document.addEventListener('DOMContentLoaded', () => {
    centeredPage();
    flechasFixed();

});




function centeredPage(){
  const html=document.documentElement;
  const paginicio=document.getElementById('pag-inicio');
    window.addEventListener('load', () => {

          paginicio.scrollIntoView({
            block: 'center',
            behavior: 'auto'
          }) 
       html.classList.add('smoothed');
    });
}



function flechasFixed(){
  const paginicio=document.getElementById('pag-inicio');
  const scrollportfolio=document.getElementById('scrollportfolio');

  window.addEventListener('scroll', () => {
    const scrollTop=window.scrollY;
    if(scrollTop>=paginicio.offsetTop){
      scrollportfolio.classList.add('fixedscroll');
    }else{
      scrollportfolio.classList.remove('fixedscroll');
    }
  })
}



function slowScrollTo(topag, pag) {
  const toPag = document.getElementById(topag);
  const Pag = document.getElementById(pag);

  toPag.addEventListener('click', function(e) {
    e.preventDefault();
    const arriba = Pag.offsetTop;
    window.scrollTo({ top: arriba + 10, behavior: 'smooth' });
  });
}
slowScrollTo('toportfolio', 'pag-portfolio');
slowScrollTo('toinicio', 'pag-inicio');
slowScrollTo('tocontacto', 'pag-contacto');








  

