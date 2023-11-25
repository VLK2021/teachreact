import React, {useEffect, useState} from 'react';

import './LayoutStyle.css';
import {movieService} from "../services";
import {Header, Main} from "../conponents";


const Layout = () => {
    const [query, setQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [totalResults, setTotalResults] = useState(0);
    
    const[page, setPage] = useState(1);

    

    useEffect(() => {
        if (!query) {
            setMovies([]);
            setTotalResults(0);
        } else {
            movieService.getAll(query, page).then(value => {
                setMovies(value.results);
                setTotalResults(value?.total_results);
            },
                error => {
                    console.error('Error fetching movies:', error);
                });
        }
    }, [page, query]);



    return (
        <main className={'layout width'}>
            <Header
                query={query}
                setQuery={setQuery}
                totalResults={totalResults}
            />

            <Main
                movies={movies}
                setMovies={setMovies}
                setPage={setPage}
                page={page}
            />
        </main>
    );
};

export {Layout};