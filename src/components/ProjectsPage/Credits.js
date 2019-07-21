import React, { Component } from 'react';
import ListItem from './ListItem';

class Credits extends Component {

  render () {
    if(this.props.credits.length > 0){
      return(
        <div className="row showcase-padding showcase-margin-bot">
          <div className="col">
            <div className="bold-text">Credits</div><br></br>
            <div>
              { this.props.credits.map((Item, index) =>
                <ListItem Item={Item} key={index}/>
              )}
            </div>
          </div>
        </div>
      )
    } else {
      return null
    }

  }
}

export default Credits;
