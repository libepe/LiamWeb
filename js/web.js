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





