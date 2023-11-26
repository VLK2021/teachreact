import React, {useState} from 'react';

import './BoxForTextStyle.css';


const BoxForText = ({children}) => {
    const [show, setShow] = useState(false);


    const text = show ? children
        : children.split(' ').slice(0, 8).join(' ') + '...';


    return (
        <div className={'boxForText'}>
            <span>{text}</span>

            <button onClick={() => setShow(prev => !prev)}>
                {show ? 'Show less' : 'show more'}
            </button>
        </div>
    );
};

export {BoxForText};