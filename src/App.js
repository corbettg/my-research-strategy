import React, { Component } from 'react';
import './App.css';
import { Body, Header } from './Layout'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Body />
      </div>
    )
  }
}

export default App;
