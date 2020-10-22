

    // Atenção:

    // Como JSX é mais próximo de JavaScript que do HTML, o React DOM usa camelCase como convenção para nomes de propriedades ao invés dos nomes de atributos do HTML.

    // Por exemplo, class se transforma em className em JSX, e tabindex se transforma em tabIndex.

// Especificando Elementos Filhos com JSX

// Se uma tag está vazia, você pode fechá-la imediatamente com />, como XML:

const element = <img src={user.avatarUrl} />;

// Tags JSX podem conter elementos filhos:

const element = (
  <div>
    <h1>Hello!</h1>
    <h2>Good to see you here.</h2>
  </div>
);