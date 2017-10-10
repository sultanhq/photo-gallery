import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import { ImageTitle } from './assets/ImageTitle';
import { NavButton } from './assets/NavButton';
import { ImageView } from './assets/ImageView';
import { ImageCaption } from './assets/ImageCaption';
import { ImageGallery } from './assets/ImageGallery';
import { getData } from './assets/ImageSource';

class App extends Component {
  constructor() {
    super();
    this.state = {
      img: {
        id: 0,
        title: 'No Images Uploaded',
        url: {
          thumb: '',
          full: '',
        },
        caption: 'Sad cat face',
      },
    };
  }

  updateView = selectedImage => {
    this.setState({
      img: selectedImage,
    });
  };

  navigate = direction => {
    const images = getData();

    if (images.length > 0) {
      let nextId;

      switch (direction) {
        case 'Previous': {
          nextId = this.state.img.id - 1;
          nextId < 0 ? (nextId = images.length - 1) : nextId;
          break;
        }
        case 'Next': {
          nextId = this.state.img.id + 1;
          nextId >= images.length ? (nextId = 0) : nextId;
          break;
        }
        default:
          break;
      }

      this.updateView(images[nextId]);
    }
  };

  _handleKeyDown = event => {
    switch (event.key) {
      case 'ArrowRight': {
        this.navigate('Next');
        break;
      }
      case 'ArrowLeft': {
        this.navigate('Previous');
        break;
      }
      default:
        break;
    }
  };

  componentWillMount() {
    document.addEventListener('keydown', this._handleKeyDown.bind(this));
  }
  componentDidMount() {
    const images = getData();
    if (images.length > 0) {
      this.setState({
        img: this.getRandomImage(images),
      });
    }
  }

  getRandomImage(images) {
    return images[Math.floor(Math.random() * images.length)];
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this._handleKeyDown.bind(this));
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Image Gallery</h2>
        </div>
        <div className="Image-Gallery">
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
