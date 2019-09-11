import React from 'react';
import '../css/pokemon.css';
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
    render() {
        return (
            <div className="card-pokemon__Container">
                <img className="card-pokemon__imagen" src={this.props.url} alt="imagen de un pokemon" />
                <h2 className = "card-pokemon__name"> {this.props.name}</h2>
                <ul className="card-pokemon-typeList">
                    {this.props.pokemontype.map((item, index) => {
                        return (
                            <li key={index}>
                                <div className="card-pokemon-typeList__container">{item}</div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}


Pokemon.propTypes = {
    url:PropTypes.string,
    name:PropTypes.string,
    pokemontype:PropTypes.arrayOf(PropTypes.string)
  }
export default Pokemon;