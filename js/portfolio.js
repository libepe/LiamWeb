document.addEventListener('DOMContentLoaded', () => {
    portfolioDeploy();
});


function portfolioDeploy() {

  const opener = document.getElementById('opener');

  const primerTamanyo=100;
  const rapidezTamanyo=3;
  const primerRotacion=-135;
  const rapidezRotacion=0.1;
  const primerBrillo=100;
  const rapidezBrillo= 0.07;

  window.addEventListener('scroll', () => {
    const aumento=Math.min(primerTamanyo + window.scrollY * rapidezTamanyo);
    const rotacion=Math.min(primerRotacion + window.scrollY * rapidezRotacion);
    const brillo=Math.min(primerBrillo - window.scrollY * rapidezBrillo);
    

    opener.style.setProperty('--tamanyo', `${aumento}px`);
    opener.style.setProperty('--rotacion', `${rotacion}deg`);
    opener.style.setProperty('--brillo', `${brillo}%`);

  });
}



