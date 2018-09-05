import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GuessCount from './guess-count.js';
import GuessEntry from './guess-entry.js';
import GuessList from './guess-list.js';
import Header from './header.js';
import Results from './results.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
