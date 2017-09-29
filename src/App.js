import React, { Component } from "react";
import logo from "./logo.png";
import "./App.css";
import { ImageTitle } from "./assets/ImageTitle";
import { NavButton } from "./assets/NavButton";
import { ImageView } from "./assets/ImageView";
import { ImageCaption } from "./assets/ImageCaption";
import { ImageGallery } from "./assets/ImageGallery";

class App extends Component {
  constructor() {
    super();
    this.state = {
      img: {
        title: "",
        url: {
          thumb: "",
          full: ""
        },
        caption: ""
      }
    };
  }

  updateView = selectedImage => {
    this.setState({
      img: selectedImage
    });
  };

  navigate = d =>{ // TO ADD
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
          <div className="viewContainer">
            <NavButton direction="Previous" />
            <ImageView url={this.state.img.url.full} />
            <NavButton direction="Next" />
          </div>
          <ImageCaption text={this.state.img.caption} />
          <ImageGallery updateView={this.updateView} />
        </div>
      </div>
    );
  }
}

export default App;
