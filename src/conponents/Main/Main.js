import React, {useState} from 'react';

import './MainStyle.css';
import {MoviesList} from "../MoviesList/MoviesList";
import {SaveMoviesList} from "../SaveMoviesList/SaveMoviesList";


const Main = (props) => {
    const {movies, setMovies, setPage, page} = props;
    const [watchedFilms, setWatchedFilms] = useState([]);
    const [singleMovie, setSingleMovie] = useState();

    console.log(watchedFilms);


    return (
        <main className={'main width flex'}>
            <MoviesList
                movies={movies}
                setMovies={setMovies}
                setSingleMovie={setSingleMovie}
                setPage={setPage}
                page={page}
            />

            <SaveMoviesList
                watchedFilms={watchedFilms}
                setWatchedFilms={setWatchedFilms}
                singleMovie={singleMovie}
                setSingleMovie={setSingleMovie}
            />
        </main>
    );
};

export {Main};