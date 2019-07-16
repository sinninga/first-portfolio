import React, { Component } from 'react';

class Projects extends Component {
  render() {
    return (
      <div className="projects-container">
      <a name="projects-link"/>
      <div className="projects-title">Projects</div>
        <div className="projects">
          <div className="row-one-cards">
            <a href="https://sinninga.github.io/chat-redux/" className="project-card">
              <strong className='project-title'>React Chat</strong>
              <br/>
              <img className="image" src="https://sinninga.github.io/first-portfolio/assets/photos/photography/chat.png" alt=""/>
            </a>
            <a href="https://sinninga.github.io/react-gifs/" className="project-card">
              <strong className='project-title'>API Calls</strong>
              <br/>
              <img className="image" src="https://sinninga.github.io/first-portfolio/assets/photos/gifs.png" alt=""/>
            </a>
          </div>
          <div className="row-two-cards">
            <a href="https://mister-cocktail-adam.herokuapp.com/" className="project-card">
              <strong className='project-title'>Heroku Deployment</strong>
              <br/>
              <img className="image" src="https://sinninga.github.io/first-portfolio/assets/photos/cocktail.png" alt=""/>
            </a>
            <a href="https://sinninga.github.io/staticairbnbredux/" className="project-card">
              <strong className='project-title'>Redux Maps</strong>
              <br/>
              <img className="image" src="https://sinninga.github.io/first-portfolio/assets/photos/reduxmaps.png" alt=""/>
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default Projects;
