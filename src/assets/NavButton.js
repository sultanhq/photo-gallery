import React, { Component } from 'react';

export class NavButton extends Component {

  getButton = () => {
      const direction = this.props.direction
      let button = {}
    if (direction === "Previous") {
      button = <button className="Button" >ads{direction}</button>
    } else {
      button = <button className="Button" >{direction}</button>
    }
    return button
  }

  render ()
  {

      return(
        <div>
          {this.getButton()}
        </div>
      );
  }
};
