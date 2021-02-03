import { RECEIVE_SINGLE_POKEMON } from './../actions/pokemon_actions';

const itemsReducer = (state = {}, action) => {
    Object.freeze(state);
    const nextState = Object.assign({}, state)
    switch (action.type){
        case RECEIVE_SINGLE_POKEMON:
            Object.values(action.singlePokemon.items).forEach(item => {
                nextState[item.id] = item;
            });
            return nextState;
        default:
            return state;
    }
}

export default itemsReducer;
