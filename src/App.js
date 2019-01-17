import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import StartScreen from './components/StartScreen';
import HomeScreen from './components/HomeScreen';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div className="App">
          <Switch>
            <Route exact path='/' component={StartScreen} />
            <Route path='/home' component={HomeScreen} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
