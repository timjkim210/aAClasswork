import React from 'react'
import ReactDOM from 'react-dom'
import configureStore from './store/store'

let Root = () => {
    return (
        <h1>Todos App</h1>
    )
}

document.addEventListener("DOMContentLoaded", function() {
    let reactRoot = document.querySelector(".react-root")
    ReactDOM.render(<Root />, reactRoot)
    window.store = configureStore();
})