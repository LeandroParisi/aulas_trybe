// Agora, um passo para trás: vamos fazer, passo a passo, uma Promise. Primeiramente, instancie uma Promise. Dentro dela, você deve produzir um array com dez números aleatórios de 1 a 50 e elevá-los todos ao quadrado. Se a soma de todos esses elementos for inferior a 8000, a promise deve ser resolvida. Caso contrário, ela deve ser rejeitada. Acresça um then e um catch à Promise com qualquer coisa dentro só para que o código funcione.

// Tente usar Higher Order Functions! Lembre-se de que tanto uma quanto a outra recebem, como parâmetro, funções!


function generateRandomNumber () {
  const min = 1;
  const max = 50;
  const randomNumber = Math.floor(Math.random() * max) + min;
  const elevatedNumber = Math.pow(randomNumber, 2);
  return elevatedNumber
}

function pushNumberToArray (number, array) {
  return array.push(number);
}

function sumArray (array) {
  return array.reduce((acc, currentValue) => acc + currentValue);
}



const promise = new Promise ((resolve, reject) => {
  let numbersArray = [];
  for (let index = 1; index <= 10; index += 1) {
    const randomNumber = generateRandomNumber();
    pushNumberToArray(randomNumber, numbersArray);
  }
  const result = sumArray(numbersArray);

  console.log(result);

  if (result < 8000) resolve('Valor menor que 8000');
  reject('Valor maior que 8000');
})

promise
  .then(response => console.log(response))
  .catch(error => console.log(error));