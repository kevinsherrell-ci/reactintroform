import logo from './logo.svg';
import './App.css';
import MovieForm from "./MovieForm";
import {useState} from 'react';
import MovieDisplay from "./MovieDisplay";

function App() {

    const [movieList, setMovieList] = useState([]);
    console.log(movieList);
    const handleAddMovie = (newMovie) => {
        setMovieList([...movieList, newMovie]);

    }
    return (
        <div className="App App-header">
            <MovieForm handleAddMovie={handleAddMovie}/>
            <MovieDisplay movieList={movieList}/>
        </div>
    );
}

export default App;
