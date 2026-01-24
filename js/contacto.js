document.addEventListener('DOMContentLoaded', () => {

    toPagContacto();
});





function toPagContacto(){

    const paginicio = document.getElementById('pag-inicio');
    const pagcontacto = document.getElementById('pag-contacto');
    const toContactos = document.querySelectorAll('.tocontacto');
    const pagportfolio = document.getElementById('pag-portfolio');

    toContactos.forEach(toContacto => {
        toContacto.addEventListener('click', e => {
            e.preventDefault();

            [paginicio, pagportfolio, pagcontacto].forEach(p => {
            p.classList.remove('aparece', 'desaparece', 'pordefecto');
            });

            pagportfolio.classList.add('desaparece');
            paginicio.classList.add('desaparece');

            pagcontacto.classList.add('aparece');

            window.scrollTo(0,0);


                    cambiosDisenoPagPortfolio();
                    cambiosDisenoPagContacto();

            })
    });

}


function cambiosDisenoPagContacto(){
    const contactomenu=document.getElementById('tocontacto-menu');
    const pagcontacto = document.getElementById('pag-contacto');

    if(pagcontacto.classList.contains('aparece')){
        contactomenu.classList.add('colorear');
    }else{
        contactomenu.classList.remove('colorear');

    }

}
