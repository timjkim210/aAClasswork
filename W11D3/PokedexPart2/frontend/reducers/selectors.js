export const selectAllPokemon = (state) => {
  return Object.values(state.entities.pokemon)
}

export const selectSinglePokemon = (state, pokeId) => {
  return state.entities.pokemon[pokeId];
}
  