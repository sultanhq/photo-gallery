import React, { Component } from 'react';

export class ImageCaption extends Component {

  render ()
  {
      const text = this.props.text
      return(
        <div className="Caption">{text}</div>
      );
  }
};
