import React, { Component } from 'react';

export class NavButton extends Component {
  navigate = e => {
    this.props.navigate(this.props.direction);
  };

  render() {
    const direction = this.props.direction;
    return (
      <button className={direction} onClick={this.navigate}>
        {direction}
      </button>
    );
  }
}
