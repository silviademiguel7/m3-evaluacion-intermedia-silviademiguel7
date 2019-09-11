import React from 'react';
import Pokemon from './Pokemon';

class Pokelist extends React.Component {
    render(){
        return(   
        <div className="containerList">
        <ul className="pokemonsList">
          {this.props.Pokemons.map(pokemon => {
            return (
              <li className="card-pokemon" key={pokemon.id}>
                <Pokemon 
                url={pokemon.url} 
                name={pokemon.name} 
                pokemontype = {pokemon.types}>
                </Pokemon>
              </li>
            )
          })}
        </ul>
      </div>
        )
    }
}
export default Pokelist;
