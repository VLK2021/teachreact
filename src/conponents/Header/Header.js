import React from 'react';

import './HeaderStyle.css';
import {Logo} from "../Logo/Logo";
import {Search} from "../Search/Search";
import {NumResult} from "../NumResult/NumResult";


const Header = ({query, setQuery, totalResults}) => {
    return (
        <header className={'header width flex'}>
            <Logo/>

            <Search
                setQuery={setQuery}
                query={query}
            />

            <NumResult totalResults={totalResults}/>
        </header>
    );
};

export {Header};