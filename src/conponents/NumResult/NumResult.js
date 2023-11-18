import React from 'react';

import './NumResultStyle.css';


const NumResult = ({totalResults}) => {
    return (
        <main className="numResult">
            Found <strong>{totalResults}</strong> results
        </main>
    );
};

export {NumResult};