import React from 'react'

export default class PokemonIndexItem extends React.Component {
    render() {
        const pokemon = this.props.pokemon
        return (
            <li className="pokemon-index-item">
                <span>{pokemon.id}</span>
                <img src={pokemon.imageUrl} />
                <span>{pokemon.name}</span>
            </li>
        )  
    }
}