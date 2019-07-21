import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

import ProjectData from '../../assets/data/project-data.json';
import ShowcaseCard from './ShowcaseCard';
import ListItem from './ListItem';
import Credits from './Credits';

class Showcase extends Component {

  constructor(props){
    super(props)
    this.state = {
      projectData: ProjectData,
      showcaseAnimationMain: false
    }
  }
  componentDidMount(){
    console.log('Yup loaded')
    this.setState({
      showcaseAnimationMain: true
    })
  }
  resetPage = () => {
    this.setState({
      showcaseAnimationMain: false
    })

  }
  animate = () => {
    const link = this.state.projectData.find(({id}) => id === this.props.match.params.id).link;
    this.props.history.push(link);
    window.scrollTo(0, 0);
    setTimeout(() => {
      this.setState({
        showcaseAnimationMain: true
      });
    }, 10);


  }


  render () {

    const showcase = this.state.projectData.find(({id}) => id === this.props.match.params.id);
    if(window.innerWidth > 450){
    return(
      <div className="showcase container-fluid">
        <CSSTransition timeout={300} in={this.state.showcaseAnimationMain} appear={true} classNames="showcase-animation" onExited={this.animate}>
          <div className="showcase-animation">
            <div className="row">
              <div className="col">
                <div className="title">{showcase.projectName}</div>
              </div>
            </div>

            <div className="row showcase-padding">
              <div className="col-3">
                <div className="bold-text">Efforts</div><br></br>
                <div className="sub-text">
                  { showcase.teamEfforts.map((Item, index) =>
                    <ListItem Item={Item} key={index}/>
                  )}
                </div>
              </div>
              <div className="col-9">
                <div className="bold-text">Context</div><br></br>
                <div className="sub-text">{showcase.task}</div>
              </div>
            </div><br></br>

            <div className="row showcase-padding showcase-margin-top-s showcase-margin-bot-l">
              <div className="col-3">
                <div className="bold-text">Period</div><br></br>
                <div className="sub-text">{showcase.startTime} - {showcase.endTime} </div>
              </div>
              <div className="col-3">
                <div className="bold-text">Team Size </div><br></br>
                <div className="sub-text">{showcase.teamSize}</div>
              </div>
              <div className="col-3">
                <div className="bold-text">Client</div><br></br>
                <div className="sub-text">{showcase.clientName}</div>
              </div>
              <div className="col-3">
                <div className="bold-text">Development Method</div><br></br>
                <div className="sub-text">{showcase.devMethod}</div>
              </div>
            </div>


            {showcase.aboutProject.map((aboutProject, index) =>
              <ShowcaseCard aboutProject={aboutProject} key={index}/>
            )}

            <Credits credits={showcase.credits}/>
            <div className="showcase-padding-bot">
              <div className="remove-link" onClick={this.resetPage}>
                <div className="next-project-btn">Next Project</div>
              </div>
            </div>
          </div>
        </CSSTransition   >
      </div>
    )
  } else {
    return(
      <div className="showcase container-fluid">
        <CSSTransition timeout={300} in={this.state.showcaseAnimationMain} appear={true} classNames="showcase-animation" onExited={this.animate}>
          <div className="showcase-animation">
            <div className="row">
              <div className="col">
                <div className="title">{showcase.projectName}</div>
              </div>
            </div>

            <div className="row showcase-padding">
              <div className="col-12">
                <div className="bold-text">Context</div><br></br>
                <div className="sub-text">{showcase.task}</div>
              </div>
            </div><br></br>

          <div className="row showcase-padding">
            <div className="col-12">
              <div className="bold-text">Efforts</div><br></br>
              <div className="sub-text">
                { showcase.teamEfforts.map((Item, index) =>
                  <ListItem Item={Item} key={index}/>
                )}
              </div>
            </div>
          </div><br></br>

          <div className="row showcase-padding">
            <div className="col-12">
              <div className="bold-text">Period</div><br></br>
              <div className="sub-text">{showcase.startTime} - {showcase.endTime} </div>
            </div>
          </div><br></br>

          <div className="row showcase-padding">
            <div className="col-12">
              <div className="bold-text">Development Method</div><br></br>
              <div className="sub-text">{showcase.devMethod}</div>
            </div>
          </div>

          <div className="row showcase-padding showcase-margin-top-s showcase-margin-bot-l ">
            <div className="col-6">
              <div className="bold-text">Team Size </div><br></br>
              <div className="sub-text">{showcase.teamSize}</div>
            </div>
            <div className="col-6">
              <div className="bold-text">Client</div><br></br>
              <div className="sub-text">{showcase.clientName}</div>
            </div>
          </div>




            {showcase.aboutProject.map((aboutProject, index) =>
              <ShowcaseCard aboutProject={aboutProject} key={index}/>
            )}

            <Credits credits={showcase.credits}/>
            <div className="showcase-padding-bot">
              <div className="remove-link showcase-padding" onClick={this.resetPage}>
                <div className="next-project-btn">Next Project</div>
              </div>
            </div>
          </div>
        </CSSTransition   >
      </div>
    )
  }
  }
}

export default Showcase;
