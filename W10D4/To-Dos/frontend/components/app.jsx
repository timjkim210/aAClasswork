import React from 'react';
import TodoListContainer from './Todos/todo_list_container'

export default class App extends React.Component {
    render() {
        return(
            <>
                <h1>To-Dos</h1>
                <TodoListContainer />
            </>
        )
    }
} 