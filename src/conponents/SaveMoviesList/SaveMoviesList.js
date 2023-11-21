import React, {useState} from 'react';

import {Box} from "../Box/Box";
import {SingleMovie} from "../SingleMovie/SingleMovie";
import {WatchedSummary} from "../WatchedSummary/WatchedSummary";


const SaveMoviesList = (props) => {
    const {watchedFilms, setWatchedFilms, singleMovie, setSingleMovie} = props;
    const [userRating, setUserRating] = useState(0);


    return (
        <main className={'list'}>
            <Box>
                {singleMovie ?
                    <SingleMovie
                        singleMovie={singleMovie}
                        setSingleMovie={setSingleMovie}
                        watchedFilms={watchedFilms}
                        setWatchedFilms={setWatchedFilms}
                        userRating={userRating}
                        setUserRating={setUserRating}
                    /> :
                    <section className={'flex-direction width'}>
                        <WatchedSummary
                            watchedFilms={watchedFilms}
                        />

                        <div>list</div>
                    </section>
                }
            </Box>
        </main>
    );
};

export {SaveMoviesList};