import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux';
import store from './store'
import IdeaList from './components/IdeaList'

 // const store = createStore(() => [] , {} , applyMiddleware())

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <IdeaList/>
      </div>
    </Provider>
    );
  }
}

export default App;
