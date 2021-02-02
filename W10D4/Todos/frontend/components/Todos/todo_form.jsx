import React from 'react'

class TodoForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: "",
            body: "",
            id: this.uniqueId(),
            done: false
        }
        this.updateTitle = this.updateTitle.bind(this);
        this.updateBody = this.updateBody.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    updateTitle(e) {
        this.setState({title: e.target.value})
    }

    updateBody(e) {
        this.setState({ body: e.target.value })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createTodo(this.state).then(() => {
            this.setState({id: this.uniqueId(), title: "", body: ""})
        })
    }

    uniqueId() {
        return new Date().getTime();
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <label>Title:
                    <input type="text" onChange={this.updateTitle} value={this.state.title}/>
                </label>
                <label>Body:
                    <input type="text" onChange={this.updateBody} value={this.state.body} />
                </label>
                <input type="submit" value="Add Todo"/>
                {this.props.error.map(error => {
                    return <h3>{error}</h3>
                })}
            </form>
        )
    }
}

export default TodoForm;