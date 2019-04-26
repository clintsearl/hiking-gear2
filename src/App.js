import React, { Component } from 'react';
import './App.css';
import Navigation from './components/navigation'
import Routing from './components/Route'
import styled from 'styled-components';

// import {Link} from 'react-router-dom'
//colors for the whole place https://www.design-seeds.com/slow-lifestyle/pineapple-tones/
// #B1BBBB
// #737E7D
// #393E43
// #202124
// #3E3938
// #AD9477

const Footer = styled.footer`
  background-color:#AD9477;
  width:100vw;
  bottom:0;
  position:absolute;
`



class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation/>
        {/* <header className="App-header">
           
        </header> */}
        <Routing/>

        <Footer>
              Clint Earl 
              link 
              link
            </Footer>
      </div>
    );
  }
}

export default App;
