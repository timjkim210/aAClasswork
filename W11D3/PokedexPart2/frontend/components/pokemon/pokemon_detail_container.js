import { connect } from 'react-redux';
import {requestSinglePokemon} from './../../actions/pokemon_actions';
import PokemonDetails from './pokemon_details';

const mapStateToProps = (state, ownProps) => ({
    pokemon: state.entities.pokemon[ownProps.match.params.id]
})

const mapDispatchToProps = dispatch => ({
    requestSinglePokemon: (pokeId) => dispatch(requestSinglePokemon(pokeId))
})

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetails)

