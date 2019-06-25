import React, { Component } from 'react';

class Projects extends Component {
  render() {
    return (
      <div className="projects-container">
      <a name="projects-link"/>
      <div className="projects-title">Projects</div>
        <div className="projects">
          <div className="row-one-cards">
            <a href="#" className="project-card">
              <strong className='project-title'>CRUD Demo</strong>
              <br/>
              <img className="image" src="/assets/photos/reduxbb.png" alt=""/>
            </a>
            <a href="#" className="project-card">
              <strong className='project-title'>Sorting Demo</strong>
              <br/>
              <img className="image" src="/assets/photos/equip.png" alt=""/>
            </a>
            <a href="#" className="project-card">
              <strong className='project-title'>API Calls</strong>
              <br/>
              <img className="image" src="/assets/photos/giphy.png" alt=""/>
            </a>
          </div>
          <div className="row-two-cards">
            <a href="https://mister-cocktail-adam.herokuapp.com/" className="project-card">
              <strong className='project-title'>Deployment</strong>
              <br/>
              <img className="image" src="/assets/photos/cocktail.png" alt=""/>
            </a>
            <a href="https://sinninga.github.io/wagon-cities/" className="project-card">
              <strong className='project-title'>Redux Demo</strong>
              <br/>
              <img className="image" src="/assets/photos/wagon-screen.png" alt=""/>
            </a>
            <a href="https://www.w3schools.com/cssref/sel_hover.asp" className="project-card">
              <strong className='project-title'>Design</strong>
              <br/>
              <img className="image" src="/assets/photos/graph.png" alt=""/>
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default Projects;
