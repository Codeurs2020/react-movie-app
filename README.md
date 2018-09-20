# React Movie App
 A simple react project for studying.

Project exapmes are from Nomad Coder's

# Summary

## Install and init
Set the Project with `create-react-app` (a.k.a CRA)

`npx create-react-app movie-app`

Remove unuse things except following code in `App.js` file

`App.js` :
```javascript
import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello, React!</h1>
      </div>
    );
  }
}

export default App;
```

## Add Component
Create `Movies.jsx` file to make Movie component
```javascript
import React, { Component } from 'react';

class Movie extends Component {
    render() {
        return (
            <div>
                <h1> This is Movie! </h1>
            </div>
        )
    }
}
export default Movie;
```
And add `<Movie>` component to `App.js`
```javascript
import Movie from './Movie';  // import Movie Component

class App extends Component {
  render() {
    return (
      <div className="App">
        <Movie />  <!-- Add Movie Component -->
      </div>
    );
  }
}
```

## Add Props
App :
```javascript
const movieTItle = ['Matrix', 'Avengers'];

class App extends Component {
  render() {
    return (
      <div className="App">
        <Movie title={movieTitles[0]} />
        <Movie title={movieTitles[1]} />
      </div>
    );
  }
}
```
Component :
```javascript
class Movie extends Component {
    render() {
        return (
            <div>
                <h1> {this.props.title} </h1>
            </div>
        )
    }
}
```

## Add Props as a list
App :
```javascript
class App extends Component {
  render() {
    return (
      <div className="App">
        {movies.map((movie, index) => {
          return <Movie title={movie.title} poster={movie.poster} key={index}/>
        })}
      </div>
    );
  }
}

```

## Give props a propType
Prop types can be checked by `propType` in React

But `React.propTypes` is deprecated after React 16

So, you need to install prop-types package

` > npm i prop-types -save`

```json
 "dependencies": {
    "prop-types": "^15.6.2"
  }
```

```javascript
import PropTypes from 'prop-types'; // add package

class Movie extends Component {
    static propTypes = {
            title: propTypes.string,
            poster: propTypes.string
    }
    render (...)
}
```
`propTypes` also can check if the prop is or not.

```javascript
class Movie extends Component {
    static propTypes = {
            title: propTypes.string.isRequired, // title prop must be required
            poster: propTypes.string            // poster prop is optional
    }
    render (...)
}
```

