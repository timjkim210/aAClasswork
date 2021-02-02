import {connect} from 'react-redux'
import TodoList from './todo_list'
import {allTodos, errors} from '../../reducers/selectors'
import {receiveTodo, receiveTodos, removeTodo, fetchTodos, createTodo} from '../../actions/todo_actions'

function mapStateToProps(state) {
    return {
        todos: allTodos(state),
        error: errors(state)
    };
}

function mapDispatchToProps(dispatch) {
    return {
        receiveTodo: (todo) => dispatch(receiveTodo(todo)),
        receiveTodos: (todos) => dispatch(receiveTodos(todos)),
        removeTodo: (id) => dispatch(removeTodo(id)),
        fetchTodos: () => dispatch(fetchTodos()),
        createTodo: (todo) => dispatch(createTodo(todo))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);