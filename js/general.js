document.addEventListener('DOMContentLoaded', () => {
    portfolioDeploy();
    centeredPage();
});


function centeredPage(){
    window.addEventListener('load', () => {
        const middle = document.documentElement.scrollHeight / 2;
    window.scrollTo(0, middle);
    });
}

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







  

