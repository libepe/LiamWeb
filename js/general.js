document.addEventListener('DOMContentLoaded', () => {
    clonedPaintdrops();
fallingDroplet();
});


function clonedPaintdrops(){
  const paintdrops = document.querySelector('.paintdrops');

  for (let i = 0; i < 1; i++) {
    const clone = paintdrops.cloneNode(true);
    paintdrops.parentNode.appendChild(clone);
  }
}




function fallingDroplet() {
  const Paintdrops = document.querySelectorAll('.paintdrops');

  Paintdrops.forEach((paintdrop) => {
    const Drops = paintdrop.querySelectorAll('.drop');

    function loop() {
      paintdrop.classList.remove('escondido');

      Drops.forEach(drop => {
        const randomHeight = Math.floor(Math.random() * 600) + 200;
        const randomDuration = Math.random() * 3 + 1;

        drop.style.height = randomHeight + 'px';
        drop.style.transition = `height ${randomDuration}s`;
      });

      setTimeout(() => {
        paintdrop.classList.add('escondido');

        setTimeout(() => {
          Drops.forEach(drop => {
            drop.style.height = '0';
            drop.style.transition = 'none';
          });

          setTimeout(loop, 20) 

        }, 200);

      }, 1500);
    }

    setTimeout(loop, Math.random() * 2000) 
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






  

