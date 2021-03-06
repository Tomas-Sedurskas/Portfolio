import React, { Component } from 'react';
import HorizontalScroll from 'react-scroll-horizontal'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import ProjectCardMobile from './ProjectCardMobile';
import ProjectCard from './ProjectCard';

class ProjectList extends Component {

  render () {
    if(window.innerWidth > 450){
      console.log(window.innerWidth)
      return(
        <div id="project-list" className="projects-animation">
          <HorizontalScroll pageLock={false} reverseScroll={true} >
            <div className="project-card">
              <div className="project-card-start">
                <div className="pin-center">
                  <p>These are some of my favourite projects that I have worked on so far.</p><br></br>
                  <p>Scroll to have a look!</p>
                </div>
              </div>
            </div>
              { this.props.projectData.map((project) => (
                <ProjectCard history={this.props.history} closeProjectLink={this.props.closeProjectLink} project={project} key={project.id} openProject={this.openProject}/>
                )
              )}
            <div className="project-card">
              <div className="project-card-end">
                <h3 className="pin-left">More coming soon!</h3>
              </div>
            </div>
          </HorizontalScroll>
        </div>
      )
    } else {
      console.log('nope')
      console.log(window.innerWidth)
      return(
          <div id="project-list" className="projects-animation">
            <div className="mobile-row showcase-margin-top-l showcase-margin-bot bold-text mobile-text">
              <p>These are some of my favourite projects that I have worked on so far.</p><br></br>
              <p className="text-align-center">Swipe up to have a look!</p>
            </div>



            { this.props.projectData.map((project) => (
              <ProjectCardMobile history={this.props.history} closeProjectLink={this.props.closeProjectLink} project={project} key={project.id} openProject={this.openProject}/>
              )
            )}

            <div className="mobile-row showcase-margin-top-m showcase-margin-bot-m bold-text big-text text-align-center">
              <h3>More coming soon!</h3>
            </div>
          </div>
      )
    }

  }
}

export default ProjectList;
