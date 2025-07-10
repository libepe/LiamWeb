//HEADER Y FOOTER//

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
        openHeader();
    })
}

function showFooter(){
    const footer=document.getElementById('footer');
    fetch('footer.html')
    .then(response => response.text()) 
    .then(data => {
        footer.innerHTML=data;
        if(footer){
            console.log('footer found');
        }
    })
}

function openHeader(){
    const bars=document.getElementById('bars');
    const menu=document.getElementById('menu');
    const exit=document.getElementById('exitmenu');

    document.addEventListener('click',(m) => {
        if(bars.contains(m.target) || menu.contains(m.target) && m.target!=exit){
            menu.classList.add('abremenu');
        }else{
            menu.classList.remove('abremenu');
        }
    })
}



//ALTERNA//

function pagAlterna(){
    const opcionNO=document.getElementById('opcionNO');
    const portada=document.getElementById('portada');

    opcionNO.addEventListener('click',()=>{
        console.log('clicked')
        portada.classList.add('desaparecer');
    })
}




//COLORES//



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




//PLACEHOLDERS//

function placeholderInput(){
    const placeholder=document.getElementById('mensaje-placeholder');
    const input=document.getElementById('mensaje-texto');

    input.addEventListener('input',() => {
        if(input.value.trim()!==""){
            placeholder.classList.add('ver');
        }else{
            placeholder.classList.remove('ver');
        }
    })
}
placeholderInput();







//TAPS//


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





