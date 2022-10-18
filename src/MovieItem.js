import {useState} from 'react';

function MovieItem(props){
    const {movie} = props;
    return(
        <div>
            <h2>Title: {movie.title}</h2>
            <p>Director: {movie.director}</p>
            <p>Actors: {movie.actors}</p>
            <p>Plot: {movie.plot}</p>
            <p>Year: {movie.year}</p>
            <p>Star Rating: {movie.starRating}</p>
        </div>
    )
}
export default MovieItem;