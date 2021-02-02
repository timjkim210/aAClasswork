import {RECEIVE_ERRORS, CLEAR_ERRORS} from "../actions/error_actions"

const errorReducer = (prevState={}, action) => {
    const nextState = Object.assign({}, prevState)
    switch(action.type) {
        case RECEIVE_ERRORS:
            return action.errors
        case 
    }
}