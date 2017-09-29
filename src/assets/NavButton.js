import React, { Component } from "react";

export class NavButton extends Component {
  getButton = () => {
    const direction = this.props.direction;
    let button;
    switch (direction) {
      case "Previous": {
        button = <button className="Button_Previous">{direction}</button>;
        break;
      }
      case "Next": {
        button = <button className="Button_Next">{direction}</button>;
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
