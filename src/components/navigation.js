import React, { Component } from 'react';


class Navigation extends Component {
  render() {
    return (
      <div className="Navigation">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="/">Backpacking Gear</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarText">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="/About">About <span class="sr-only"></span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/gearlist">View Gear</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/addgear">Add Gear</a>
      </li>
    </ul>
    <span class="navbar-text">
      Clint's Backpacking Gear
    </span>
  </div>
</nav>
      </div>
    );
  }
}

export default Navigation;
