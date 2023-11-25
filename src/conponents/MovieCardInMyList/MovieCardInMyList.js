import React from 'react';

import './MovieCardInMyListStyle.css';
import {IMG_URL} from "../../constants";
import imgForFilm from "../../images/fotoFilm.jpg";


const MovieCardInMyList = (props) => {
    const {
        obj: {id, original_title, poster_path, release_date, userRating, vote_average},
        watchedFilms, setWatchedFilms
    } = props;

    const del = () => {
        const delObj = watchedFilms.filter(one => one.id !== id);
        setWatchedFilms(delObj);
    }


    return (
        <main className={'movieCardInMyList flex width'}>
            <section className={'movieCardInMyList-img-block flex'}>
                <img src={poster_path ? IMG_URL + poster_path : imgForFilm} alt="poster"/>
            </section>

            <section className={'movieCardInMyList-info-block flex-direction'}>
                <span className={'delete'} onClick={del}>X</span>

                <h1>{original_title}</h1>

                <p>
                    {release_date}
                </p>

                <div className={'flex width movieCardInMyList-info-block-rat'}>
                    <p>
                        <span>API Rating⭐️</span>
                        <span>{vote_average ? vote_average : 0}</span>
                    </p>
                    <p>
                        <span>My rating 🌟</span>
                        <span>{userRating ? userRating : 0}</span>
                    </p>
                </div>
            </section>
        </main>
    );
};

export {MovieCardInMyList};