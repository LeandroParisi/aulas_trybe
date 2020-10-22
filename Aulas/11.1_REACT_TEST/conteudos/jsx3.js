// Especificando Atributos com JSX

// Você pode usar aspas para especificar strings literais como atributos:

const element = <div tabIndex="0"></div>;

// Você também pode usar chaves para incorporar uma expressão JavaScript em um atributo:

const element = <img src={user.avatarUrl}></img>;

// Não envolva chaves com aspas quando estiver incorporando uma expressão JavaScript em um atributo. Você deveria ou usar aspas (para valores em string) ou chaves (para expressões), mas não ambos no mesmo atributo.