import { RECEIVE_ALL_POKEMON, RECEIVE_SINGLE_POKEMON } from './../actions/pokemon_actions';


const pokemonReducer = (state = {}, action) => {
  Object.freeze(state);
  const nextState = Object.assign({}, state)
  switch (action.type){
  case RECEIVE_ALL_POKEMON:
    Object.values(action.pokemon).forEach ( pokemon => {
      nextState[pokemon.id] = pokemon;
    });
    // newState[pokemon] = action.pokemon;
    return nextState;
    // return Object.assign({}, action.pokemon, state);
  case RECEIVE_SINGLE_POKEMON:
    nextState[action.singlePokemon.pokemon.id] = action.singlePokemon.pokemon;
    // return Object.assign({}, action.singlePokemon.pokemon.id, state)
    return nextState;
  default:
    return state;
  } 
}
  
export default pokemonReducer;
