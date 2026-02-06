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









  

