import React, { Component } from 'react';

class ProjectCard extends Component {

  enterProject = () => {
    let link = "/" + this.props.project.projectName;
    this.props.closeProjectLink(link);
    console.log('1')
  }

  render () {
    return(
      <div className="project-card project-open" onClick={this.enterProject}>
        <div className="project-card-wrapper pin-center">
          <div className="project-card-img">
            <h2 className="project-card-tag">{this.props.project.tag}</h2>
            <div className="project-card-num">0{this.props.project.number}</div>
            <img  src={require("../../assets/images/" + this.props.project.coverImg)} />
          </div>
        </div>
      </div>
    )
  }
}

export default ProjectCard;
