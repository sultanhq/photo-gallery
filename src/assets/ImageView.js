import React, { Component } from "react";

export class ImageView extends Component {
  render() {
    const url = this.props.url;
    const photo = (
      <img alt="" src={url}/>
    );
    return <div className="Image">{photo}</div>;
  }
}
