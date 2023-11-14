import React from 'react';

import './ButtonStyle.css';


const Button = ({children, onClick}) => {

    return (
        <button className={'button'} onClick={onClick}>
            {children}
        </button>
    );
};

export {Button};