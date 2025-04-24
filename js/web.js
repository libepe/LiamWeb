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
        colorHF();
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
function colorMain(){
    const bCs=document.querySelectorAll('.bc');
    const Cs=document.querySelectorAll('.c');
    const colors=document.querySelectorAll('.color');
    colors.forEach((color) => {

        const value=color.getAttribute('data-color');

        function cambioColor(value){
            bCs.forEach((bc => bc.style.backgroundColor=value));
            Cs.forEach((c => c.style.color=value));
        }

        color.addEventListener('click',function(){
            cambioColor(value);
            colors.forEach(c => c.classList.remove('seleccionado'));
            color.classList.add('seleccionado');
        })

        if(value=='#CCCC00') {
            cambioColor(value);
            color.classList.add('seleccionado');
        }
    });
}
colorMain();


function colorHF(){
    const Hs=document.querySelectorAll('.h');
    const colors=document.querySelectorAll('.color');
    console.log('Found .h elements:', Hs);
    let value='#CCCC00';

    colors.forEach((color) => {
        color.addEventListener('click',()=>{
            value=color.getAttribute('data-color');
        })
    })

    Hs.forEach((h) => {
        h.addEventListener('mouseover',()=>{
            if(value){
                h.style.color=value;
            } 
        });

        h.addEventListener('mouseout',()=>{
            h.style.color='';
        });
    })
}











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

