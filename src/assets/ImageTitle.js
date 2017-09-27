import React, { Component } from 'react';

export class ImageTitle extends Component {

  render ()
  {
      const text = this.props.text
      return(
        <div className="Title">{text}</div>
      );
  }
};
