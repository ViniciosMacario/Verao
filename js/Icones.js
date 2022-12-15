class Icones{
  constructor(){
    //querySelectorAll usamos o querySelectorAll por nos trazer todos os elementos que possuem essa mesma class, ele retorna uma lista com os mesmos
    this.listaIcones = document.querySelectorAll('.iconeAnimation');
  }

  animaIcones(){
    /* 
    Targets (ou alvos): Os objetos que estão sendo animados. Pode ser um objeto, uma array de objetos, ou utilizando um seletor como .minhaClasse
    Vars: um objeto JavaScript que tem as propriedades/valores do que está sendo animado. Por exemplo:
    O GSAP () é um conjunto de ferramentas para animação que utiliza scripts. É muito versátil e com muitos recursos de animação para CSS, SVG e DOM.


    
    */
    TweenMax.to(this.listaIcones, 0.5, {scale: 0.95,repeat: -1, yoyo: true})
    // yoyo = -1 faz com que a animação vai e volte suavemente
    // repeat faz a animação se repetir infinitamente
    // console.log(this.listaIcones[1]);
  }
}

export { Icones }