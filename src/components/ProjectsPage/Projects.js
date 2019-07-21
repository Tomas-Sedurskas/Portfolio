import React, { Component } from 'react';
import HomeIntro from './HomeIntro';
import ProjectList from '.././ProjectsPage/ProjectList';
import { CSSTransition } from 'react-transition-group';

class Projects extends Component {

  componentDidMount(){
    this.props.loadProjectsPage()
  }
  route = () => {
    this.props.history.push(this.props.link);
  }

  render () {
    return(
      <div id="projects">
        <CSSTransition timeout={500} in={this.props.projectsPageAnimation} appear={true} classNames="projects-animation" onExited={this.route}>
          <ProjectList closeProjectLink={this.props.closeProjectLink} history={this.props.history} projectData={this.props.projectData} />
        </CSSTransition>
        <CSSTransition timeout={400} in={this.props.homeIntroAnimationMain} appear={true} classNames="home-intro">
          <HomeIntro homeIntroAnimationMainOut={this.props.homeIntroAnimationMainOut} />
        </CSSTransition>
      </div>
    )
  }
}

export default Projects;
