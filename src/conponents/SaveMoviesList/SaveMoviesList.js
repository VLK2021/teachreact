import React from 'react';

import {Box} from "../Box/Box";
import {SingleMovie} from "../SingleMovie/SingleMovie";
import {WatchedSummary} from "../WatchedSummary/WatchedSummary";


const SaveMoviesList = (props) => {
    const {watchedFilms, singleMovie, setSingleMovie} = props;


    return (
        <main className={'list'}>
            <Box>
                {singleMovie ?
                    <SingleMovie
                        singleMovie={singleMovie}
                        setSingleMovie={setSingleMovie}
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