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
            const value = color.getAttribute('data-color');
            body.style.backgroundColor = `${value}`;
        })
    });
}
colorFondo();





//ICONO FONDO//
function iconoFondo(){
    const wall=document.getElementById('wall');
    const icons=document.querySelectorAll('.icon');

    icons.forEach((icon) => {
        icon.addEventListener('click', function() {
            const activeicon=wall.querySelector('i');
            if(activeicon){
                activeicon.remove();
            }

            icons.forEach((icon) => {
                icon.style.backgroundColor='';
            })

            const value=this.dataset.value;
            const iconfondo=document.createElement('i');
            iconfondo.className=`fa-solid fa-${value} icon`;
            wall.appendChild(iconfondo);
            icon.style.backgroundColor='gray';
        })

        if(icon.dataset.value=='star'){
            wall.appendChild(icon.cloneNode(true));
            icon.style.backgroundColor='gray';
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

