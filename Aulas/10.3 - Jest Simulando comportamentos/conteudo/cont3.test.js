// Ao declarar service.randomRgbColor = jest.fn();, estamos dizendo ao teste que, a partir daquele momento, estamos tomando controle da função service.randomRgbColor e que ela será uma simulação da função original.

// Por ser uma simulação, podemos especificar qual vai ser o retorno da função. Basicamente, o que podemos dizer é: "No contexto deste teste, quando essa função for chamada, ela retornará o valor que eu defini, ao invés de um valor aleatório!". Duas propriedades nos permitem fazer essa declaração: mockReturnValue(value) e mockReturnValueOnce(value). O mockReturnValue define um valor padrão de retorno. Já o mockReturnValueOnce retorna o valor definido apenas uma vez, e é importante, pois pode ser encadeado para que chamadas sucessivas retornem valores diferentes.

const service = require('./cont3');

test("#randomRgbColor", () => {
  // testando se a função foi chamada e qual seu retorno
  service.randomRgbColor = jest.fn().mockReturnValue("rgb(255, 255, 255)");

  service.randomRgbColor();
  expect(service.randomRgbColor).toHaveBeenCalled();
  expect(service.randomRgbColor()).toBe("rgb(255, 255, 255)");
});

// Na terceira linha do exemplo acima, estamos manualmente chamando a função service.randomRgbColor();. Caso isso não seja feito, o teste expect(service.randomRgbColor).toHaveBeenCalled() irá falhar. Isso acontece porque mockar uma função redefine seu comportamento, mas não a executa. A propriedade toHaveBeenCalled() espera que a função dentro do expect tenha sido executada por alguma chamada anterior a essa linha dentro do contexto desse teste.