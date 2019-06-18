import React, { Component } from 'react';
import Navbar from '../components/navbar.jsx';
import Banner from '../components/banner.jsx';


class App extends Component {
  render() {
    return (
      <div className="app">
        <Navbar />
        <Banner />
      </div>
    );
  };
}

export default App;
