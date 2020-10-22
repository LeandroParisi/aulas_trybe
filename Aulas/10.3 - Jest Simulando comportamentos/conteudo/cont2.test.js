const service = require('./cont2')

// SEM MOCK
// test("#randomRgbColor", () => {
//   // testando se a função foi chamada
//   cont2.randomRgbColor();
//   expect(cont2.randomRgbColor).toHaveBeenCalled();
// });

// Esse teste deveria passar, não? Afinal, a função foi chamada logo acima dele. Mas ele não passa, e o erro nos indica o que fazer:

//     Matcher error: received value must be a mock or spy function

// Esse erro acontece porque a propriedade toHaveBeenCalled, assim como outras que serão ensinadas a seguir, são exclusivas para funções simuladas. Ou seja: se você não simula uma função, a propriedade não funciona corretamente.


// COM MOCK:

// Portanto, vamos utilizar o jest.fn() para testar a chamada dessa função:

test("#randomRgbColor", () => {
  // testando se a função foi chamada. Não simulamos nenhum comportamento aqui, pois, para esse teste, isso não importa! Queremos saber se ela foi chamada e ponto final.
  service.randomRgbColor = jest.fn();

  service.randomRgbColor();
  expect(service.randomRgbColor).toHaveBeenCalled();
});