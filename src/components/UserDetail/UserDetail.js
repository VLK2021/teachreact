import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {userService} from "../../services/userService";
import styles from './UserDetail.module.css';


const UserDetail = () => {
    const params = useParams();
    const [user, setUser] = useState({});


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
            {user.name}
        </main>
    );
};

export default UserDetail;