// Para entender melhor o que está acontecendo, rode a função abaixo. Ela possui um console.log para ver o valor do result em cada iteração.

const numbers = [32, 15, 3, 2, -5, 56, 10];

const getSum = (result, number) => {
  console.log(result); // 32 47 50 52 47 103
  return result + number;
  };
const sumNumbers = numbers.reduce(getSum);
console.log(sumNumbers); // 113