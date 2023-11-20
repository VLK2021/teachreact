import React from 'react';

import './MovieCardStyle.css';
import {IMG_URL} from "../../constants";
import imgForFilm from '../../images/fotoFilm.jpg';
import {movieService} from "../../services";


const MovieCard = (props) => {
    const {obg, setSingleMovie} = props;
    const {id, original_title, poster_path, release_date} = obg;

    const showSingleMovie = async (id) => {
        await movieService.getById(id).then(value => setSingleMovie(value));
    }


    return (
        <main className={'movieCard flex width'} onClick={() => showSingleMovie(id)}>

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