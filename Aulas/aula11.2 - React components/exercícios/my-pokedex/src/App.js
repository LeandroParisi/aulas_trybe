import React from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';

function App() {
  return <Pokedex pokemonList={pokemons}/>
}

export default App;
