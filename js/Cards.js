//Vamos deixar essa arquivo para concetrar toda a lógica da nossa animação.
// vamos criar uma class para exportar para a ponte, ao invés de colocarmos tudo dentro do script.

class Cards{
  constructor(){
    this.posicaoSectionDicas = document.getElementById('section-dicas');
    this.cardLeft = document.querySelector('.card-left');
    this.cardRight = document.querySelector('.card-right');
  }

  scrollCards(){
    window.requestAnimationFrame(this.calculoScroll.bind(this));
  }


  //Damos o nome para funções dentro de objetos de 'métodos';
  calculoScroll(){
    const posicao = this.posicaoSectionDicas.getBoundingClientRect()['y'];
    /*
      O método 'getBoundingClientRect' vai captar a posição do nosso elemento dom 'posicao' na tela e passamos para ele
      dentro do Array qual é o eixo que desejamos obter esse valor.

      Lembrando que esses valores são em relação a 'section-dicas'
    */
    // console.log(posicao)
    //A animação acaba quando chegar no valor 25 do eixo Y
    if(posicao >=  45){
      //Estamos fazendo operações básica de matemática para terminar a animação no ponto zero e dividindo para reduzir a velocidade do momento da animação.
      this.cardLeft.style.transform = `translate(${((-posicao) + 25)/10}%)`;
      this.cardRight.style.transform = `translate(${((posicao) - 25)/10}%)`;
    }
  }
}

export {Cards};