// O reduce possui uma outra diferença: você pode passar um segundo parâmetro para o reduce, logo após a função. Olhe a seguir, será usado o último exemplo dado da soma dos números:
console.log('ex.1: ')

const numbers = [32, 15, 3, 2, -5, 56, 10];

const getSum = (result, number) => {
  console.log(result); // 32 47 50 52 47 103
  return result + number;
};

const sumNumbers = numbers.reduce(getSum);
console.log(sumNumbers); // 113


console.log('------------------')
console.log('ex.2: ')
// Com a alteração:
const getSum2 = (result, number) => {
  console.log(result); // 0 32 47 50 52 47 103
  return result + number;
  };
const sumNumbers2 = numbers.reduce(getSum2, 0); // Parâmetro adicionado ao reduce: o "0"
console.log(sumNumbers2); // 113


console.log('------------------')
console.log('ex.3: ')
// Pode ver que mudou em nada o resultado da função. Mas veja que o primeiro valor do result não foi 32, mas sim 0.
// Agora mude o 0 para 10 ou qualquer outro valor.

const getSum3 = (result, number) => {
  console.log(result); // 10 42 57 60 62 57 113
  return result + number;
  };
const sumNumbers3 = numbers.reduce(getSum3, 10);
console.log(sumNumbers3); // 123