import React from 'react';

import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  render() {
    const { pokemonList } = this.props;
    return(
      <section className='pokemon-section'>
        {pokemonList.map(pokemon => <Pokemon name={pokemon.name} type={pokemon.type} averageWeight=     {pokemon.averageWeight} image={pokemon.image} />)}
      </section>
    )
  }
}

export default Pokedex;