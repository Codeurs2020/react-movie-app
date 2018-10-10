import React, { Component } from 'react';
import Movie from './Movie';

class App extends Component {

  state = {}

  componentDidMount() {
    this._getMovies()
  }

  _renderMovies = () => {
    const movies = this.state.movies.map((movie) => {
      return <Movie title={movie.title}
                    poster={movie.poster}
                    genres={movie.genres}
                    desc={movie.desc}
                    key={movie.id}/>
    })
    return movies;
  }

   _getMovies = async () =>  {
    // await : waits to finish of function
    const movies = await this._callApi() // call a function on a await mode
    this.setState({ // only going to happen after callApi()
      movies
    })
  }

  _callApi = () => {
    return fetch('https://jsonplaceholder.typicode.com/photos')
    .then(res => res.json())
    .then(json => {
      let data = []

      for(let i = 0; i< 10; i++){
        data.push({
          'title': json[i].title,
          'poster': json[i].thumbnailUrl,
          'genres': ['Action','SF'],
          'desc': 'blah blah blah story is cool blah blah blah story is cool'
                  +'blah blah blah story is cool blah blah blah story is cool'
                  +'blah blah blah story is cool blah blah blah story is cool'
                  +'blah blah blah story is cool blah blah blah story is cool',
          'id': json[i].id
        });
      }
      return data
    })
    .catch(err => console.log(err))
  }

  render() {
    const { movies } = this.state
    return (
      <div className={movies ? "App" : "App--loading"}>
        { this.state.movies ? this._renderMovies() : 'Loading' }
      </div>
    );
  }
}

export default App;
