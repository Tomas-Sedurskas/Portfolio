import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

class Navbar extends Component {
  render () {

    return(
      <nav id="navbar" >
        <CSSTransition timeout={400} in={this.props.navbarOpen} appear={true} classNames="navbar-animation">

            <div className="navbar-animation pin-area">
              <div className="pin-navbar">
                <CSSTransition in={this.props.navbarOpen} timeout={100} appaer={true} classNames="navbar-text-animation1">
                  <div className="navbar-title navbar-text-animation1" onClick={this.props.menuTrigger}>
                    <NavLink className="remove-link-nav" to="/">Projects</NavLink>
                  </div>
                </CSSTransition>
                <CSSTransition in={this.props.navbarOpen} timeout={100} appaer={true} classNames="navbar-text-animation2">
                  <div className="navbar-title navbar-text-animation2" onClick={this.props.menuTrigger}>
                    <NavLink className="remove-link-nav" to="/About">About</NavLink>
                  </div>
                </CSSTransition>
                <CSSTransition in={this.props.navbarOpen} timeout={100} appaer={true} classNames="navbar-text-animation3">
                  <div className="navbar-title navbar-text-animation3" onClick={this.props.menuTrigger}>
                    <NavLink className="remove-link-nav" to="/Skillset">Skillset</NavLink>
                  </div>
                </CSSTransition>
              </div>
            </div>

        </CSSTransition>
      </nav>
    )
  }
}

export default Navbar;
