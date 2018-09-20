import React, { Component } from 'react';
import Movie from './Movie';

const movies = [
  "Matrix",
  "Star Wars",
  "Search"
]

const movieImages = [
"https://cdn3.movieweb.com/i/article/gIdrZFTvO1nsC16dRaTBMOzqaabBjj/798:50/The-Matrix-4-Reboot-Plot-Keanu-Reeves.jpg",
"https://lumiere-a.akamaihd.net/v1/images/star-wars-stacked-tall_0b1bb1c0.jpeg?region=0%2C0%2C1536%2C864&width=320",
"https://cdn1.thr.com/sites/default/files/imagecache/scale_crop_768_433/2018/01/18198_search_still1_johncho_byjuansebastianbaron_-_h_2018.jpg",
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <Movie title={movies[0]} poster={movieImages[0]} />
        <Movie title={movies[1]} poster={movieImages[1]}/>
        <Movie title={movies[2]} poster={movieImages[2]}/>
      </div>
    );
  }
}

export default App;
