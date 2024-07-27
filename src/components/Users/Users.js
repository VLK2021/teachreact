import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {getAllUsers} from "../../store/slices/user.slice";
import styles from './Users.module.css';
import User from "../User/User";


const Users = () => {
    const {usersArray} = useSelector(store => store.users);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllUsers());
    }, []);


    return (
        <main className={styles.wrap}>
            {
                usersArray && usersArray.map(obj => <User key={obj.id} user={obj}/>)
            }
        </main>
    );
};

export default Users;