import React from 'react';

import './MoviesListStyle.css';
import {Box} from "../Box/Box";
import {MovieCard} from "../MovieCard/MovieCard";


const MoviesList = (props) => {
    const {movies, setMovies, setSingleMovie, setPage, page} = props;

    const next = async () => {
        setPage(page + 1);
    }

    const prev = async () => {
        if (page > 1) {
        setPage(page - 1);
        }
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
                    <div className={'flex width'}>
                        <button className={'movieList-btn'} onClick={prev}>
                            prev
                        </button>

                        <span>Page {page>0 ? page : 1}</span>

                        <button className={'movieList-btn'} onClick={next}>
                            next
                        </button>
                    </div> : <p className={'flex'}>write what you want search</p>
                }
            </Box>
        </main>
    );
};

export {MoviesList};