import React, { Component } from 'react';

class Skills extends Component {
  render() {
    return (
      <div className="skills">
        <div className="skill-card">
          <strong className='skill-title'>Developer</strong>
          <ul className='full-list'>
            <li className='list'>Javascript</li>
            <li className='list'>CSS</li>
            <li className='list'>HTML5</li>
            <li className='list'>React</li>
            <li className='list'>Ruby</li>
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
    )
  }
}

export default Skills;
