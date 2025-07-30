
function zoom3D(){
    const fondo=document.getElementById('fondo');
    const wall=document.querySelectorAll('.wall');

    fondo.addEventListener('click',() => {
        console.log('go');
        wall.forEach(w=>w.classList.toggle('zoom'));
    })


}
zoom3D();