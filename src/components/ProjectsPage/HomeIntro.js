import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';

class HomeIntro extends Component {
  constructor(props){
    super(props)
    this.state = {
      homeIntroTopperSlideIn: false,
      homeIntroTopperSlideOut: false,
      homeIntroTextDisplay: false,
      homeIntroXRotateIn: false,
      homeIntroXRotateOut: false
    }
  }

  homeIntroTopperSlideIn = () => {
    console.log("slide in")
    this.setState({
      homeIntroTopperSlideIn: true,
    });
  }
  homeIntroTopperSlideOut = () => {
    console.log("slide out")
    this.setState({
      homeIntroTopperSlideIn: false,
      homeIntroTextDisplay: true,
      homeIntroTopperSlideOut: true,
    });
  }
  homeIntroXRotateIn = () => {
    setTimeout(() => {
      console.log("x in")
      this.setState({
        homeIntroTextDisplay: false,
        homeIntroTopperSlideOut: false,
        homeIntroXRotateIn: true
      });
    }, 2000);

  }
  homeIntroXRotateOut = () => {
    console.log("x out")
    this.setState({
      homeIntroXRotateIn: false,
      homeIntroXRotateOut: true,
    });
  }

  componentDidMount(){
    this.homeIntroTopperSlideIn();
  }

  render () {

    const { homeIntroTopperSlideIn, homeIntroTopperSlideOut, homeIntroTextDisplay, homeIntroXRotateIn, homeIntroXRotateOut } = this.state;


    return(
      <div id="home-intro" className="pin-area">
        <div className="pin-center">
          <CSSTransition timeout={800} onEntered={() => this.homeIntroXRotateOut()} in={homeIntroXRotateIn} classNames="x-svg-in">
            <svg className="x-svg-in" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 222 222" width="222" height="222">
              <path id="x-vertical" d="M82.33 0.04L142.33 0.04L142.33 220.04L82.33 220.04L82.33 0.04Z" />
              <path id="x-horizontal" d="M1 81L221 81L221 141L1 141L1 81Z" />
            </svg>
          </CSSTransition>
        </div>


        <div className="pin-center">

          <div className="home-intro-title-uper-left">
            <CSSTransition timeout={800} in={homeIntroTextDisplay} appear={true} classNames="home-intro-title">
              <p className="home-intro-text">2019</p>
            </CSSTransition>
            <CSSTransition timeout={800} onEntered={() => this.homeIntroTopperSlideOut()} onExited={() => this.homeIntroXRotateIn()} in={homeIntroTopperSlideIn} classNames="home-intro-topper">
              <div className="home-intro-topper"></div>
            </CSSTransition>
          </div>


          <div>
            <CSSTransition timeout={800} in={homeIntroTextDisplay} appear={true} classNames="home-intro-title">
              <h1 className="home-intro-text" id="my-name">Tomas Sedurskas</h1>
            </CSSTransition>
            <CSSTransition timeout={800} onEntered={() => this.homeIntroTopperSlideOut()} onExited={() => this.homeIntroXRotateIn()} in={homeIntroTopperSlideIn} classNames="home-intro-topper">
              <div className="home-intro-topper"></div>
            </CSSTransition>
          </div>


          <div className="home-intro-title-lower-right">
            <CSSTransition timeout={800} in={homeIntroTextDisplay} appear={true} classNames="home-intro-title">
              <p className="home-intro-text">Front-end Web Developer</p>
            </CSSTransition>
            <CSSTransition timeout={800} onEntered={() => this.homeIntroTopperSlideOut()} onExited={() => this.homeIntroXRotateIn()} in={homeIntroTopperSlideIn} classNames="home-intro-topper">
              <div className="home-intro-topper"></div>
            </CSSTransition>
          </div>


        </div>
      </div>
    )
  }
}

export default HomeIntro;
