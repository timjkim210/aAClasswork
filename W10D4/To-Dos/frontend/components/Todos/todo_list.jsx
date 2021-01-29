import React from 'react'
import TodoListItem from "./todo_list_item"

class TodoList extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        // console.log(this.props.todos)
        return (
            <>
                <ul>
                    {this.props.todos.map((todo) => {
                        return <TodoListItem key={todo.id} todo={todo}/>   
                    })}
                </ul>
                <TodoForm />
            </>
        )
    }
}

export default TodoList;