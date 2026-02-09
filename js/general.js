document.addEventListener('DOMContentLoaded', () => {
    centeredPage();
});


function centeredPage(){
    window.addEventListener('load', () => {
      console.log('on')
        const paginicio=document.getElementById('pag-inicio');
          paginicio.scrollIntoView({
          block: 'center',
          behavior: 'auto'
        });

    });
}






function slowScrollTo(topag, pag){
  const toPag=document.getElementById(topag);
  const Pag=document.getElementById(pag);

  toPag.addEventListener('click', function(e){
    e.preventDefault();
    Pag.scrollIntoView({
    behavior: 'smooth', 
    block: 'start'      
  });
  })

}
slowScrollTo('toportfolio', 'pag-portfolio');
slowScrollTo('toinicio', 'pag-inicio');








  

