import React from 'react';

import './MoviesListStyle.css';
import {Box} from "../Box/Box";
import {MovieCard} from "../MovieCard/MovieCard";


const MoviesList = (props) => {
    const {movies, setMovies, setSingleMovie} = props;

    const showMore = async () => {
    }


    return (
        <main className={'list'}>
            <Box>
                {
                    movies && movies.map(obj => <MovieCard key={obj.id}
                                                           obg={obj}
                                                           setSingleMovie={setSingleMovie}
                    />)
                }

                {movies.length > 0 ?
                    <div className={'flex'}>
                        <button className={'movieList-btn'} onClick={showMore}>
                            show me more
                        </button>
                    </div> : <p className={'flex'}>write what you want search</p>
                }
            </Box>
        </main>
    );
};

export {MoviesList};