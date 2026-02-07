document.addEventListener('DOMContentLoaded', () => {
    centeredPage();
    slowScrollTo();
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






function slowScrollTo(){
  const toportfolio=document.getElementById('toportfolio');
  const pagportfolio=document.getElementById('pag-portfolio');

  toportfolio.addEventListener('click', function(e){
    e.preventDefault();
    pagportfolio.scrollIntoView({
    behavior: 'smooth', 
    block: 'start'      
  });
  })

}










  

