// Na aula passada, você foi introduzido à biblioteca React e soube como criar um projeto React com o create-react-app. Se abrir um projeto recém-criado pelo create-react-app, você vai se deparar com algo similar ao seguinte no arquivo src/index.js:

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// O método ReactDOM.render está recebendo como primeiro parâmetro <App />. Mas, afinal, o que é esse <App />? Ele é um exemplo de componente React, e é isso que você estudará a fundo na aula de hoje. 🚀