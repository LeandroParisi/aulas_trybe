// Hora de olhar outro exemplo para fixar e mostrar outras formas de se usar o reduce. Neste exemplo, serão comparados valores para buscar o maior valor em um array. Tente criar essa função apenas com for e depois tente com reduce. Caso não consiga, olhe a solução abaixo:

const numbers = [50, 85, -30, 3, 15];

// whith FOR
let biggerNumber = -100;

for (index in numbers) {
  if (numbers[index] > biggerNumber) {
    biggerNumber = numbers[index]
  }
}
console.log(biggerNumber);


// with REDUCE
const getBigger = (bigger, number) => (bigger > number) ? bigger : number;

const bigger = numbers.reduce(getBigger, 0);
console.log(bigger); // 85