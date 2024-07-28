import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";

import styles from './UserPosts.module.css';
import UserPost from "../UserPost/UserPost";
import {userService} from "../../../services/userService";


const UserPosts = () => {
    const params = useParams();
    const [userPosts, setUserPosts] = useState([]);
    const [currentUserid, setCurrentUserId] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const getPosts = async () => {
           const data = await userService.getUserPosts(params.id);
            setUserPosts(data);
        }
        getPosts();
    }, [params.id]);


    return (
        <main className={styles.wrap}>
            <button onClick={() => navigate(-1)}>back</button>

            <h1>user posts</h1>
            <h3>user id: {currentUserid}</h3>

            {
                userPosts.length > 0 && userPosts.map(obj => <UserPost key={obj.id}
                                                                       post={obj}
                                                                       setCurrentUserId={setCurrentUserId}
                />)
            }
        </main>
    );
};

export default UserPosts;