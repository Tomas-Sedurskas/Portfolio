import React, { Component } from 'react'
import Navbar from './components/Navbar/Navbar';
import Projects from './components/ProjectsPage/Projects';
import Designs from './components/DesignsPage/Designs';
import About from './components/AboutPage/About';
import Skillset from './components/SkillsetPage/Skillset';
import Error404 from './components/Error404Page/Error404';

import {BrowserRouter, Route, Switch} from 'react-router-dom';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      introAnimationEnd: false
    }
  }
  animationRegister = () => {
    this.setState({
      introAnimationEnd: true
    })
  }


  render () {
    return(
      <div id="app">
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route path='/' render={() => <Projects animationRegister={this.animationRegister} introAnimationEnd={this.state.introAnimationEnd}/>} exact="exact"/>
            <Route path='/Skillset' render={() => <Skillset />} />
            <Route path='/About' render={() => <About />} />
            <Route path='/Designs' render={() => <Designs />} />
            <Route path='*' component={Error404}/>
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
