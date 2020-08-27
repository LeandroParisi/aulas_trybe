const numeros = [1, 2, 3, 4, 5, 6];
console.log(numeros.map(numero => numero * 2)); // Retorno: [2, 4, 6, 8, 10, 12]

const paresMenoresQueCinco = [];
numeros.forEach(numero => {
  if(numero < 5 && numero % 2 === 0) {
    paresMenoresQueCinco.push(numero);
  }
})
console.log(paresMenoresQueCinco); // Retorno: [2, 4]

// pq não funfa?
const paresMenoresQueCincoComMap = numeros.map(numero => ((numero < 5 && numero % 2 === 0) ? numero));
console.log(paresMenoresQueCincoComMap);