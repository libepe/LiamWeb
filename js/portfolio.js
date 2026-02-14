document.addEventListener('DOMContentLoaded', () => {
    portfolioDeploy();
});


function portfolioDeploy() {

  const toportfolio=document.getElementById('toportfolio');

  const paginicio=document.getElementById('pag-inicio');
  const scrollportfolio = document.getElementById('scrollportfolio');
  const scrollportfolioTitulo=document.getElementById('scrollportfolio-titulo');

  const estiloParent=getComputedStyle(scrollportfolio);
  const estiloTitulo=getComputedStyle(scrollportfolioTitulo);
  const estiloToPortfolio=getComputedStyle(toportfolio);

  const principio={
    brillo: parseFloat(estiloParent.getPropertyValue('--brillo')),
    ancho: parseFloat(estiloParent.getPropertyValue('--ancho')),
    alto: parseFloat(estiloParent.getPropertyValue('--alto')),
    fontsize: parseFloat(estiloTitulo.getPropertyValue('--fontsize')),
    opacidad: parseFloat(estiloTitulo.getPropertyValue('--opacity')),
    rotacion: parseFloat(estiloParent.getPropertyValue('--rotate')),

    colorMenuR: parseFloat(estiloToPortfolio.getPropertyValue('--colorMenu-r')),
    colorMenuB: parseFloat(estiloToPortfolio.getPropertyValue('--colorMenu-b')),
    colorMenuG: parseFloat(estiloToPortfolio.getPropertyValue('--colorMenu-g')),
  }

  const rapidez={
    opacidad: 0.002,
    rotacion: 0.07,
    brillo: 0.08,
    rapidezTamanyo: 0.009,
  }

  window.addEventListener('scroll', () => {

    const scrollMiddle=window.scrollY + window.innerHeight / 2;
    const divMiddle= paginicio.offsetTop + paginicio.offsetHeight/2;

    const progress=Math.max(0, scrollMiddle - divMiddle);

      const tamanyo = 1 + progress * rapidez.rapidezTamanyo;



      scrollportfolio.style.setProperty('--ancho', principio.ancho * tamanyo + 'px');
      scrollportfolio.style.setProperty('--alto', principio.alto * tamanyo + 'px');
      scrollportfolioTitulo.style.setProperty('--fontsize', principio.fontsize * tamanyo + 'px');

      scrollportfolio.style.setProperty('--brillo', principio.brillo + progress * rapidez.brillo + '%');
      scrollportfolio.style.setProperty('--rotate', principio.rotacion + progress * rapidez.rotacion + 'deg');
      scrollportfolioTitulo.style.setProperty('--opacity', principio.opacidad - progress * rapidez.opacidad);

      toportfolio.style.setProperty('--colorMenu-r', principio.colorMenuR + progress * rapidez.brillo);
      toportfolio.style.setProperty('--colorMenu-b', principio.colorMenuB + progress * rapidez.brillo);
      toportfolio.style.setProperty('--colorMenu-g', principio.colorMenuG + progress * rapidez.brillo);


  });
}



