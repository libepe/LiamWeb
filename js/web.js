//HEADER Y FOOTER//

document.addEventListener('DOMContentLoaded',function(){
    showHeader();
    showFooter();
    setInterval(rotaTitular, 800);
});


function showHeader(){
    const header=document.getElementById('header');
    fetch('header.html')
    .then(response => response.text()) 
    .then(data => {
        header.innerHTML=data;
        colorTheme();
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



//ALTERNA//

function pagAlterna(){
    const opcionNO=document.getElementById('opcionNO');
    const portada=document.getElementById('portada');

    opcionNO.addEventListener('click',()=>{
        console.log('clicked')
        portada.classList.add('desaparecer');
    })
}




//TECLADO DE COLORES//

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
        color.addEventListener('click',()=>{
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



//BOTON DE COLORES//

function tocaColor(){
    const colorchanger=document.getElementById('colorchanger');
    const colors=document.querySelectorAll('.color');
    const value=localStorage.getItem('colortheme') || '#b0c9db';
    document.documentElement.style.setProperty('--colortheme',value);
    let index=0;

    colorchanger.addEventListener('pointerdown',()=>{
        const color=colors[index];
        const escogido=color.getAttribute('data-color');
        localStorage.setItem('colortheme', escogido);
        document.documentElement.style.setProperty('--colortheme',escogido);
        index=(index+1) % colors.length;

    })

}
tocaColor();

function efectoCambioColor(){
    const colorchanger=document.getElementById('colorchanger');
    const rayos=document.getElementById('colorchanger-rayos');
    colorchanger.addEventListener('click',()=>{
        rayos.classList.add('on');
    })
}
efectoCambioColor();

//TITULAR BANK//

function rotaTitular(){
    const titulares=document.querySelectorAll('.titular');

    titulares.forEach((titular)=>{
        titular.classList.toggle('rota-titular');
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














