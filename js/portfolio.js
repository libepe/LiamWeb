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
    brillo: parseFloat(estiloParent.getPropertyValue('--brillo')),
    opacidad: parseFloat(estiloFondo.getPropertyValue('--opacidad')),
  }

  const rapidez={
    tamanyo: 0.8,
    brillo: 0.03,
    opacidad: 0.002,
  }

  window.addEventListener('scroll', () => {

    scrollportfolioFondo.style.setProperty('--alto', principio.alto + window.scrollY * rapidez.tamanyo + 'px');
    scrollportfolioFondo.style.setProperty('--ancho', principio.ancho + window.scrollY * rapidez.tamanyo + 'px');
    scrollportfolio.style.setProperty('--brillo', principio.brillo - window.scrollY * rapidez.brillo + '%');
    scrollportfolioFondo.style.setProperty('--opacidad', principio.opacidad + window.scrollY * rapidez.opacidad + '1');




  });
}



