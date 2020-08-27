// Estutura das HOFs
arrayOfValues.forEach((element) => {
  console.log('Cada elemento do array:', element);
});


// arrayOfValues - Nome do array que será percorrido;
// .forEach - A HOF, pode ser, .find, .some, .every;
// element - Valor do elemento do array;
// (element) => {console.log('Cada elemento do array:', element); - função a ser executada, pode ser passada igual ao terceiro exemplo do conteúdo com a função verifyNote.


// Exemplo dessa estrutura:
meuArray.forEach(elemento => 
  if(elemento % 2 === 0) { 
    console.log(`${elemento}` é divísivel por 2!)
    } 
  )
// Significasse Verifique se cada elemento do meu array é múltiplo de 2.

// Uma função como meuArray.find(elemento => elemento % 5 === 0), por outro lado, seria Encontre o primeiro elemento de meuArray que é múltiplo de cinco.

// Ficou mais claro agora? A própria Higher Order Function se encarrega da lógica de pegar cada elemento do array e passar como parâmetro para a arrow function. O que você, se usasse um for, faria manualmente, a HOF faz pra você! Sua única preocupação deve ser "O que eu quero fazer com cada elemento?", e não "Como eu acesso cada elemento?".