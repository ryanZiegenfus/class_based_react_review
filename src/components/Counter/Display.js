import React, { Component } from 'react';

class Display extends Component {

    render() {
      return (
        <div className="Display">
            {this.props.count}
        </div>
      )
    }
  }

  export default Display;