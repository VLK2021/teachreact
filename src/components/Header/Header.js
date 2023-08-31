import React from 'react';
import {useNavigate} from 'react-router-dom';

import './HeaderStyle.css';


const Header = () => {
    const navigate = useNavigate();


    return (
        <div className={'header'}>
            <div className={'btn-block'}>
                <button onClick={() => navigate('/login')}>Login</button>
                <button onClick={() => navigate('/register')}>Register</button>
            </div>
        </div>
    );
};

export {Header};