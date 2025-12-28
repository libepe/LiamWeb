document.addEventListener('DOMContentLoaded', () => {

    const inicioBtn = document.getElementById('inicio');
    const paginicio = document.getElementById('pag-inicio');
    const pagcontacto = document.getElementById('pag-contacto');
    const toContactos = document.querySelectorAll('.tocontacto');

    // show contacto page
    toContactos.forEach(btn => {
        btn.addEventListener('click', e => {
            e.preventDefault();
            paginicio.classList.add('cambio');       // fade out inicio
            pagcontacto.classList.add('cambio');     // fade in contacto
        });
    });

    // show inicio page
    inicioBtn.addEventListener('click', e => {
        e.preventDefault();
        paginicio.classList.remove('cambio');      // fade in inicio
        pagcontacto.classList.remove('cambio');    // fade out contacto
    });

});



