import React, { Component } from 'react';

class Controls extends Component {

    render() {
      return (
        <div className="Controls">
            <button onClick={() => this.props.change_count(-1)}>
                -
            </button>
            <button onClick={() => this.props.change_count(1)}>
                +
            </button>
        </div>
      )
    }
  }

  export default Controls;