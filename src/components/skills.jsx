import React, { Component } from 'react';

class Skills extends Component {
  render() {
    return (
      <div className="skills-container">
      <a name="skill-link"/>
      <div className="skills-title">Skills</div>
        <div className="skills">
          <div className="skill-card">
            <strong className='skill-title'>Developer</strong>
            <br/>
            <ul className='full-list-one'>
              <li className='list'><img className='icon' src="https://sinninga.github.io/first-portfolio/assets/photos/html.png"/>  HTML5</li>
              <li className='list'><img className='icon' src="https://sinninga.github.io/first-portfolio/assets/photos/css.png"/>  CSS</li>
              <li className='list'><img className='icon' src="https://sinninga.github.io/first-portfolio/assets/photos/js.png"/>  Javascript</li>
              <li className='list'><img className='icon' src="https://sinninga.github.io/first-portfolio/assets/photos/react.png"/>  React</li>
              <li className='list'><img className='icon' src="https://sinninga.github.io/first-portfolio/assets/photos/redux.png"/>  Redux</li>
              <li className='list'><img className='icon' src="https://sinninga.github.io/first-portfolio/assets/photos/rails.png"/>  Ruby on Rails</li>
              <li className='list'><img className='icon' src="https://sinninga.github.io/first-portfolio/assets/photos/bootstrap.png"/>  Bootstrap</li>
              <li className='list'><img className='icon' src="https://sinninga.github.io/first-portfolio/assets/photos/heroku.png"/>  Heroku</li>
              <li className='list'><img className='icon' src="https://sinninga.github.io/first-portfolio/assets/photos/postgres.png"/>  Postgres</li>
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
              <li className='list'>Github</li>
              <li className='list'>Sublime Text</li>
              <li className='list'>Chrome Dev Tools</li>
              <li className='list'>React Dev Tools</li>
              <li className='list'>Redux Dev Tools</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Skills;
