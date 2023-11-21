import React, {useEffect, useState} from 'react';

import './WatchedSummaryStyle.css';


const WatchedSummary = (props) => {
    const {watchedFilms} = props;

    const [apiResult, setApiResult] = useState(0);
    const [myResult, setMyResult] = useState(0);


    useEffect(() => {
        const totalApiResult = watchedFilms.reduce((sum, obj) => sum + obj.vote_average, 0);
        const totalMyResult = watchedFilms.reduce((sum, obj) => sum + obj.userRating, 0);
        setApiResult(parseFloat((totalApiResult/watchedFilms.length).toFixed(2)));
        setMyResult(parseFloat((totalMyResult/watchedFilms.length).toFixed(2)));
    }, [watchedFilms]);


    return (
        <main className={'watchedSummary width flex-direction'}>
            <h2>Movies you watched</h2>

            <div className={'flex width watchedSummary-info-block'}>
                <p>
                    <span>#️⃣ </span>
                    <span>{watchedFilms.length} movies</span>
                </p>
                <p>
                    <span>⭐️</span>
                    <span>{apiResult ? apiResult : 0}</span>
                </p>
                <p>
                    <span>🌟</span>
                    <span>{myResult ? myResult : 0}</span>
                </p>
            </div>
        </main>
    );
};

export {WatchedSummary};