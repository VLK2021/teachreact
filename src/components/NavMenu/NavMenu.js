import React from 'react';
import {NavLink} from "react-router-dom";

import styles from './NavMenu.module.css';


const NavMenu = () => {
    return (
        <ul>
            <li>
                <NavLink to={'/users'}>users</NavLink>
            </li>
            <li>
                <NavLink to={'/posts'}>posts</NavLink>
            </li>
            <li>
                <NavLink to={'/comments'}>comments</NavLink>
            </li>
        </ul>
    );
};

export default NavMenu;