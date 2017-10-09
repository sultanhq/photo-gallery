import React, { Component } from 'react';
import { getData } from './ImageSource';
import { Thumb } from './Thumb';

export class ImageGallery extends Component {
  updateView = e => {
    this.props.updateView(e);
  };

  render() {
    const images = getData();
    const imageThumbnails = Object.values(images).map((image, index) => (
      <Thumb key={index} image={image} updateView={this.updateView} />
    ));
    return <div className="Gallery">{imageThumbnails}</div>;
  }
}
