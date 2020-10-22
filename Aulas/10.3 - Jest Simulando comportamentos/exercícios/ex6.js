// Crie uma função que faça requisição para a api dog pictures. Mocke a requisição e crie dois testes. O primeiro deve interpretar que a requisição se resolveu e teve como valor "request sucess". O segundo deve interpretar que a requisição falhou e ter como valor "request failed". Crie todos os testes que achar necessário.

// https://dog.ceo/dog-api/

const fetch = require('node-fetch');

function fetchDogPhoto() {
  const url = 'https://dog.ceo/api/breeds/image/random'
  
  fetch(url)
    .then(response => response.json())
    .then(object => console.log(object.message));
}

module.exports = { fetchDogPhoto }
