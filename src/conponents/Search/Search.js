import React from 'react';

import './SearchStyle.css';


const Search = ({query, setQuery}) => {

    return (
        <main>
            <input
                className="search"
                type="text"
                placeholder="Search movies..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
        </main>
    );
};

export {Search};