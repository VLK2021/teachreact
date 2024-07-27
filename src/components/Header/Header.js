import React from 'react';

import styles from './Header.module.css';
import NavMenu from "../NavMenu/NavMenu";


const Header = () => {
    return (
        <main className={styles.wrap}>
            <section>LOGO</section>

            <section className={styles.navMenu}>
                <NavMenu/>
            </section>

            <section>Login</section>
        </main>
    );
};

export default Header;