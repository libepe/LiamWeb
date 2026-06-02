document.addEventListener('DOMContentLoaded', () => {
  clonedDrops();
fallingDroplet();
});




function clonedDrops(){
  const Drops = document.querySelector('.drop');

  for (let i = 0; i < 2; i++) {
    const clone = Drops.cloneNode(true);
    Drops.parentNode.appendChild(clone);
  }
}




function fallingDroplet() {
  const drops = document.querySelectorAll('.drop');
  const start = performance.now();

  const SPEED = 0.002; 

  const configs = [...drops].map(() => ({
    phase: Math.random() * Math.PI * 2,
    amp: Math.random() * 20 + 30,
    base: Math.random() * 10 + 90,

    // slow variation to break repetition
    driftPhase: Math.random() * Math.PI * 2,
    driftSpeed: Math.random() * 0.0003 + 0.0001,
    driftAmp: Math.random() * 6 + 3
  }));

  function animate(now) {
    const t = now - start;

    for (let i = 0; i < drops.length; i++) {
      const d = configs[i];

      const main = Math.sin(t * SPEED + d.phase);
      const drift = Math.sin(t * d.driftSpeed + d.driftPhase);

      const h = d.base + main * d.amp + drift * d.driftAmp;

      drops[i].style.height = h + 'px';
    }

    requestAnimationFrame(animate);
  }

  requestAnimationFrame(animate);
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
slowScrollTo('toportfolio', 'pag-portfolio');
//slowScrollTo('toinicio', 'pag-inicio');
//slowScrollTo('tocontacto', 'pag-contacto');






  

