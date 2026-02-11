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
    ancho: parseFloat(estiloParent.getPropertyValue('--ancho')),
    alto: parseFloat(estiloParent.getPropertyValue('--alto')),
    fontsize: parseFloat(estiloTitulo.getPropertyValue('--fontsize')),
    opacidad: parseFloat(estiloTitulo.getPropertyValue('--opacity')),
    rotacion: parseFloat(estiloParent.getPropertyValue('--rotate')),
  }

  const rapidez={
    tamanyo: 2.5,
    opacidad: 0.002,
    rotacion: 0.07,
    brillo: 0.08,
    rapidezTamanyo: 0.006,
  }

  window.addEventListener('scroll', () => {

    const tamanyo = 1 + window.scrollY * rapidez.rapidezTamanyo;



    scrollportfolio.style.setProperty('--ancho', principio.ancho * tamanyo + 'px');
    scrollportfolio.style.setProperty('--alto', principio.alto * tamanyo + 'px');
    scrollportfolioTitulo.style.setProperty('--fontsize', principio.fontsize * tamanyo + 'px');

    scrollportfolio.style.setProperty('--brillo', principio.brillo - window.scrollY * rapidez.brillo + '%');
    scrollportfolio.style.setProperty('--rotate', principio.rotacion + window.scrollY * rapidez.rotacion + 'deg');
    scrollportfolioTitulo.style.setProperty('--opacity', principio.opacidad - window.scrollY * rapidez.opacidad);

  });
}



