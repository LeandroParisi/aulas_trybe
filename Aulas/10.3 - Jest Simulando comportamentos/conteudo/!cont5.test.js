const  cont5 = require('./cont5');

// 1. Feito isso, escreva um teste que verifica que a função randomNumber() é chamada quando invocamos a isDivisible().

// 2. Teste que, quando a randomNumber() retorna um número par e isDivisible() recebe um dois, o retorno é true. 

// test('check isDivisible function', () => {
//   cont5.randomNumber = jest
//     .fn()
//     .mockReturnValue(50);

//   cont5.isDivisible = jest
//     .fn()
//     .mockReturnValue(true);

//   cont5.randomNumber();
//   expect(cont5.randomNumber).toHaveBeenCalled();
//   expect(cont5.isDivisible(2)).toBeTruthy();
// })

//  ------------

// 3. Simule (mocke) dois valores para a função randomNumber() retornar e um terceiro valor default. Chame a função isDivisible() quatro vezes num mesmo teste e cheque que os retornos são conforme esperado. 

test('check isDivisible function - Item 3', () => {
  cont5.randomNumber = jest
    .fn()
    // .mockReturnValue(4)
    // .mockReturnValueOnce(2)
    // .mockReturnValueOnce(3);

  cont5.isDivisible = jest.fn()

  expect(cont5.isDivisible).toHaveBeenCalledTimes(0);

  expect(cont5.isDivisible(2)).toBe('true');
})
// ??

// Estou simulando os dois returns, está certo isso?

// pq Recebi FALSE no console log? ao rodar o teste?
// console.log
// 60

// at Object.<anonymous> (conteudo/cont5.js:7:9)

// console.log
// false
