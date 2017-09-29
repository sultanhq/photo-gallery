import React, { Component } from "react";
import logo from "./logo.png";
import "./App.css";
import { ImageTitle } from "./assets/ImageTitle";
import { NavButton } from "./assets/NavButton";
import { ImageView } from "./assets/ImageView";
import { ImageCaption } from "./assets/ImageCaption";
import { ImageGallery } from "./assets/ImageGallery";
import { getData } from "./assets/ImageSource";

class App extends Component {
  constructor() {
    super();
    this.state = {
      img: {
        id: 0,
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

  navigate = direction => {
    switch (direction) {
      case "Previous": {
        const images = getData();
        let nextId = this.state.img.id - 2;
        nextId < 0 ? (nextId = images.length - 1) : nextId;
        let nextImage = images[nextId];
        this.setState({
          img: nextImage
        });
        break;
      }
      case "Next": {
        const images = getData();
        let nextId = this.state.img.id;
        nextId >= images.length ? (nextId = 0) : nextId;
        let nextImage = images[nextId];
        this.setState({
          img: nextImage
        });
        break;
      }
      default:
        break;
    }
  };

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
            <NavButton direction="Previous" navigate={this.navigate} />
            <ImageView url={this.state.img.url.full} />
            <NavButton direction="Next" navigate={this.navigate} />
          </div>
          <ImageCaption text={this.state.img.caption} />
          <ImageGallery updateView={this.updateView} />
        </div>
      </div>
    );
  }
}

export default App;
