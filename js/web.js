//HEADER//

document.addEventListener('DOMContentLoaded',function(){
    showHeader();
    showFooter();
    colorMain();
});


function showHeader(){
    const header=document.getElementById('header');
    fetch('header.html')
    .then(response => response.text()) 
    .then(data => {
        header.innerHTML=data;
        colorHF();
        menuColor();
        colorMain();
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


function menuColor(){
    const tema=document.getElementById('tema');
    const colors=document.getElementById('colors');
        document.addEventListener('click',(c) => {
        if(c.target==tema){
            colors.classList.toggle('opencolors');
        }else if(colors.contains(c.target)){
            colors.classList.add('opencolors');
        }else{
            colors.classList.remove('opencolors');
        }
    })
}




//HOME/



//COLORES FONDO//

function colorMain(){
    const bCs=document.querySelectorAll('.bc');
    const bRs=document.querySelectorAll('.br');
    const bWs=document.querySelectorAll('.bw');
    const Cs=document.querySelectorAll('.c');
    const fondo=document.getElementById('fondo');
    const colors=document.querySelectorAll('.color');

    const colorDefecto='#874f4f';

    const colorGuardado='guardar';

    colors.forEach((color) => {

        const value=color.getAttribute('data-color');

        function cambioColor(value){
            bCs.forEach((bc => bc.style.backgroundColor=value));
            Cs.forEach((c => c.style.color=value));
            bWs.forEach((bw => bw.style.boxShadow=`inset 0px 0px 20px ${value}`));
            bRs.forEach((br => br.style.borderColor=value));
            if(fondo){
                fondo.style.backgroundImage=`linear-gradient(black, ${value})`;
            }
        }

        color.addEventListener('click',function(){
            cambioColor(value);
            localStorage.setItem(colorGuardado,value);
            colors.forEach(c => c.classList.remove('seleccionado'));
            color.classList.add('seleccionado');
        })

        const colorEscogido=localStorage.getItem(colorGuardado) || colorDefecto;


        if(value==colorEscogido) {
            cambioColor(value);
            color.classList.add('seleccionado');
        }
    });

}





function colorHF(){
    const Hs=document.querySelectorAll('.h');
    const colors=document.querySelectorAll('.color');

    const colorDefecto='#874f4f';
    const colorGuardado='guardar';

    let value=localStorage.getItem(colorGuardado) || colorDefecto;

    colors.forEach((color) => {
        color.addEventListener('click',()=>{
            value=color.getAttribute('data-color');
            localStorage.setItem(colorGuardado,value);
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

    Hs.forEach((h) => {
        h.style.color=value;
    })
}












//GENERAL//

let paginaActual=null;
function cambioPagina(idApartado, idPagina){
    const pagina=document.getElementById(idPagina);
    const apartado=document.getElementById(idApartado);


    apartado.addEventListener('pointerdown', () => {
        if(paginaActual && paginaActual!==pagina){
            paginaActual.classList.remove('activar');
        }
        
        if(pagina!==paginaActual){
            pagina.classList.add('activar');
            paginaActual=pagina;
        }
            
    });
 };

    

cambioPagina('apartado1','pagina1');
cambioPagina('apartado2','pagina2');
cambioPagina('apartado3','pagina3');
cambioPagina('apartado4','pagina4');





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

