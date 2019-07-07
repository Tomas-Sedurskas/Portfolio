import React, { Component } from 'react';
import HomeIntro from './HomeIntro';
import ProjectList from '.././ProjectsPage/ProjectList';

class Projects extends Component {

  introAnimationStart = () => {
    document.getElementById('my-name').classList.add("hide");
    setTimeout(() => { this.introAnimationEnd() }, 500);
  }

  introAnimationEnd = () => {
    this.props.animationRegister();
  }

  start = () => {
    this.introAnimationStart();
  }

  render () {

    const introAnimationEnd = this.props.introAnimationEnd;
    let intro;
    if (!introAnimationEnd) {
      intro = <HomeIntro />;
    } else {
      intro = null;
    }

    return(
      <div id="projects">
        <button onClick={this.start}>Start</button>
        {intro}
      </div>
    )
  }
}

export default Projects;
