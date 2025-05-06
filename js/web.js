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
        clickShow();
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

function clickShow(){
    const fondo=document.getElementById('fondo');

    fondo.addEventListener('click', () => {
        const header=document.querySelector('header'); 
        if (header) {
            header.classList.toggle('header-activo'); 
        }
    });
    
}



//COLORES FONDO//

function colorOscuro(color, oscuro=0.8) {
    let r=parseInt(color.slice(1, 3), 16);
    let g=parseInt(color.slice(3, 5), 16);
    let b=parseInt(color.slice(5, 7), 16);

    r=Math.floor(r*oscuro);
    g=Math.floor(g*oscuro);
    b=Math.floor(b*oscuro);

    return `rgb(${r}, ${g}, ${b})`;
}

function colorMain(){
    const bCs=document.querySelectorAll('.bc');
    const bRs=document.querySelectorAll('.br');
    const Cs=document.querySelectorAll('.c');
    const colors=document.querySelectorAll('.color');
    colors.forEach((color) => {

        const value=color.getAttribute('data-color');

        function cambioColor(value){
            bCs.forEach((bc => bc.style.backgroundColor=value));
            Cs.forEach((c => c.style.color=value));
            bRs.forEach((br => br.style.borderColor=colorOscuro(value, 0.8)));
        }

        color.addEventListener('click',function(){
            cambioColor(value);
            colors.forEach(c => c.classList.remove('seleccionado'));
            color.classList.add('seleccionado');

            document.querySelectorAll('.bc').forEach(bc => {
                bc.style.backgroundColor=value;
            });

        })

        if(value=='#4d1b1b') {
            cambioColor(value);
            color.classList.add('seleccionado');
        }
    });

}
colorMain();




function colorHF(){
    const Hs=document.querySelectorAll('.h');
    const colors=document.querySelectorAll('.color');
    let value='#4d1b1b';

    colors.forEach((color) => {
        color.addEventListener('click',()=>{
            value=color.getAttribute('data-color');
        })
    })

    Hs.forEach((h) => {
        h.addEventListener('mouseover',()=>{
            if(value){
                h.style.backgroundColor=value;
            } 
        });

        h.addEventListener('mouseout',()=>{
            h.style.backgroundColor='';
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

