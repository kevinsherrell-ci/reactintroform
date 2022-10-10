import {useState} from 'react';
function MovieForm(props){
    const [title, setTitle] = useState("");
    const [director, setDirector] = useState("");
    const [actors, setActors]= useState('');
    const [plot, setPlot]= useState('');
    const [year, setYear]= useState(0);
    const [starRating, setStartRating]= useState(0);
    console.log(title);
    return (
        <div>
            <label htmlFor="">Title:</label>
            <input type="text" onChange={(e)=> setTitle(e.target.value)}/>
            <p>Current Title: {title}</p>
            <label htmlFor="">Director:</label>
            <input type="text" onChange={(e)=> setDirector(e.target.value)}/>
            <p>Director: {director}</p>
            <label htmlFor="">Actors:</label>
            <input type="text" onChange={(e)=> setActors(e.target.value)}/>
            <p>Current Actors: {actors}</p>
            <label htmlFor="">plot:</label>
            <input type="text" onChange={(e)=> setPlot(e.target.value)}/>
            <p>Current Plot: {plot}</p>
            <label htmlFor="">Year:</label>
            <input type="number" onChange={(e)=> setYear(e.target.value)}/>
            <p>Current Year: {year}</p>
            <label htmlFor="">Star Rating:</label>
            <input type="number" step={"0.1"} onChange={(e)=> setStartRating(e.target.value)}/>
            <p>Current Star Rating: {starRating}</p>
        </div>
    )
}

export default MovieForm;