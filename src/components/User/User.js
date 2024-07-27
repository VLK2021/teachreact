import React, {useState} from 'react';

import styles from './user.module.css';
import ButtonDetails from "../ButtonDetails/ButtonDetails";


const User = ({user}) => {
    const {name, id} = user;

    const urlDetails = `/users/${id}`


    return (
        <main className={styles.wrap}>
            {name}
            <ButtonDetails urlDetails={urlDetails}>user details</ButtonDetails>
        </main>
    );
};

export default User;