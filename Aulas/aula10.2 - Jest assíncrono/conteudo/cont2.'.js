// Para o Jest esperar a função assíncrona ser finalizada, é necessário utilizar uma callback própria da biblioteca, chamada done, que precisa ser chamada após os testes assíncronos.

// Agora o Jest no exemplo abaixo consegue identificar o erro.

test("Não deveria passar!", done => {
  setTimeout(() => {
    expect(10).toBe(5);
    console.log('Deveria falhar!')
    done();
  }, 500);
});