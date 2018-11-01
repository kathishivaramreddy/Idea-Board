import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import IdeaList from './components/IdeaList'

 // const store = createStore(() => [] , {} , applyMiddleware())

class App extends Component {
  render() {
    return (

        <div className="App">
          <IdeaList/>
        </div>
    );
  }
}

export default App;
