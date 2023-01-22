import React from 'react';
import {NavLink, Outlet, useNavigate} from "react-router-dom";

import './LayoutStyle.css';
import {useAuth} from "../../hooks/useAuth";


const Layout = () => {

    const {logOut} = useAuth();
    const navigate = useNavigate();

    const logout = () => {
        logOut(() => navigate('/', {replace: true}));
    }

    return (
        <div className={'layout'}>

            <div className="layout-header">
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/users'}>Users</NavLink>
                <NavLink to={'/posts'}>Posts</NavLink>
                <NavLink to={'/comments'}>Comments</NavLink>
                <button onClick={logout}>Logout</button>
            </div>


            <div className={'outlet'}>
                <Outlet/>
            </div>

        </div>
    );
};

export default Layout;