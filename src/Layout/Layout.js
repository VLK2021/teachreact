import React, {useState} from 'react';

import './LayoutStyle.css';


const Layout = () => {
    const [countClick, setCountClick] = useState(0);
    const [position, setPosition] =useState({lat: null, lng: null });
    const [error, setError] = useState(null);


    const {lat, lng} = position;


    const getPosition = () => {
        setCountClick((prev) => prev +1);

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setPosition({
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    });
                    setError(null);
                },
                (error) => {
                    console.error('Error getting location:', error);
                    setError('Error getting location. Please try again.');
                }
            );
        } else {
            console.error('Geolocation is not supported by this browser.');
            setError('Geolocation is not supported by this browser.');
        }
    }


    return (
        <main className={'layout'}>
            <div className={'layout-block-btn'}>
                <button onClick={getPosition}>Get my location</button>
            </div>

            {lat && lng && (
                <p>
                    Your GPS position{' '}
                    <a
                        href={`https://www.openstreetmap.org/#map=18/${lat}/${lng}`}
                        target={'_blank'}
                        rel={'noreferrer'}
                    >
                        {lat}, {lng}
                    </a>
                </p>
            )}

            {error && <p>{error}</p>}

            <p>You requested position {countClick} times</p>
        </main>
    );
};

export {Layout};