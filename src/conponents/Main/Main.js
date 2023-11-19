import React, {useState} from 'react';

import './MainStyle.css';
import {MoviesList} from "../MoviesList/MoviesList";
import {SaveMoviesList} from "../SaveMoviesList/SaveMoviesList";


const Main = (props) => {
    const {movies, setMovies} = props;
    const [watchedFilms, setWatchedFilms] = useState([]);

    return (
        <main className={'main width flex'}>
            <MoviesList
                movies={movies}
                setMovies={setMovies}
                setWatchedFilms={setWatchedFilms}
                watchedFilms={watchedFilms}
            />

            <SaveMoviesList/>
        </main>
    );
};

export {Main};