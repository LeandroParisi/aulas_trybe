import React from 'react';
import { render } from '@testing-library/react'
import App from './App';

afterEach(() => jest.clearAllMocks());
it('should fetch users', async () => {
  const joke = {
    id: '7h3oGtrOfxc',
    joke: 'Whiteboards ... are remarkable.',
    status: 200,
  };

  global.fetch = jest.fn(()=>
  Promise.resolve({
    json: ()=> Promise.resolve(joke)
  }));

  const { findByText } = render(<App />);
  await findByText('Whiteboards ... are remarkable.');
  expect(global.fetch).toBeCalledTimes(1);
  expect(global.fetch).toBeCalledWith('https://icanhazdadjoke.com/', {"headers": {"Accept": "application/json"}});
});

// O código é muito similar ao do primeiro exemplo, alterando somente o mock.
// Nesse exemplo estamos dizendo que global.fetch agora é uma função mockada com jest.fn que retorna uma Promise, e na primeira vez que ela for resolvida, deve se retornar um objeto com uma outra função json que também é uma Promise, que quando resolvida retorna sua piada.

// Outra forma de escrever o mesmo exemplo seria com a sintaxe async/await, onde temos o mock dessa forma:

global.fetch = jest.fn(async () => ({
  json: async () => joke
}));
