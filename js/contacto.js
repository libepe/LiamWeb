document.addEventListener('DOMContentLoaded', () => {

    toPagContacto();
});





function toPagContacto(){
    const paginicio = document.getElementById('pag-inicio');
    const pagcontacto = document.getElementById('pag-contacto');
    const toContactos = document.querySelectorAll('.tocontacto');

    toContactos.forEach(toContacto => {
        toContacto.addEventListener('click', e => {
            e.preventDefault();
            paginicio.classList.remove('aparece');
            paginicio.classList.add('desaparece');       
            pagcontacto.classList.add('aparece');
            cambiosDisenoPagContacto();
            window.scrollTo(0, 0);
        });
    });

}

function cambiosDisenoPagContacto(){
    const contactomenu=document.getElementById('tocontacto-menu');
    const pagcontacto = document.getElementById('pag-contacto');
    console.log('runs')

    if(pagcontacto.classList.contains('aparece')){
        console.log('detected')
        contactomenu.classList.add('colorear');
    }else{
        contactomenu.classList.remove('colorear');

    }

}
