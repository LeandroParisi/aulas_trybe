// 4. Dentro de um mesmo arquivo, crie três funções. A primeira deve receber uma string e retorná-la em caixa alta. A segunda deve também receber uma string e retornar só a primeira letra. A terceira deve receber duas strings e concatená-las. 

function toCaps(string) {
  return string.toUpperCase();
}

// console.log(toCaps('eu'));

function firstLetter(string) {
  return string[0];
}

// console.log(firstLetter('tu'));

function concatenate(string1, string2) {
  return `${string1} ${string2}`
}

// console.log(concatenate('eles', 'nós', 'vós'));

module.exports = {
  toCaps,
  firstLetter,
  concatenate,
};