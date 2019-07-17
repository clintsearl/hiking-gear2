import React, { Component } from 'react';


class Navigation extends Component {
  render() {
    return (
      <div className="Navigation">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand" href="/">Backpacking Gear</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarText">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <a className="nav-link" href="/About">About <span className="sr-only"></span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/gearlist">View Gear</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/addgear">Add Gear</a>
      </li>
    </ul>
    <span className="navbar-text">
      Clint's Backpacking Gear
    </span>
  </div>
</nav>
      </div>
    );
  }
}

export default Navigation;
