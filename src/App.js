import React, { Component } from "react";
import logo from "./logo.png";
import "./App.css";
import {ImageTitle} from "./assets/ImageTitle";
import {NavButton} from "./assets/NavButton";
import {ImageView} from "./assets/ImageView";
import {ImageCaption} from "./assets/ImageCaption";
import {ImageGallery} from "./assets/ImageGallery";

class App extends Component {
  constructor() {
    super();
    this.state = {
      img: {
        title: "Image title",
        url: "url",
        caption: "caption"
      },
    };
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Image Gallery</h2>
        </div>
        <div className="Gallery">
          <ImageTitle text={this.state.img.title} />
          <NavButton Direction="Previous" />
            <ImageView url={this.state.img.url} />
          <NavButton Direction="Next" />
          <ImageCaption text={this.state.img.caption} />
          <ImageGallery />

        </div>
      </div>
    );
  }
}

export default App;
