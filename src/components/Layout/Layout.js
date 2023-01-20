import React from 'react';
import {NavLink, Outlet} from "react-router-dom";

import './LayoutStyle.css';


const Layout = () => {

    return (
        <div className={'layout'}>

            <div className="layout-header">
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/users'}>Users</NavLink>
                <NavLink to={'/posts'}>Posts</NavLink>
                <NavLink to={'/comments'}>Comments</NavLink>
            </div>


            <div className={'outlet'}>
                <Outlet/>
            </div>

        </div>
    );
};

export default Layout;