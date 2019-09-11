import React from 'react';
import Pokemons from './components/Pokemons';
import Pokelist from './components/Pokelist';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      pokemons : Pokemons
    }
  }
  render() {
    return (
      <div className="App">
        <h1 className="app-title"> Mis lista de Pokemon</h1>
        <Pokelist Pokemons={this.state.pokemons}></Pokelist>
      </div>
    );
  }
}


export default App;
