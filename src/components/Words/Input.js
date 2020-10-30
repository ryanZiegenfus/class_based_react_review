import React, { Component } from 'react';

export default class Input extends Component {
    
    state = {
        text: ''
    }

    changeHandler = (event) => {
        console.log(this)
        this.setState({ [event.target.name]: event.target.value })
    }

    submitHandler = (event) => {
        event.preventDefault();
        this.props.update_list(this.state.text)
        this.setState({text: ''})
    }

    render() {
        return(
            <form onSubmit={this.submitHandler}>
                <input name='text' value={this.state.text} onChange={this.changeHandler} />
            </form>
        )
    }
}