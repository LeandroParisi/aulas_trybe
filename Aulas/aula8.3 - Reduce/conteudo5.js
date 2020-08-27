// Para fixar ainda mais conceito de reduce, faça uma função que some todos os números pares do array:

const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const evenNumberCheck = (result , evenNumber) => {
  // console.log(evenNumber);
  if (evenNumber % 2 === 0) {
    return result + evenNumber
  }
  return result;
}

const evenNumbersSum = numbers.reduce(evenNumberCheck, 0);
console.log(evenNumbersSum);