// JSX Representa Objetos

// O Babel compila JSX para chamadas React.createElement().

// Estes dois exemplos são idênticos:

const element = (
  <h1 className="greeting">
    Hello, world!
  </h1>
);

const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
);

// React.createElement() realiza algumas verificações para ajudar você a criar um código sem bugs, mas, essencialmente, cria um objeto como este:

// Nota: esta estrutura está simplificada
const element = {
  type: 'h1',
  props: {
    className: 'greeting',
    children: 'Hello, world!'
  }
};

// Estes objetos são chamados “Elementos React”. Você pode imaginá-los como descrições do que você quer ver na tela. O React lê esses objetos e os usa para construir o DOM e deixá-lo atualizado.

// Exploraremos a renderização de elementos React no DOM na próxima seção.

//     Dica:

//     Recomendamos o uso da definição de linguagem “Babel” no seu editor preferido para que ambos os códigos em ES6 e JSX sejam devidamente realçados.
