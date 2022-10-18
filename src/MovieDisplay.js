import {useState} from 'react';
import MovieItem from "./MovieItem";

function MovieDisplay(props) {
    const {movieList} = props;
    return (
        <div>
            {movieList.map((movie) => {
                return <MovieItem movie={movie}/>
            })}
        </div>
    )
}

export default MovieDisplay;