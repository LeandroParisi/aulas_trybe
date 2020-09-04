// Promises

// Para testar uma promise será usado o código abaixo. Ele possui um array Animals, contendo animais com seu nome, idade e tipo.

// Observe que a função findAnimalsByType é uma promise, responsável por buscar os animais de determinado tipo no array. Em caso de sucesso, ela retornará um resolve com um array de dados. Em caso de falha, retornará um reject com um objeto com a chave error, possuindo uma mensagem.

const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalsByType = (type) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const arrayAnimals = Animals.filter((animal) => animal.type === type);
      if (arrayAnimals.length !== 0) {
        return resolve(arrayAnimals);
      }

      return reject({ error: 'Não possui esse tipo de animal.' });
    }, 100);
  })
);

const getListAnimals = (type) => (
  findAnimalsByType(type).then(list => list)
);

// O primeiro teste desse código verificará se, ao chamar a função getListAnimals com Dog como parâmetro, o seu retorno será os dois cachorros do array Animals

describe('Quando o tipo do animal existe', () => {
  test('Retorne a lista de animais', () => {
    expect.assertions(2);
    return getListAnimals('Dog').then(listDogs => {
      expect(listDogs[0].name).toEqual('Dorminhoco');
      expect(listDogs[1].name).toEqual('Soneca');
    });
  });
});

// Rode o teste e verifique se ele não está dando algum falso-positivo. Mude o Dorminhoco para Agitado. Viu? O teste não passou, logo não possui falso-positivos.



// Agora veja o passo a passo de como o teste foi feito.

// 1) Primeiro criamos o describe, onde os testes serão executados.

// describe('Quando o tipo do animal, existe', () => {
//   test('Retorne a lista de animais', () => {

//   });
// });


// 2) Agora, adicione a função a ser testada. Como ela retorna uma Promise, é necessário adicionarmos o .then para pegar o seu resultado:

// describe('Quando o tipo do animal, existe', () => {
//   test('Retorne a lista de animais', () => {
//     getListAnimals('Dog').then(listDogs => {

//     });
//   });
// });


// 3) Agora adicione os testes e os execute.

// describe('Quando o tipo do animal, existe', () => {
//   test('Retorne a lista de animais', () => {
//     getListAnimals('Dog').then(listDogs => {
//       expect(listDogs[0].name).toEqual('Dorminhoco');
//       expect(listDogs[1].name).toEqual('Soneca');
//     });
//   });
// });


// 4) Verifique se deu algum falso-positivo, mude o nome do Dorminhoco para Bob. Observe:

describe('FALSO POSITIVO: Quando o tipo do animal, existe', () => {
  test('Retorne a lista de animais', () => {
    getListAnimals('Dog').then(listDogs => {
      expect(listDogs[0].name).toEqual('Bob');
      expect(listDogs[1].name).toEqual('Soneca');
    });
  });
});

// 5) O teste continuou passando sem encontrar o erro (o que não era o esperado), o que indica que ele está com um falso-positivo.

// Para resolver esse problema, é necessário inserir um return antes da função e, em seguida, adicionar a quantidade de expect esperadas por meio do comando expect.assertions(2).

describe('Quando o tipo do animal, existe', () => {
  test('Retorne a lista de animais', () => {
    expect.assertions(2);
    return getListAnimals('Dog').then(listDogs => {
      expect(listDogs[0].name).toEqual('Bob');
      expect(listDogs[1].name).toEqual('Soneca');
    });
  });
});

// Agora o teste conseguiu identificar o erro, retornando dois erros. Um dos erros é o que esperava Bob, mas recebeu o Dorminhoco. Como o Jest apenas recebeu 1 assertion, mas eram esperados 2, surge o segundo erro no nosso teste. Agora, desfaça as alterações para o teste voltar a funcionar. Como esse teste conseguiu encontrar o erro, fica claro que o problema de resultados falso-positivos foi resolvido.

// Se quiser, remova o expect.assertions(2) e veja que o teste passa!

describe('Quando o tipo do animal, existe', () => {
  test('Retorne a lista de animais', () => {
    return getListAnimals('Dog').then(listDogs => {
      expect(listDogs[0].name).toEqual('Dorminhoco');
      expect(listDogs[1].name).toEqual('Soneca');
    });
  });
});

// Essa promise possui dois casos: quando ela funciona, ocorre o resolve e, no erro, ocorre o reject. Como o resolve já foi testado, faltam apenas os testes do erro.

// O código abaixo testa, exatamente, o caso de erro.

describe('Quando o tipo do animal, existe', () => {
  test('Retorne a lista de animais', () => {
    return getListAnimals('Lion').catch(error =>
      expect(error).toEqual({ error: "Não possui esse tipo de animal." })
    );
  });
});

// Como o array Animals não possui nenhum Lion (tipo inserido no teste), será disparada a reject, que retornará um objeto com uma chave error com o valor Não possui esse tipo de animal.. A diferença entre esse teste e os outros é o .catch no lugar do .then. O .catch trabalha o resultado da promise quando ocorre um reject; já o .then, quando ocorre o resolve.