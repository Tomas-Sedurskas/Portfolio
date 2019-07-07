import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Navbar extends Component {
  render () {
    return(
      <nav id="navbar">
        <NavLink to="/">Projects</NavLink>
        <NavLink to="/About">About</NavLink>
        <NavLink to="/Designs">Designs</NavLink>
        <NavLink to="/Skillset">Skillset</NavLink>
      </nav>
    )
  }
}

export default Navbar;
