// JSX Também é uma Expressão

// Depois da compilação, as expressões em JSX se transformam em chamadas normais de funções que retornam objetos JavaScript.

// Isto significa que você pode usar JSX dentro de condições if e laços for, atribuí-lo a variáveis, aceitá-lo como argumentos e retorná-los de funções:

function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;  }
  return <h1>Hello, Stranger.</h1>;}


  const element = <div tabIndex="0"></div>;