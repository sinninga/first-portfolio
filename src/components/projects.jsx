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
            <a href="https://sinninga.github.io/chat-redux/" className="project-card">
              <strong className='project-title'>React Chat</strong>
              <br/>
              <img className="image" src="/assets/photos/photography/chat.png" alt=""/>
            </a>
            <a href="https://sinninga.github.io/react-gifs/" className="project-card">
              <strong className='project-title'>API Calls</strong>
              <br/>
              <img className="image" src="/assets/photos/gifs.png" alt=""/>
            </a>
          </div>
          <div className="row-two-cards">
            <a href="https://mister-cocktail-adam.herokuapp.com/" className="project-card">
              <strong className='project-title'>Deployment</strong>
              <br/>
              <img className="image" src="/assets/photos/cocktail.png" alt=""/>
            </a>
            <a href="https://sinninga.github.io/staticairbnbredux/" className="project-card">
              <strong className='project-title'>Redux Maps</strong>
              <br/>
              <img className="image" src="/assets/photos/reduxmaps.png" alt=""/>
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
