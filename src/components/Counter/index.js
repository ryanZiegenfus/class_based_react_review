import React, { Component } from 'react';
import Display from './Display'
import Controls from './Controls'

import '../../App.css'

export default class Counter extends Component {

    state = {
        count: 0,
    }

    change_count = (amount) => {
        this.setState({count : this.state.count + amount})
    }

    render() {
        return (
            <div className="Counter">
                <Display count={this.state.count}/>
                <Controls change_count={this.change_count}/>
            </div>
        )
    }
}
