import { Cards } from "./Cards.js";
import { Icones } from "./Icones.js";
import { Footer } from "./footer.js";

//No carregamento da janela, vamos iniciar uma instância de Cards, vamos chamar suas funcionalidades logo no início.
window.onload = () => {
  //Estamos armazenando dentro da variável tudo o que a class 'Cards' disponibiliza.
  // digamos que fizemos um copia de 'Cards', assim temos acesso ao seus métodos/funções
  let animaCards = new Cards();
  window.document.addEventListener('scroll', animaCards.scrollCards.bind(animaCards) )


  //Chamandos as animações
  const icones = new Icones();
  icones.animaIcones();

  const footer = new Footer();
  footer.efeitoOnda();
}