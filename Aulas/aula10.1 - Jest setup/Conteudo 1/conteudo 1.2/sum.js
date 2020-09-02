// sum.js
const sum = (a, b) => a + b;

module.exports = sum;


// A linha module.exports = sum exporta a função sum no primeiro arquivo para que possa ser utilizada em outros módulos. No segundo arquivo, utilizamos require('./sum') para importar a função sum. Veja a seção de recursos adicionais para entender mais sobre como importar e exportar módulos em Node.js.