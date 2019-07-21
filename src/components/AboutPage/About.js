import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import { NavLink } from 'react-router-dom';

class About extends Component {
  constructor(props){
    super(props)
    this.state = {
      aboutAnimationMain: false
    }
  }
  route = () => {
    this.props.history.push("./");
  }
  closeAbout = () => {
    this.setState({
      aboutAnimationMain: false
    });
  }
  componentDidMount(){
    this.setState({
      aboutAnimationMain: true
    });
  }
  render () {
    return(
      <div id="about">
        <CSSTransition appear={true} timeout={500} in={this.state.aboutAnimationMain} onExited={() => this.route()} classNames="about-animation">
          <div className="about-cont pin-area about-animation">
            <svg className="pin-center about-x" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 222 222" width="222" height="222">
              <path id="x-vertical" d="M82.33 0.04L142.33 0.04L142.33 220.04L82.33 220.04L82.33 0.04Z" />
              <path id="x-horizontal" d="M1 81L221 81L221 141L1 141L1 81Z" />
            </svg>
            <div className="pin-center text-align-center sub-text about-fix">
              <div className="about-title">Hi, I'm Tom.</div>
              <div className="about-text">I recent graduate of Multimedia Design from UCN and I'm continueing my studies for Web Development at UCN. Throughout the studies I expect to improve and expand upon my current skillset. I am striving to become a Front-end React developer, but I always have great interest in trying and learning new technologies and I would love to broaden my understanding of the Web Devlopment industry.</div>
              <div onClick={this.closeAbout} className="about-button remove-link">View Projects</div>
            </div>
          </div>
        </CSSTransition>
      </div>
    )
  }
}

export default About;
