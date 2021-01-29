import React from 'react'
import ReactDOM from 'react-dom'
import configureStore from './store/store'
import {receiveTodo, receiveTodos, removeTodo} from './actions/todo_actions'
import {receiveSteps, receiveStep, removeStep} from './actions/step_actions'

let Root = () => {
    return (
        <h1>Todos App</h1>
    )
}

document.addEventListener("DOMContentLoaded", function() {
    let reactRoot = document.querySelector(".react-root")
    ReactDOM.render(<Root />, reactRoot)
    window.store = configureStore();
    window.receiveTodo = receiveTodo
    window.receiveTodos = receiveTodos
    window.removeTodo = removeTodo;
    window.receiveSteps = receiveSteps;
    window.receiveStep = receiveStep;
    window.removeStep = removeStep;
})