import React from 'react';
import {Provider} from 'react-redux'
import App from './app'

const Root = (props) => {
    console.log(props.store)
    return (
        <Provider store={props.store}>
            <App />
        </Provider>
    )
}
export default Root;
