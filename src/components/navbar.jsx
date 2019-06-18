import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">Skills</a>
        <a className="navbar-brand" href="#">Projects</a>
        <a className="navbar-brand" href="#">About</a>
      </nav>
    );
  }
}

export default Navbar;
