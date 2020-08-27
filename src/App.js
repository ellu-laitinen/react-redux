import React, { Component } from 'react';

import './App.css';
import Counter from './Components/counter'


class App extends Component {
  state = {
    counter: 0
  }

  /* addHandler = () => {
    this.setState({
      counter: this.state.counter + 1

    })

    console.log(this.state.counter)
  }

  reduceHandler = () => {
    this.setState({
      counter: this.state.counter - 1

    })

    console.log(this.state.counter)
  }
  resetHandler = () => {
    this.setState({
      counter: 0

    })

    console.log(this.state.counter)
  }
 */


  render() {
    return (
      <div className="App">
        <Counter add={this.addHandler} reduce={this.reduceHandler} number={this.state.counter} reset={this.resetHandler} />

      </div>
    );
  }
}


export default App;
