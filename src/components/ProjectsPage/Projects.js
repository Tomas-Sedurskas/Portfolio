import React, { Component } from 'react';
import HomeIntro from './HomeIntro';
import ProjectList from '.././ProjectsPage/ProjectList';
import { CSSTransition } from 'react-transition-group';

class Projects extends Component {



  render () {

    const homeIntroAnimationMain = this.props.homeIntroAnimationMain;

    return(
      <div id="projects">
        Heyo!
        <CSSTransition in={homeIntroAnimationMain} appear={true} classNames="home-intro"><HomeIntro homeIntroAnimationMainOut={this.props.homeIntroAnimationMainOut} /></CSSTransition>;
      </div>
    )
  }
}

export default Projects;
