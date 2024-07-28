import React, {useEffect} from 'react';

import styles from './UserPost.module.css';


const UserPost = ({post, setCurrentUserId}) => {
    const {userId, id, title, body} = post;

    useEffect(() => {
        setCurrentUserId(userId)
    }, []);


    return (
        <main className={styles.wrap}>
            <p>post id: {id}</p>
            <h2>{title}</h2>
        </main>
    );
};

export default UserPost;