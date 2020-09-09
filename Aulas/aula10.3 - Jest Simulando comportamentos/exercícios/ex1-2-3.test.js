// 1. Crie uma função que gere um número aleatório entre 0 e 100. Você irá criar também os testes para essa função. Utilizando o mock, defina o retorno padrão como 10. Teste se a função foi chamada, qual seu retorno e quantas vezes foi chamada.

function randomNumber() {
  const randomNumber = Math.floor(Math.random() * 100);
  return randomNumber;
}

test('testing randomNumbers call, return and how many times was called', () => {
  randomNumber = jest
    .fn()
    .mockReturnValue(10);

  randomNumber();

  expect(randomNumber).toHaveBeenCalled();
  expect(randomNumber).toHaveBeenCalledTimes(1);
  expect(randomNumber()).toBe(10);
  expect(randomNumber).toHaveBeenCalledTimes(2);

  randomNumber.mockReset();
})


// 2. Com a mesma função do exercício anterior, utilizando o mock, crie uma nova implementação, que deve receber dois parâmetros e retornar a divisão do primeiro pelo segundo. Essa implementação deve ocorrer uma única vez. Faça os testes necessários.

test('testing randomNumber with new implementation set by mocker', () => {
  randomNumber.mockImplementation((a, b) => a / b);
  
  expect(randomNumber).not.toHaveBeenCalled();
  expect(randomNumber(10, 5)).toBe(2);
  expect(randomNumber).toHaveBeenCalledWith(10, 5);
  expect(randomNumber).toHaveBeenCalledTimes(1);

  randomNumber.mockReset();
})

// 3. Ainda com a mesma função do primeiro exercício, utilizando o mock, crie uma nova implementação que receba três parâmetros e retorne sua multiplicação. Após fazer os devidos testes para ela, resete sua implementação e crie uma nova, que receba um parâmetro e retorne seu dobro. Faça os testes necessários.

test('testing randomNumber with a 3 parameter mock', () => {
  randomNumber.mockImplementation((a, b, c) => a * b * c);

  expect(randomNumber).not.toHaveBeenCalled();
  expect(randomNumber(1, 2, 3)).toBe(6);


  randomNumber.mockReset();


  randomNumber.mockImplementation((a) => a * 2);

  expect(randomNumber).not.toHaveBeenCalled();
  expect(randomNumber(2)).toBe(4);
  expect(randomNumber).toHaveBeenCalled();

  randomNumber.mockReset();
})