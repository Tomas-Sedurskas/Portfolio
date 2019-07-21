import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router';

import Navbar from './components/Navbar/Navbar';
import Projects from './components/ProjectsPage/Projects';
import Skillset from './components/SkillsetPage/Skillset';
import About from './components/AboutPage/About';
import Error404 from './components/Error404Page/Error404';
import ProjectData from './assets/data/project-data.json';
import Showcase from './components/ProjectsPage/Showcase';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      homeIntroAnimationMain: false,
      navbarOpen: false,
      projectData: ProjectData,
      projectsPageAnimation: false,
      link: ''
    }
  }

  componentDidMount(){
    this.setState({ homeIntroAnimationMain: true });
  }
  homeIntroAnimationMainOut = () => {
    this.setState({ homeIntroAnimationMain: false });
  }
  menuTrigger = () => {
    if(this.state.navbarOpen === true){
      document.getElementById('navbar-target').classList.add("menu-button-pos");
      document.getElementById('navbar-target').classList.remove("menu-button-position");
      document.querySelector(".menu-bar-1").classList.remove("menu-bar-1-active");
      document.querySelector(".menu-bar-2").classList.remove("menu-bar-2-active");
        document.querySelector(".menu-bar-position").style.height = "50%";

    } else {
      document.getElementById('navbar-target').classList.remove("menu-button-pos");
      document.getElementById('navbar-target').classList.add("menu-button-position");
      document.querySelector(".menu-bar-1").classList.add("menu-bar-1-active");
      document.querySelector(".menu-bar-2").classList.add("menu-bar-2-active");
      document.querySelector(".menu-bar-position").style.height = "1px";

    }
    this.setState({ navbarOpen: !this.state.navbarOpen })
  }
  closeProjectLink = (link) => {
    this.setState({
      link: link
    })
    this.closeProjectsPage();
  }
  loadProjectsPage = () => {
    this.setState({
      projectsPageAnimation: true
    })
  }
  closeProjectsPage = () => {
    this.setState({
      projectsPageAnimation: false
    });
  }

  render () {
    return(
      <div id="app">
        <div className="header">
          <div id="logo">
            <h3>Tomas Sedurskas</h3>
          </div>
          <div id="navbar-target" className="menu-button-pos" onClick={this.menuTrigger}>
            <div id="menu-button" >
              <div className="menu-bar-position">
                <span className="menu-bar menu-bar-1"></span>
              </div>
              <div className="menu-bar-position">
                <span className="menu-bar menu-bar-2"></span>
              </div>
            </div>
          </div>
        </div>
        <HashRouter>
          <Navbar menuTrigger={this.menuTrigger} navbarOpen={this.state.navbarOpen}/>
          <Switch>
            <Route path='/' render={({history}) => <Projects loadProjectsPage={this.loadProjectsPage} projectsPageAnimation={this.state.projectsPageAnimation} link={this.state.link} history={history} closeProjectLink={this.closeProjectLink} projectsPageAnimationMain={this.state.projectsPageAnimationMain} projectData={this.state.projectData} homeIntroAnimationMain={this.state.homeIntroAnimationMain} homeIntroAnimationMainOut={this.homeIntroAnimationMainOut} /> } exact="exact"/>
            <Route path='/About' render={({history}) => <About history={history} />} />
            <Route path='/Skillset' render={() => <Skillset />} />
            <Route path="/:id" render={({match, history}) => <Showcase match={match} history={history} showcaseAnimationMain={this.state.showcaseAnimationMain} />} />
            <Route path='*' component={Error404}/>
          </Switch>
        </HashRouter>
      </div>
    )
  }
}

export default App;
