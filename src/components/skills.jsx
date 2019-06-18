import React, { Component } from 'react';

class Skills extends Component {
  render() {
    return (
      <div className="skills">
        <div className="skill-card">
          <strong className='skill-title'>Developer</strong>
          <ul>
            <li className='list'>javascript</li>
            <li className='list'>css</li>
            <li className='list'>html5</li>
            <li className='list'>react</li>
            <li className='list'>ruby</li>
          </ul>
        </div>
        <div className="skill-card">
          <strong className='skill-title'>Designer</strong>
          <ul>
            <li className='list'>ui/ux design</li>
            <li className='list'>wireframing</li>
            <li className='list'>prototyping</li>
            <li className='list'>user stories</li>
          </ul>
        </div>
        <div className="skill-card">
          <strong className='skill-title'>Toolkit</strong>
          <ul>
            <li className='list'>sublime text</li>
            <li className='list'>chrome developer tools</li>
            <li className='list'>github</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Skills;
