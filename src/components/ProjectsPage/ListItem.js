import React, { Component } from 'react';

class ListItem extends Component {

  render () {
    return(
      <div className="sub-text">
        {this.props.Item.item}
      </div>
    )
  }
}

export default ListItem;
