import React, { Component } from 'react';

class Projects extends Component {
  render() {
    return (
      <div className="projects-container">
      <div className="projects-title">Projects</div>
        <div className="projects">
          <div className="row-one-cards">
            <div className="project-card">
              <strong className='project-title'>CRUD Demo</strong>
              <br/>
              <img className="image" src="/assets/sinai.jpg" alt=""/>
            </div>
            <div className="project-card">
              <strong className='project-title'>Sorting Demo</strong>
              <br/>
              <img className="image" src="/assets/sinai.jpg" alt=""/>
            </div>
            <div className="project-card">
              <strong className='project-title'>API Calls</strong>
              <br/>
              <img className="image" src="/assets/sinai.jpg" alt=""/>
            </div>
          </div>
          <div className="row-two-cards">
            <div className="project-card">
              <strong className='project-title'>Deployment</strong>
              <br/>
              <img className="image" src="/assets/sinai.jpg" alt=""/>
            </div>
            <div className="project-card">
              <strong className='project-title'>Redux Demo</strong>
              <br/>
              <img className="image" src="/assets/sinai.jpg" alt=""/>
            </div>
            <div className="project-card">
              <strong className='project-title'>Design</strong>
              <br/>
              <img className="image" src="/assets/sinai.jpg" alt=""/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Projects;
