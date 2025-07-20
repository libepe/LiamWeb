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