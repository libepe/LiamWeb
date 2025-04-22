//HEADER//

document.addEventListener('DOMContentLoaded',function(){
    showHeader();
    showFooter();
});


function showHeader(){
    const header=document.getElementById('header');
    fetch('header.html')
    .then(response => response.text()) 
    .then(data => {
        header.innerHTML=data;
    })
}

function showFooter(){
    const footer=document.getElementById('footer');
    fetch('footer.html')
    .then(response => response.text()) 
    .then(data => {
        footer.innerHTML=data;
    })
}





//HOME/

//COLORES FONDO//
function colorFondo(){
    const body=document.body;
    const colors=document.querySelectorAll('.color');
    colors.forEach((color) => {
        color.addEventListener('click',function(){
            const value=color.getAttribute('data-color');
            body.style.backgroundColor=`${value}`;

            colors.forEach(c => c.classList.remove('seleccionado'));

            color.classList.add('seleccionado');
        })
        if(color.getAttribute('data-color')=='#CCCC00') {
            color.classList.add('seleccionado');
            body.style.backgroundColor='#CCCC00';
        }
    });
}
colorFondo();





//ICONO FONDO//
function iconoFondo(){
    const icons=document.querySelectorAll('.icon');
    const wall=document.getElementById('wall');

    icons.forEach((icon) => {
        icon.addEventListener('click', function() {
            const valueIcon=this.dataset.value;

            wall.innerHTML='';

            for (let i=0;i<100;i++) {
                const iconActivo=document.createElement('i');
                iconActivo.className=`fa-solid fa-${valueIcon} icon`;
                wall.appendChild(iconActivo);
            }
            icons.forEach((i) => i.classList.remove('seleccionado'));
            
            icon.classList.add('seleccionado');
        })

        if(icon.dataset.value=='star'){
            for (let i=0;i<100;i++) {
            const star=document.createElement('i');
            star.className=`fa-solid fa-star icon`;
            wall.appendChild(star);
            }
            icon.classList.add('seleccionado');
        }
    })


}
iconoFondo();











//GENERAL//

function efectoMantenido(event) {
    if (event.button==0 || event.pointerType=="touch") {
        event.currentTarget.classList.add('mantener');
    }
}

function efectoNoMantenido(event) {
    if (event.button==0 || event.pointerType=="touch") {
        event.currentTarget.classList.remove('mantener');
    }
}


const divClicks=document.querySelectorAll('.sobremi');


divClicks.forEach((div) => {
    div.addEventListener('pointerdown', efectoMantenido);
    div.addEventListener('pointerup', efectoNoMantenido);
    div.addEventListener('pointerleave', efectoNoMantenido);
    div.addEventListener('pointercancel', efectoNoMantenido);
});

