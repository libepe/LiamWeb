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
        menuMovil();
        cambioColorHeader();
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

function antiHeaderScroll() {
      let scrollTimeout;
      const menu = document.getElementById('menu');

      window.addEventListener('scroll', () => {
        menu.classList.add('desaparece');

        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {

          menu.classList.remove('desaparece');
        }, 50);
    })
}

function cambioColorHeader(){
    const menu=document.getElementById('menu');
    window.addEventListener('scroll', () => {
        if(window.scrollY > 50){
            menu.classList.add('colorscroll');
        }else{
            menu.classList.remove('colorscroll');
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




//MENU MOVIL//

function menuMovil(){
    const bars=document.getElementById('bars-movil');
    const menu=document.getElementById('menu');

    bars.addEventListener('click',()=>{
        menu.classList.add('abremenu');
    })

    document.addEventListener('click', (event) => {
        if (!menu.contains(event.target) && event.target !== bars) {
            menu.classList.remove('abremenu');
        }
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
    const proyectos=document.getElementById('proyectos');
    const titulo=document.getElementById('titular-texto');

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        titulo.classList.add('disminuye');
      }else{
        titulo.classList.remove('disminuye');
      }
    });
  },
  { threshold: 0 }
);

observer.observe(proyectos);
}
scrollDeploy();








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















