// Outras formas de usar o .map é unir dois arrays para criar um novo. Considere que você possui duas listas: o preço do primeiro produto (Arroz) é o primeiro elemento da lista prices (2.99), e assim por diante:

const products = ['Arroz', 'Feijão', 'Alface', 'Tomate'];
const prices = [2.99, 3.99, 1.5, 2];

// RESULTADO ESPERADO const listProducts = [{ Arroz: 2.99 },...]

let listProducts;

const updateProducts = (productsList, pricesList) => {
  listProducts = productsList.map((product, index) => (
    { [product]: pricesList[index] }
  ));
};

updateProducts(products, prices);
console.log(listProducts);