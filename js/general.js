document.addEventListener('DOMContentLoaded', () => {
    portfolioDeploy();
});




function portfolioDeploy(){

    const opener=document.getElementById('opener');
    const startWidth = 0;

     window.addEventListener('scroll', () => {
        opener.style.width = startWidth + window.scrollY + 'px';
  });
}



  

