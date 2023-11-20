import React from 'react';

import './WatchedSummaryStyle.css';


const WatchedSummary = (props) => {
    const {watchedFilms} = props;


    return (
        <main className={'watchedSummary width flex-direction'}>
            <h2>Movies you watched</h2>

            <div className={'flex width watchedSummary-info-block'}>
                <p>
                    <span>#️⃣</span>
                    <span>{watchedFilms.length} movies</span>
                </p>
                <p>
                    <span>⭐️</span>
                    <span>{'yyyyyyyyy'}</span>
                </p>
                <p>
                    <span>🌟</span>
                    <span>{'hhhhhhh'}</span>
                </p>
            </div>
        </main>
    );
};

export {WatchedSummary};