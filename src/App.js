import React, { Component } from 'react';
import Movie from './Movie';

class App extends Component {
  state = {
  }

  componentWillMount() { // deprecated v16.3
    console.log('will mount');

  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        movies: [
            {
              title : "Matrix",
              poster: "https://cdn3.movieweb.com/i/article/gIdrZFTvO1nsC16dRaTBMOzqaabBjj/798:50/The-Matrix-4-Reboot-Plot-Keanu-Reeves.jpg"
            },
            {
              title: "Star Wars",
              poster: "https://lumiere-a.akamaihd.net/v1/images/star-wars-stacked-tall_0b1bb1c0.jpeg?region=0%2C0%2C1536%2C864&width=320"
            },
            {
              title: "Search",
              poster: "https://cdn1.thr.com/sites/default/files/imagecache/scale_crop_768_433/2018/01/18198_search_still1_johncho_byjuansebastianbaron_-_h_2018.jpg"
            },
            {
              title: 'coco',
              poster: 'https://lumiere-a.akamaihd.net/v1/images/au_movie_poster_coco_1_50f85f97.jpeg?region=0%2C0%2C300%2C450'
            }
        ]
      })
    }, 1000)
  }

  _renderMovies = () => {
    const movies = this.state.movies.map((movie, index) => {
      return <Movie title={movie.title} poster={movie.poster} key={index}/>
    })
    return movies;
  }
  render() {
    console.log('did rendered');
    return (
      <div className="App">
        { this.state.movies ? this._renderMovies() : 'Loading' }
      </div>
    );
  }
}

export default App;
