export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const RECEIVE_TODO = "RECEIVE_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
import * as APIUtil from '../util/todo_api_util'

export const receiveTodos = (todos) => {
    return {
        type: RECEIVE_TODOS,
        todos
    }
}

export const receiveTodo = (todo) => {
    return {
        type: RECEIVE_TODO,
        todo
    }
}

export const removeTodo = (id) => {
    return {
        type: REMOVE_TODO,
        id
    }
}

export const fetchTodos = () => ({dispatch}) => (
    APIUtil.fetchTodos()
        .then(todos => dispatch(receiveTodos(todos)))
)

export const createTodo = (todo) => ({dispatch}) => (
    APIUtil.createTodo(todo)
        .then(
                res => dispatch(receiveTodo(res)),
                err => dispatch(receiveErrors(err.responseJSON))
            )
)

// export const fetchTodos = function() {
//     return function({dispatch}) {
//         console.log(arguments)
//         return APIUtil.fetchTodos()
//             .then(todos => dispatch(receiveTodos(todos)))
//     }
// };



