import React, { Component } from "react";
import { getThumbnails } from "./ImageSource";

export class ImageGallery extends Component {
  render() {
    return (
      <div className="Gallery">
        {getThumbnails().map(image => {
          return <img key={image.id} alt="" src={image.url} />;
        })}
      </div>
    );
  }
}
