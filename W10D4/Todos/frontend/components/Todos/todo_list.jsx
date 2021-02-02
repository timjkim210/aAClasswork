import React from 'react'
import TodoListItem from "./todo_list_item"
import TodoForm from "./todo_form"

class TodoList extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchTodos();
    }

    render() {
        // console.log(this.props.todos)
        return (
            <>
                <ul>
                    {this.props.todos.map((todo) => {
                        return <TodoListItem receiveTodo={this.props.receiveTodo} removeTodo={this.props.removeTodo} key={todo.id} todo={todo}/>   
                    })}
                </ul>
                <TodoForm receiveTodo={this.props.receiveTodo} createTodo={this.props.createTodo} error={this.props.error}/>
            </>
        )
    }
}

export default TodoList;