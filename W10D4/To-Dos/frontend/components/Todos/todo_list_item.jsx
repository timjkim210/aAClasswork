import React from 'react'
import TodoDetailViewContainer from './todo_detail_view_container'

class TodoListItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            done: this.props.todo.done,
            detail: false
        }
        this.switchState = this.switchState.bind(this)
        this.switchDetail = this.switchDetail.bind(this)
    }

    switchState(e) {
        let newTodo = this.props.todo
        newTodo.done = !newTodo.done
        // console.log(this.props)
        this.props.receiveTodo(newTodo)
        this.setState({done: newTodo.done})
    }

    switchDetail(e) {
        this.setState({ detail: !this.state.detail })
    }

    render() {
        return (
            <li>
                <h2 onClick={this.switchDetail}>{this.props.todo.title}</h2>
                {/* <input type="submit" value="Delete" onClick={() => this.props.removeTodo(this.props.todo.id)} /> */}
                <input type="submit" value={this.state.done ? "Undo" : "Done"} onClick={this.switchState} />
                <TodoDetailViewContainer className="todo-detail-view" todo={this.props.todo}/>
            </li>
        )
    }
    
}

export default TodoListItem;