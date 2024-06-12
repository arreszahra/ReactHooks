import React, { useState } from 'react';
import Movies from './data';
import MovieCard from './MovieCard';
import AddMovie from './Add';


const  MovieList = ()=>{
const [movies,setMovies]=useState(Movies)
const handleAddMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
};
 return( 
    <div>
        <AddMovie onAddMovie={handleAddMovie}/>
    <div>
        {movies.map((Movie, index)=>(<MovieCard key={index} {...Movie}/>))}
      
    </div>
    </div>
    )
 
 }


export default MovieList;
