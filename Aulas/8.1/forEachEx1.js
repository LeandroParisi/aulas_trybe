const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const multipliesFor2 = (element) => {
  console.log(`${element} * 2: ${element * 2}`);
};

numbers.forEach(multipliesFor2);

// No exemplo acima, ele realizou em cada elemento do array a função multipliesFor2, que imprime o parâmetro * 2 no console.

// Caso tenha dúvida, veja alguns exemplos neste artigo - https://www.devmedia.com.br/javascript-foreach-executando-uma-funcao-para-cada-elemento-de-um-array/39808.

// Não se esqueça, também, de rodar todos os exemplos no console do seu navegador ou na sua máquina! Isso ajuda muito a fixar as coisas. Brinque e experimente com as funções!