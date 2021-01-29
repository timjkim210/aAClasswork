import React from 'react'

class TodoList extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        console.log(this.props.todos)
        return (
            <ul>
                {this.props.todos.map((todo) => {
                    return (
                        <li key={todo.id}>
                            {todo.title}
                        </li>
                        )
                        
                })}
            </ul>
            
        )
    }
}

export default TodoList;