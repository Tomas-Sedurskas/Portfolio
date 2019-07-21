import React, { Component } from 'react';

class ProjectCardMobile extends Component {

  enterProject = () => {
    let link = "/" + this.props.project.projectName;
    this.props.closeProjectLink(link);
    console.log('1')
  }

  render () {
    return(
      <div className="mobile-row showcase-margin-top-m">
        <div className="project-card-mobile" onClick={this.enterProject}>
          <div className="project-card-num-mobile">0{this.props.project.number}. {this.props.project.tag}</div>
          <img  src={require("../../assets/images/" + this.props.project.coverImg)} />
        </div>
      </div>

    )
  }
}

export default ProjectCardMobile;
