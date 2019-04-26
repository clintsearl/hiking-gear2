import React, { Component } from 'react';
import './App.css';
import Navigation from './components/navigation'
import Routing from './components/Route'
import Welcome from './pages/Welcome';
// import {Link} from 'react-router-dom'
//stuff is changing! test branch for NeDB


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation/>
        {/* <header className="App-header">
           
        </header> */}
        <Routing/>
      </div>
    );
  }
}

export default App;
