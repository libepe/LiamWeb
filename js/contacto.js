document.addEventListener('DOMContentLoaded',function(){
  
});


function pagContacto(){
    const paginicio=document.getElementById('pag-inicio');
    const pagcontacto=document.getElementById('pag-contacto');
    const hablemos=document.getElementById('hablemos');

    hablemos.addEventListener('click',function(){
        paginicio.classList.add('zoom');
        pagcontacto.classList.add('zoom');

    })
}
pagContacto();