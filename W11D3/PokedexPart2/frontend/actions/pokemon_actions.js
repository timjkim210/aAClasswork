import * as APIUtil from '../util/api_util';

export const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON";

export const receiveAllPokemon = (pokemon) => ({
  type: RECEIVE_ALL_POKEMON,
  pokemon
})

export const requestAllPokemon = () => (dispatch) => (
  APIUtil.fetchAllPokemon()
    .then(pokemon => dispatch(receiveAllPokemon(pokemon)))
)

export const RECEIVE_SINGLE_POKEMON = "RECEIVE_SINGLE_POKEMON";

export const receiveSinglePokemon = (singlePokemon) => ({
  type: RECEIVE_SINGLE_POKEMON,
  singlePokemon
})

export const requestSinglePokemon = (pokeId) => (dispatch) => (
  APIUtil.fetchSinglePokemon(pokeId)
    .then(pokemon => dispatch(receiveSinglePokemon(pokemon)))
)