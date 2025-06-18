//HEADER Y FOOTER LOADS//

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
        colorTheme();
        menuColor();
        invertFondo();
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



//PALETA DE COLORES//

function menuColor(){
    const tema=document.getElementById('tema');
    const colors=document.getElementById('colors');
        document.addEventListener('click',(c) => {
        if(c.target==tema){
            colors.classList.toggle('opencolors');
        }else{
            colors.classList.remove('opencolors');
        }
    })
}



function colorTheme(){
    const colors=document.querySelectorAll('.color');
    const value=localStorage.getItem('colortheme') || '#874f4f';
    document.documentElement.style.setProperty('--colortheme',value);

    colors.forEach((color) => {
        if(color.getAttribute('data-color')==value){
            color.classList.add('seleccionado');
        }else{
            color.classList.remove('seleccionado');
        }
    })

    colors.forEach((color) => {
        color.addEventListener('click',()=>{
            const escogido=color.getAttribute('data-color');
            localStorage.setItem('colortheme', escogido);
            colors.forEach(c => c.classList.remove('seleccionado'));
            color.classList.add('seleccionado');
            document.documentElement.style.setProperty('--colortheme',escogido);
        })
    })
}


function invertFondo(){
    const invertido=document.getElementById('invertido');
    const fondos=document.getElementById('fondos');
    const guardado=localStorage.getItem('gradiente');

    if(guardado=='true'){
        fondos.classList.add('fondo-invertido');
    }

    invertido.addEventListener('click',() => {
        fondos.classList.toggle('fondo-invertido');

        const estaInvertido=fondo.classList.contains('fondo-invertido');
        localStorage.setItem('gradiente',estaInvertido);
    })
}






//MENU DEL MOVIL//


















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


const divClicks=document.querySelectorAll('');


divClicks.forEach((div) => {
    div.addEventListener('pointerdown', efectoMantenido);
    div.addEventListener('pointerup', efectoNoMantenido);
    div.addEventListener('pointerleave', efectoNoMantenido);
    div.addEventListener('pointercancel', efectoNoMantenido);
});

