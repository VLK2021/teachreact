import React, {useEffect, useState} from 'react';

import './LayoutStyle.css';
import {Logo, NumResult, Search} from "../conponents";
import {movieService} from "../services";


const Layout = () => {
    const [query, setQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [totalResults, setTotalResults] = useState(0);

    useEffect(() => {
        if (!query) {
            setMovies([]);
            setTotalResults(0);
        } else {
            movieService.getAll(query).then(value => {
                setMovies(value.results);
                setTotalResults(value?.total_results);
            });
        }
    }, [query]);

    return (
        <main className={'layout width'}>
            <header className={'header width flex'}>
                <Logo/>

                <Search
                    setQuery={setQuery}
                    query={query}
                />

                <NumResult totalResults={totalResults}/>
            </header>

            <main className={'main width flex'}>
                <section className={'main-list'}>

                </section>

                <section className={'main-info'}>

                </section>
            </main>
        </main>
    );
};

export {Layout};