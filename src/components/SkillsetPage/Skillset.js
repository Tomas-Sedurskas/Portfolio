import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';

class Skillset extends Component {

  constructor(props){
    super(props)
    this.state = {
      skillsetAnimationMain: false
    }
  }
  componentDidMount(){
    this.setState({
      skillsetAnimationMain: true
    })
  }
  render () {
      if(window.innerWidth > 450){
        return(
        <div id="skillset">
          <CSSTransition appear={true} timeout={500} in={this.state.skillsetAnimationMain} classNames="skillset-animation">
            <div className="skillset-animation">
              <div className="skillset-left pin-area">
                <div className="pin-center skillset-cont">
                  <div className="skillset-title skillset-title-pad1">Current Skillset</div>
                  <div className="sub-text">
                    <div><span className="bold-text">Languages</span> - HTML5 | CSS3 | JavaScript</div>
                    <div><span className="bold-text">Databases</span> - MSSQL | Firebase</div>
                    <div><span className="bold-text">Framework</span> - React | Bootstrap | Vue</div>
                    <div><span className="bold-text">Dev Methods</span> - Scrum | Waterfall | Prototyping</div>
                    <div><span className="bold-text">Design Tools</span> - Adobe XD | Photoshop | Illustrator</div>
                    <div><span className="bold-text">Other</span> - JSON | AJAX | Node.js | WordPress | Git </div>
                  </div>
                  <div className="skillset-title skillset-title-pad2">Future Roadmap</div>
                  <div className="sub-text">
                    <div>Right now my interest is peaked by:</div>
                    <div>Redux | GraphQL | SASS | TypeScript | React Native</div><br></br>
                    <div>
                      This path is not set in stone and I would like to learn a variety of different web technologies.
                      The Web Development Top-up course should bring a lot of new unexpected challanges and hopefully it's going to bring some interesting changes to the roadmap.
                    </div>
                  </div>
                </div>
              </div>
              <div className="skillset-right pin-area">
                <div className="pin-center skillset-cont">
                  <div className="icon-row">
                    <img src={require("../../assets/icons/HTML.png")} className="icon" />
                    <img src={require("../../assets/icons/AI.png")} className="icon" />
                    <img src={require("../../assets/icons/GIT.png")} className="icon" />
                  </div>
                  <div className="icon-row">
                    <img src={require("../../assets/icons/FB.png")} className="icon" />
                    <img src={require("../../assets/icons/JS.png")} className="icon" />
                    <img src={require("../../assets/icons/NJS.png")} className="icon" />
                  </div>
                  <div className="icon-row">
                    <img src={require("../../assets/icons/REACT.png")} className="icon" />
                    <img src={require("../../assets/icons/CSS.png")} className="icon" />
                    <img src={require("../../assets/icons/PS.png")} className="icon" />
                  </div>
                  <div className="icon-row">
                    <img src={require("../../assets/icons/BS.png")} className="icon" />
                    <img src={require("../../assets/icons/REDUX.png")} className="icon" />
                    <img src={require("../../assets/icons/MSSQL.png")} className="icon" />
                  </div>
                  <div className="icon-row">
                    <img src={require("../../assets/icons/XD.png")} className="icon" />
                    <img src={require("../../assets/icons/GQL.png")} className="icon" />
                    <img src={require("../../assets/icons/SASS.png")} className="icon" />
                  </div>
                </div>
              </div>
            </div>
          </CSSTransition>
        </div>
      )
    } else {
      return(
        <div id="skillset-mobile">
          <CSSTransition appear={true} timeout={500} in={this.state.skillsetAnimationMain} classNames="skillset-animation">
            <div className="skillset-animation">
              <div className="skillset-mobile-top showcase-margin-top-l">
                <div className="skillset-cont-mobile">
                  <div className="skillset-title skillset-title-pad1">Current Skillset</div>
                  <div className="sub-text">
                    <div><span className="bold-text">Languages</span> - HTML5 | CSS3 | JavaScript</div>
                    <div><span className="bold-text">Databases</span> - MSSQL | Firebase</div>
                    <div><span className="bold-text">Framework</span> - React | Bootstrap | Vue</div>
                    <div><span className="bold-text">Dev Methods</span> - Scrum | Waterfall | Prototyping</div>
                    <div><span className="bold-text">Design Tools</span> - Adobe XD | Photoshop | Illustrator</div>
                    <div><span className="bold-text">Other</span> - JSON | AJAX | Node.js | WordPress | Git </div>
                  </div>
                  <div className="skillset-title skillset-title-pad2">Future Roadmap</div>
                  <div className="sub-text">
                    <div>Right now my interest is peaked by:</div>
                    <div>Redux | GraphQL | SASS | TypeScript | React Native</div><br></br>
                    <div>
                      This path is not set in stone and I would like to learn a variety of different web technologies.
                      The Web Development Top-up course should bring a lot of new unexpected challanges and hopefully it's going to bring some interesting changes to the roadmap.
                    </div>
                  </div>
                </div>
              </div>
              <div className="skillset-mobile-bot showcase-margin-top showcase-margin-bot">
                <div className="skillset-cont-mobile">
                  <div className="icon-row">
                    <img src={require("../../assets/icons/HTML.png")} className="icon" />
                    <img src={require("../../assets/icons/AI.png")} className="icon" />
                    <img src={require("../../assets/icons/GIT.png")} className="icon" />
                  </div>
                  <div className="icon-row">
                    <img src={require("../../assets/icons/FB.png")} className="icon" />
                    <img src={require("../../assets/icons/JS.png")} className="icon" />
                    <img src={require("../../assets/icons/NJS.png")} className="icon" />
                  </div>
                  <div className="icon-row">
                    <img src={require("../../assets/icons/REACT.png")} className="icon" />
                    <img src={require("../../assets/icons/CSS.png")} className="icon" />
                    <img src={require("../../assets/icons/PS.png")} className="icon" />
                  </div>
                  <div className="icon-row">
                    <img src={require("../../assets/icons/BS.png")} className="icon" />
                    <img src={require("../../assets/icons/REDUX.png")} className="icon" />
                    <img src={require("../../assets/icons/MSSQL.png")} className="icon" />
                  </div>
                  <div className="icon-row">
                    <img src={require("../../assets/icons/XD.png")} className="icon" />
                    <img src={require("../../assets/icons/GQL.png")} className="icon" />
                    <img src={require("../../assets/icons/SASS.png")} className="icon" />
                  </div>
                </div>
              </div>
            </div>
          </CSSTransition>
        </div>
      )
    }
  }
}

export default Skillset;
