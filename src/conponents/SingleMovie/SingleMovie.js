import React from 'react';

import './SingleMovieStyle.css';
import {IMG_URL} from "../../constants";
import imgForFilm from "../../images/fotoFilm.jpg";


const SingleMovie = (props) => {
    const {singleMovie, setSingleMovie} = props;
    console.log(singleMovie);

    const {
        id,
        backdrop_path,
        belongs_to_collection,
        budget,
        genres,
        homepage,
        original_language,
        original_title,
        overview,
        popularity,
        poster_path,
        production_companies,
        production_countries,
        release_date,
        revenue,
        spoken_languages,
        vote_average,
        vote_count,
        title
    } = singleMovie;

    const goBack = () => {
        setSingleMovie(null);
    }


    return (
        <main className={'singleMovie width flex-direction'}>

            <button className={'singleMovie-back-btn'} onClick={goBack}>-</button>

            <section className={'singleMovie-img-block width flex'}>

                <div className={'singleMovie-img-block-img'}>
                    <img src={poster_path ? IMG_URL + poster_path : imgForFilm} alt="poster"/>
                </div>

                <div className={'singleMovie-img-info-block flex-direction'}>
                    <h1>{original_title}</h1>
                    <p>{release_date}</p>

                    <p>
                        <span>⭐️</span>
                        {vote_average} TMDb rating
                    </p>
                </div>

            </section>

            <section className={'singleMovie-rating-block flex'}>
                block rating
            </section>

            <section className={'singleMovie-info-block flex width'}>
                {overview}
            </section>
        </main>
    );
};

export {SingleMovie};