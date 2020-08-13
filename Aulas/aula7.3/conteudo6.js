// Um papel dos testes unitários é nos ajudar a implementar funções mais robustas. Veja, por exemplo, a função que realiza a divisão utilizada no modelo anterior:

function division(x, y) {
  return x / y;
}

// O que acontece se criarmos o teste abaixo?

const assert = require('assert');

// declaração da função division, definida anteriormente...

assert.equal(division(10, 2), 5); // OK
assert.equal(division(10, 0), 0); // 💣

// O primeiro assert.equal funciona e não apresenta erro, mas o segundo deixa evidente uma fragilidade na implementação da função division, pois não poderia ser possível realizar a divisão por 0. Nesse caso, devemos melhorar a implementação da função division, a fim de não termos mais esse estado inconsistente.

const assert = require('assert');

function division(x, y) {
  if (y === 0) throw new Error('parameter y must not be 0');
  return x / y;
}

assert.equal(division(10, 2), 5); // OK
assert.throws(() => { division(10, 0); }, /^Error: parameter y must not be 0$/); // OK