import React from 'react';
import PropTypes from 'prop-types';
import Pokemons from './components/Pokemons';
import Pokelist from './components/Pokelist';
import './css/app.css'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      pokemons : Pokemons
    }
  }
  render() {
    return (
      <div className="app">
        <h1 className="app-title"> Mis lista de Pokemon</h1>
        <Pokelist Pokemons={this.state.pokemons}></Pokelist>
      </div>
    );
  }
}
App.propTypes = {
  Pokemons:PropTypes.arrayOf(PropTypes.object)
}

export default App;
