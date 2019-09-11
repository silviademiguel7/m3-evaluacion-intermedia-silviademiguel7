import React from 'react';

class Pokemon extends React.Component {
    render() {
        return (
            <div className="card-pokemon__Container">
                <img classNAme="card-pokemon__imagen" src={this.props.url} alt="imagen de un pokemon" />
                <h2> {this.props.name}</h2>
                <ul className="card-pokemon-typeList">
                    {this.props.pokemontype.map(item => {
                        return (
                            <div classNAme="card-pokemon-typeList__container">
                                <li>{item}</li>
                            </div>
                        )
                    })}
                </ul>
            </div>
        )
    }
}
export default Pokemon;