import React, {useState} from 'react';

import './LayoutStyle.css';


const Layout = () => {
    const [countClick, setCountClick] = useState(0);
    const [position, setPosition] =useState({});


    const {lat, lng} = position;

//https://www.openstreetmap.org/#map=16/${lat}/${lang}



    const getPosition = () => {
        setCountClick(prev => prev +1);

        navigator.geolocation.getCurrentPosition(
            (pos) => {
                setPosition({
                    lat: pos.coords.latitude,
                    lng: pos.coords.longitude
                })
            }
        )
    }



    return (
        <main className={'layout'}>
            <div className={'layout-block-btn'}>
                <button onClick={getPosition}>
                    Get my location
                </button>
            </div>

            <p>You GPS position
                <a
                    href={`https://www.openstreetmap.org/#map=16/${lat}/${lng}`}
                    target={'_blank'}
                    rel={'noreferrer'}
                >
                    {lat} {lng}
                </a>
            </p>

            <p>You requestted position {countClick} times</p>


        </main>
    );
};

export {Layout};