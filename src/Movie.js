import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

function Movie ({title, poster}){
    return (
            <div>
                <h1> {title} </h1>
                <MoviePoster poster={poster}/>
            </div>
        )
}

Movie.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
}

function MoviePoster({ poster }){
    return (
        <img src={poster} alt="Movie Poster"/>
    )
}

MoviePoster.propTypes = {
    poster: PropTypes.string.isRequired
}

export default Movie;