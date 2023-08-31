import React from 'react';
import {Outlet} from 'react-router-dom';
import {Header} from "../components";



const Layout = () => {

    return (
        <div className={'layout'}>
            <Header/>

            <Outlet/>
        </div>
    );
};

export {Layout};