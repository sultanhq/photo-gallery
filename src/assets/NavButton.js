import React, { Component } from "react";

export class NavButton extends Component {

  navigate = (e) =>{
    this.props.navigate(this.props.direction)
  }

  getButton = () => {
    const direction = this.props.direction;
    let button;
    switch (direction) {
      case "Previous": {
        button = <button className="Button_Previous" onClick={this.navigate}>{direction}</button>;
        break;
      }
      case "Next": {
        button = <button className="Button_Next" onClick={this.navigate}>{direction}</button>;
        break;
      }
      default: break;
    }
    return button;
  };

  render() {
    return <div>{this.getButton()}</div>;
  }
}
