import {combineReducers} from 'redux';
import stepsReducer from './steps_reducer';
import todosReducer from './todos_reducer';
import errorReducer from './error_reducer';

const rootReducer = combineReducers({
    todos: todosReducer,
    steps: stepsReducer,
    error: errorReducer
})

export default rootReducer;