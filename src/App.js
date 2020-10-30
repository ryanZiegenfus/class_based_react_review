import React, { Component } from 'react';
import Counter from './components/Counter';
import Words from './components/Words'
import Feed from './components/Feed';

import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Counter />
        <Words />
        <div>----------------------------------------------------------------</div>
        {/* <Feed /> */}
      </div>
    )
  }
}

export default App;
