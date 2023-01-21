import React from 'react';
import {Link} from "react-router-dom";

import './UserStyle.css';


const User = ({user}) => {
    const {id, name} = user;

    return (
        <div className={'user'}>
            <Link to={id.toString()} state={user}>{id}) - {name}</Link>
        </div>
    );
};

export default User;