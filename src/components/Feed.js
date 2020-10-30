import React, { Component } from 'react';
import axios from 'axios';

export default class Feed extends Component {
    state = {
        people: []
    }

    componentDidMount() {
        axios.get('http://localhost:5000/api/users')
        .then(res => {
            this.setState({people: res.data})
        })
    }

    render() {
        return(
            this.state.people.map(e => <div key={e.username}>{e.username}</div>)
        )
    }
}