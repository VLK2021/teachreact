import React, {useState} from 'react';

import styles from './user.module.css';
import ButtonDetails from "../../ButtonDetails/ButtonDetails";
import {Outlet} from "react-router-dom";


const User = ({user}) => {
    const {name, id} = user;

    const urlDetails = `/users/${id}`;
    const urlUserPosts = `/users/${id}/posts`;


    return (
        <main className={styles.wrap}>
            {name}
            <section className={styles.blockBtns}>
                <ButtonDetails urlDetails={urlDetails}>user details</ButtonDetails>
                <ButtonDetails urlDetails={urlUserPosts}>user posts</ButtonDetails>
            </section>
        </main>
    );
};

export default User;