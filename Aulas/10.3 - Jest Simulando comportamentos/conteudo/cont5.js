// Baseando-se nos códigos acima, defina uma função que retorna um número aleatório entre 1 e 100. A seguir, defina uma outra função que recebe um parâmetro e checa se o número aleatório é divisível pelo número do parâmetro. Assim: 

const randomNumber = () => {
  const generatedNumber = Math.floor(Math.random() * 100);
  return generatedNumber;
}
console.log(randomNumber());

const isDivisible = (number) => (randomNumber() % number) === 0;
console.log(isDivisible());


module.exports = { randomNumber, isDivisible }