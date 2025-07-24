//HEADER Y FOOTER//

document.addEventListener('DOMContentLoaded',function(){
    showHeader();
    showFooter();
    colorTheme();
});


function showHeader(){
    const header=document.getElementById('header');
    fetch('header.html')
    .then(response => response.text()) 
    .then(data => {
        header.innerHTML=data;
        headerOnScroll();
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

function headerOnScroll(){
    const menu=document.getElementById('menu');

    let scrollTimeout;

    window.addEventListener('scroll',()=>{
        menu.classList.add('esconde');

        clearTimeout(scrollTimeout);
            scrollTimeout=setTimeout(() => {
            menu.classList.remove('esconde');
        }, 100);
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
    const value=localStorage.getItem('colortheme') || '#b0c9db';
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
















