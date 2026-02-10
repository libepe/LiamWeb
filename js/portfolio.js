document.addEventListener('DOMContentLoaded', () => {
    portfolioDeploy();
});


function portfolioDeploy() {

  const scrollportfolio = document.getElementById('scrollportfolio');
  const scrollportfolioFondo=document.getElementById('scrollportfolio-fondo');

  const estiloParent=getComputedStyle(scrollportfolio);
  const estiloFondo=getComputedStyle(scrollportfolioFondo);

  const principio={
    alto: parseFloat(estiloFondo.getPropertyValue('--alto')),
    ancho: parseFloat(estiloFondo.getPropertyValue('--ancho')),
    opacidad: parseFloat(estiloFondo.getPropertyValue('--opacidad')),
    brillo: parseFloat(estiloParent.getPropertyValue('--brillo')),
  }

  const rapidez={
    tamanyo: 2.5,
    opacidad: 0.2,
    brillo: 0.03,
  }

  window.addEventListener('scroll', () => {

    scrollportfolioFondo.style.setProperty('--alto', principio.alto + window.scrollY * rapidez.tamanyo + 'px');
    scrollportfolioFondo.style.setProperty('--ancho', principio.ancho + window.scrollY * rapidez.tamanyo + 'px');
    scrollportfolioFondo.style.setProperty('--opacidad', Math.min(1,Math.max(0, principio.opacidad + window.scrollY * rapidez.opacidad)));
    scrollportfolio.style.setProperty('--brillo', principio.brillo - window.scrollY * rapidez.brillo + '%');




  });
}



