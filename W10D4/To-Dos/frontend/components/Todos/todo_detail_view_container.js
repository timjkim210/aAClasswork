import {connect} from 'react-redux'
import TodoDetailView from './todo_detail_view'
import {removeTodo} from '../../actions/todo_actions'

function mapDispatchToProps(dispatch) {
    return {
        removeTodo: (id) => dispatch(removeTodo(id))
    }
}

export default connect(null, mapDispatchToProps)(TodoDetailView)