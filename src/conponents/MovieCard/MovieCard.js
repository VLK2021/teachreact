import React from 'react';

import './MovieCardStyle.css';
import {IMG_URL} from "../../constants";
import imgForFilm from '../../images/fotoFilm.jpg';


const MovieCard = (props) => {
    const {obg, movies, setWatchedFilms, watchedFilms} = props;
    const {id, original_title, poster_path, release_date} = obg;

    const addMovie = (id) => {
        const movie = movies.filter(mov => mov.id === id);
        setWatchedFilms([...watchedFilms, movie[0]]);
    }


    return (
        <main className={'movieCard flex width'} onClick={() => addMovie(id)}>

            <section className={'movieCard-img-block flex'}>
                <img src={poster_path ? IMG_URL + poster_path : imgForFilm} alt="poster"/>
            </section>

            <section className={'movieCard-info-block flex-direction'}>
                <h1>{original_title}</h1>

                <p>
                    {release_date}
                </p>
            </section>

        </main>
    );
};

export {MovieCard};