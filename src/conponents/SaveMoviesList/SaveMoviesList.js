import React, {useState} from 'react';

import {Box} from "../Box/Box";
import {SingleMovie} from "../SingleMovie/SingleMovie";
import {WatchedSummary} from "../WatchedSummary/WatchedSummary";
import {MovieCardInMyList} from "../MovieCardInMyList/MovieCardInMyList";


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

                        <div className={'width flex-direction'}>
                            {
                                watchedFilms.length > 0 &&
                                    watchedFilms.map(obj => <MovieCardInMyList key={obj.id}
                                                                               obj={obj}
                                                                               watchedFilms={watchedFilms}
                                                                               setWatchedFilms={setWatchedFilms}
                                    />)
                            }
                        </div>
                    </section>
                }
            </Box>
        </main>
    );
};

export {SaveMoviesList};