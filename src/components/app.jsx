import React, { Component } from 'react';
import Navbar from '../components/navbar.jsx';
import Banner from '../components/banner.jsx';
import Skills from '../components/skills.jsx';
import Projects from '../components/projects.jsx';
import About from '../components/about.jsx';
import Footer from '../components/footer.jsx';


class App extends Component {
  render() {
    return (
      <div className="app">
        <Navbar />
        <Banner />
        <Skills />
        <Projects />
        <About />
        <Footer />
      </div>
    );
  };
}

export default App;
