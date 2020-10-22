
    Repare que, para efeito de aprendizado, temos mais de um componente dentro do arquivo App.js, por isso o export default no componente App. Os outros componentes, que estão sendo exportados acima do component App, também terão os seus respectivos exports. Lembrando que isso não é uma boa prática. Estamos fazendo dessa forma para diminuirmos a complexidade da aplicação, com o intuito de facilitar o entendimento.
    Outro ponto de atenção é que, quando utilizamos o export default e o export, a maneira de importar os componentes sofre uma pequena alteração - que veremos na hora de realizar os testes.
    Ao terminar de instalar, vamos nos deparar com um problema! A nossa página dará o seguinte erro:

You should not use <Link> outside a <Router>

    Esse erro acontece porque o BrowserRouter deve encapsular todos os itens chamados pelo react-router-dom e, no nosso caso, existem dois <Link> no App.js, o que nos leva a esse erro. Vamos resolver isso colocando a tag <BrowserRouter> no arquivo index.js, deixando ele da seguinte forma:
