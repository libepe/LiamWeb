document.addEventListener('DOMContentLoaded', () => {
    portfolioDeploy();
});


function portfolioDeploy() {

  const scrollportfolio = document.getElementById('scrollportfolio');
  const scrollportfolioTitulo=document.getElementById('scrollportfolio-titulo');

  const estiloParent=getComputedStyle(scrollportfolio);
  const estiloTitulo=getComputedStyle(scrollportfolioTitulo);

  const principio={
    brillo: parseFloat(estiloParent.getPropertyValue('--brillo')),
    rotacion: 0,
    fontsize: parseFloat(estiloTitulo.getPropertyValue('--fontsize')),
  }

  const rapidez={
    tamanyo: 2.5,
    opacidad: 0.002,
    rotacion: 0.1,
    brillo: 0.05,
    fontsize: 0.5,
  }

  window.addEventListener('scroll', () => {

    scrollportfolio.style.setProperty('--brillo', principio.brillo - window.scrollY * rapidez.brillo + '%');
    scrollportfolio.style.setProperty('--rotacion', principio.rotacion + window.scrollY * rapidez.rotacion + 'deg');
    scrollportfolioTitulo.style.setProperty('--fontsize', principio.fontsize + window.scrollY * rapidez.fontsize + 'px');

  });
}



