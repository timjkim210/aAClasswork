import React from 'react'
import ReactDOM from 'react-dom'
import configureStore from './store/store'
import Root from './components/root'
import {receiveTodo, receiveTodos, removeTodo} from './actions/todo_actions'
import {receiveSteps, receiveStep, removeStep} from './actions/step_actions'
import {allTodos} from './reducers/selectors'

document.addEventListener("DOMContentLoaded", function() {
    const store = configureStore()
    let reactRoot = document.querySelector(".react-root")
    ReactDOM.render(<Root store={store} />, reactRoot)
    window.store = store;
    window.receiveTodo = receiveTodo
    window.receiveTodos = receiveTodos
    window.removeTodo = removeTodo;
    window.receiveSteps = receiveSteps;
    window.receiveStep = receiveStep;
    window.removeStep = removeStep;
    window.allTodos = allTodos;
})