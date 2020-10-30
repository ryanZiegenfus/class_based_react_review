import React, { Component } from 'react';

export default class List extends Component {

    deleteItem = (event) => {
        this.props.filter_list(event.target.getAttribute('objKey'))
    }

    render() {
        return(
            this.props.list.map(e => <p objKey={e.objKey} onClick={this.deleteItem}>{e.text}</p>)
        )
    }
}