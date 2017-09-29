import React, { Component } from "react";

export class Thumb extends Component {
  imageSelected = () => {
    let e = this.props.image
    this.props.updateView(e)
  }

  render() {
    const image = this.props.image;
    const thumb = (
      <img
        key={image.id}
        alt={image.title}
        title={image.title}
        src={image.url.thumb}
        onClick={this.imageSelected}
      />
    );
    return <div className="Thumb"> { thumb } </div>;
  }
}
