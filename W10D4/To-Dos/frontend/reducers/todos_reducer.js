// const initialState = {
//     1: {
//         id: 1,
//         title: "wash car",
//         body: "with soap",
//         done: false
//     },
//     2: {
//         id: 2,
//         title: "wash dog",
//         body: "with shampoo",
//         done: true
//     }
// };
import {RECEIVE_TODOS, RECEIVE_TODO} from '../actions/todo_actions'

const todosReducer = (prevState = {}, action) => {
    const nextState = Object.assign({}, prevState);

    switch(action.type) {
        case RECEIVE_TODOS:
            action.todos.forEach(todo => {
                nextState[todo.id] = todo;
            })
            // nextState[action.todos.id] = actions.todos;
            return nextState;
        default:
            return oldState;
    }
}

export default todosReducer