import Navbar from "../../components/navbar/navbar";
import {useEffect, useState} from "react";
import API from "../../api/api";
import Filter from "../../components/filter/filter";
import MovieList from "../../components/movielist/movielist";

const Movie = () => {
    const [movies, setMovies] = useState([])
    useEffect(() => {
        API.get ('/all')
        .then (res => {
            setMovies(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])
    return (
        <>
            <Navbar/>
            <Filter movies={movies} setMovies={setMovies} moviesList={movies}/>
            <MovieList moviesprops={movies}/>
        </>
    );
}

export default Movie;

