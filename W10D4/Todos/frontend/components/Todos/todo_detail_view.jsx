import React from 'react'

class TodoDetailView extends React.Component {
    render() {
        return (
            <>
                <h3>{this.props.title}</h3>
                <p>{this.props.body}</p>
            </>
        )
    }
}

export default TodoDetailView;