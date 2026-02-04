document.addEventListener('DOMContentLoaded', () => {
    portfolioDeploy();
});




function portfolioDeploy(){

    const pagportfolio=document.getElementById('pagportfolio');
    const startWidth = 0;

     window.addEventListener('scroll', () => {
        pagportfolio.style.width = startWidth + window.scrollY + 'px';
  });
}



  

