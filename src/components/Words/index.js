import React, {Component} from 'react';
import { v4 } from 'uuid'

import Input from './Input';
import List from './List';

export default class Words extends Component {
    state = {
        list: [{text:'a', objKey:v4()}, {text:'b', objKey:'e.objKey'}, {text:'c', objKey:v4()}]
    }

    update_list = (value) => {
        console.log(value)
        this.setState({list: [{text: value, objKey:v4()}, ...this.state.list]})
    }
    
    filter_list = (id) => {
        console.log(id)
        console.log(this.state.list)
        this.setState({list: this.state.list.filter(e => e.objKey != id)})
    }
    
    render() {
        return (
            <div className="Words">
                <Input update_list={this.update_list} />
                <List list={this.state.list} filter_list={this.filter_list}/>
            </div>
        )
    }
}