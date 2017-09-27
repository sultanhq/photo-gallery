import React, { Component } from 'react';

export class ImageView extends Component {

  render ()
  {
      const url = this.props.url
      return(
        <div className="Image">{url}</div>
      );
  }
};
