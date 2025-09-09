//HEADER Y FOOTER//

document.addEventListener('DOMContentLoaded',function(){
    showHeader();
    showFooter();
    colorTheme();
    scrollDeploy();
});


function showHeader(){
    const header=document.getElementById('header');
    fetch('header.html')
    .then(response => response.text()) 
    .then(data => {
        header.innerHTML=data;
        antiHeaderScroll();
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


//HEADER SHOWING SCROLL//

function antiHeaderScroll(){
    let scrolled=false;
    const menu=document.getElementById('menu');

    window.addEventListener('scroll',()=>{
        if(!scrolled && window.scrollY > 0){
            scrolled=true;
            menu.classList.add('desaparece');
        }else{
            menu.classList.remove('desaparece');
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
    const todo=document.querySelectorAll('*');
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
        color.addEventListener('pointerdown',()=>{
            todo.forEach(t=>t.classList.add('cambiocolor'));

            const escogido=color.getAttribute('data-color');
            localStorage.setItem('colortheme', escogido);
            colors.forEach(c => c.classList.remove('seleccionado'));
            color.classList.add('seleccionado');
            document.documentElement.style.setProperty('--colortheme',escogido);

            setTimeout(()=>{
                todo.forEach(t=>t.classList.remove('cambiocolor'));
            }, 100)
        })
    })
}



//SCROLL DEPLOY//

function scrollDeploy(){
    const paginaPortfolio=document.getElementById('pagina-portfolio');
    const paginaContacto=document.getElementById('pagina-contacto');


    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
        paginaPortfolio.classList.add('deploy');
        } else {
        paginaPortfolio.classList.remove('deploy');
        }
    });


    window.addEventListener('scroll', function() {
        if (window.scrollY > 800) {
        paginaContacto.classList.add('deploy');
        } else {
        paginaContacto.classList.remove('deploy');
        }
    });
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















