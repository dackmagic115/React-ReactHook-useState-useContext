import React , { useState , useContext} from 'react'
import Movie from './Movie'
import { MovieContext } from './MovieContext'
const Movielist = () => {
    const [movies , setmovies] = useContext(MovieContext)
    return (
        <div>
            {movies.map(movie => (
                <Movie key={movie.id} name={movie.name} price={movie.price}/>
            ))}
        </div>
    )
}

export default Movielist
