document.addEventListener('DOMContentLoaded', () => {
    
fallingDroplet();
});



function fallingDroplet(){
  const Paintdrops=document.querySelectorAll('.paintdrops');

  Paintdrops.forEach((paintdrop, paintdropIndex)=>{
    const Drops=paintdrop.querySelectorAll('.drop');
    const retraso=paintdropIndex * 500;

    setTimeout(()=>{
      Drops.forEach((drop)=>{

        paintdrop.style.opacity='0.2';
        paintdrop.style.transition='opacity 0.5s';

        const randomHeight=Math.floor(Math.random()*600)+200;
        const randomDuration = Math.random() * 3 + 1;
        drop.style.height= randomHeight + 'px';
        drop.style.transition=` height ${randomDuration}s`;
      });

    },retraso);

    setTimeout(()=>{
      paintdrop.style.opacity= '0';
    },retraso + 1000)

    setTimeout(()=>{
      Drops.forEach((drop)=>{
        drop.style.height= '0';
      })
      if (paintdropIndex==Paintdrops.length - 1) {
        fallingDroplet();
      }
    },retraso + 1200)

  });


}




function slowScrollTo(topag, pag) {
  const toPag = document.getElementById(topag);
  const Pag = document.getElementById(pag);

  toPag.addEventListener('click', function(e) {
    e.preventDefault();
    const arriba = Pag.offsetTop;
    window.scrollTo({ top: arriba + 10, behavior: 'smooth' });
  });
}
//slowScrollTo('toportfolio', 'pag-portfolio');
//slowScrollTo('toinicio', 'pag-inicio');
//slowScrollTo('tocontacto', 'pag-contacto');






  

