import React from 'react'
import TodoList from './todo_list'

const TodoListItem = (props) => {
    return (
        <>
            <li>{props.todo.title}</li>
            <input type="submit" value="Delete" onClick={() => props.removeTodo(props.todo.id)} />
        </>
    )
}

export default TodoListItem;