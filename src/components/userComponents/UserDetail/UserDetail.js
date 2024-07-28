import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";

import {userService} from "../../../services/userService";
import styles from './UserDetail.module.css';


const UserDetail = () => {
    const params = useParams();
    const [user, setUser] = useState({});
    const navigate = useNavigate();


    useEffect(() => {
        const  getUser = async () => {
            if (params.id) {
                const response = await userService.getById(params.id);

                setUser(response);
            }
        }
        getUser();
    }, [params.id]);


    return (
        <main className={styles.wrap}>
            <h1>user details</h1>

            {user.name}

            <button onClick={() => navigate(-1)}>back</button>
        </main>
    );
};

export default UserDetail;