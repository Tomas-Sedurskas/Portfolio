import React, { Component } from 'react';

class ShowcaseCard extends Component {
  render () {
    return(
      <div className="showcase-card row">
        <div className="col">
          <div className="row showcase-padding ">
            <div className="col-12">
              <div className="bold-text">{this.props.aboutProject.title}</div><br></br>
              <div className="sub-text">{this.props.aboutProject.text}</div>
            </div>
          </div>
          <img className="width-100 showcase-margin-top-l showcase-margin-bot-l" src={require("../../assets/images/" + this.props.aboutProject.image)} />
        </div>
      </div>
    )
  }
}

export default ShowcaseCard;
