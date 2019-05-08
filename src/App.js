import React, { Component } from 'react';
import './App.css';
import Navigation from './components/navigation'
import Routing from './components/Route'
import styled from 'styled-components';
import Navbarpage from './components/Navbar'
// import {Link} from 'react-router-dom'
//colors for the whole place https://www.design-seeds.com/slow-lifestyle/pineapple-tones/
// #bec8c9  Body text
// #2c2d31  Background Nav
// #b98d68  Body highlights
// #c3562f  titles accents


const Footer = styled.footer`
  background-color:#AD9477;
  width:100vw;
  bottom:0;
  position:relative;
`



class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation/>
        {/* <Navbarpage/> */}
        {/* <header className="App-header">
           
        </header> */}
        <div className="container">
        <Routing/>
        </div>
        {/* <Footer>
              Clint Earl 
              link 
              link
            </Footer> */}
      </div>
    );
  }
}

export default App;
