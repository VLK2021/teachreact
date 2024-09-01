import React from 'react';
import {Outlet} from "react-router-dom";

import styles from './Layout.module.css';
import Header from "../components/Header/Header";


const Layout = () => {

    return (
        <main className={styles.wrap}>
            <section className={styles.header}>
                <Header/>
            </section>

            <section className={styles.outlet}>
                <Outlet/>
            </section>
        </main>
    );
};

export default Layout;