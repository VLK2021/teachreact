import React from 'react';

import styles from './Layout.module.css';
import Header from "../components/Header/Header";
import {Outlet} from "react-router-dom";


const Layout = () => {


    return (
        <main className={styles.wrap}>
            <Header/>

            <section>
                <Outlet/>
            </section>
        </main>
    );
};

export default Layout;