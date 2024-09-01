import React from 'react';

import styles from './Header.module.css';
import {NavLink} from "react-router-dom";


const Header = () => {
    return (
        <main className={styles.wrap}>
            <section className={styles.logo}>
                <p>Logo</p>
            </section>

            <section className={styles.nav}>
                <ul>
                    <li><NavLink to={'/'}>home</NavLink></li>
                    <li><NavLink to={'/users'}>users</NavLink></li>
                    <li><NavLink to={'/posts'}>posts</NavLink></li>
                    <li><NavLink to={'/comments'}>comments</NavLink></li>
                </ul>
            </section>

            <section className={styles.log}>
                <p>Sin up/logout</p>
            </section>
        </main>
    );
};

export default Header;