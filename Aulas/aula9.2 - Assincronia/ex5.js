// Quando a Promise for bem-sucedida, encadeie nela uma segunda Promise que some os elementos do array.

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

function divideResult (resultNumber) {
  const dividers = [2, 3, 5, 10];
  let outputArray = [];
  dividers.forEach(divider => {
    const dividedResult = resultNumber / divider;
    outputArray.push(dividedResult);
  })

  return outputArray
}

const promise = new Promise ((resolve, reject) => {
  let numbersArray = [];
  for (let index = 1; index <= 10; index += 1) {
    const randomNumber = generateRandomNumber();
    pushNumberToArray(randomNumber, numbersArray);
  }
  const result = sumArray(numbersArray);

  console.log(`A soma do Array Inicial é ${result}`);

  if (result < 8000) resolve(divideResult(result));
  reject('É mais de oito mil! Essa promise deve estar quebrada!');
})

promise
  .then(response => {
    console.log(`O Array dividido é: ${response}`);
    const result = response.reduce((acc, currentValue) => acc + currentValue);
    return console.log(`A soma do array dividido é: ${result}`);
  })
  .catch(error => console.log(error));


  // MELHORIAS
  // A FORMA COMO OS NÚMEROS DO ARRAY ESTÃO CHEGANDO PELO RESPONSE NO THEN