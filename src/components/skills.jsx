import React, { Component } from 'react';

class Skills extends Component {
  render() {
    return (
      <div className="skills-container">
      <div className="skills-title">Skills</div>
        <div className="skills">
          <div className="skill-card">
            <strong className='skill-title'>Developer</strong>
            <br/>
            <ul className='full-list'>
              <li className='list'>Javascript</li>
              <li className='list'>CSS</li>
              <li className='list'>HTML5</li>
              <li className='list'>React</li>
              <li className='list'>Redux</li>
              <li className='list'>Ruby</li>
              <li className='list'>Bootstrap</li>
              <li className='list'>Heroku</li>
              <li className='list'>Postgres</li>
            </ul>
          </div>
          <div className="skill-card">
            <strong className='skill-title'>Designer</strong>
            <br/>
            <ul className='full-list'>
              <li className='list'>UI/UX design</li>
              <li className='list'>Wireframing</li>
              <li className='list'>Prototyping</li>
              <li className='list'>User Stories</li>
            </ul>
          </div>
          <div className="skill-card">
            <strong className='skill-title'>Toolkit</strong>
            <br/>
            <ul className='full-list'>
              <li className='list'>Sublime Text</li>
              <li className='list'>Chrome Dev Tools</li>
              <li className='list'>Github</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Skills;
