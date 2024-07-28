import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";

import {userService} from "../../../services/userService";
import styles from './UserDetail.module.css';


const UserDetail = () => {
    const params = useParams();
    const [user, setUser] = useState({});
    const navigate = useNavigate();

    // const {
    //     id, name, username, email,
    //     address: {street, suite, city, zipcode, geo: {lat, lng}},
    //     phone, website,
    //     company: {catchPhrase, bs}
    // } = user;


    useEffect(() => {
        const getUser = async () => {
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

            {user.name &&
                <ul className={styles.ul}>
                    <li><p className={styles.span}>id:</p> {user.id}</li>
                    <li><p className={styles.span}>name:</p> {user.name}</li>
                    <li><p className={styles.span}>userName:</p> {user.username}</li>
                    <li><p className={styles.span}>email:</p> {user.email}</li>

                    <ul className={styles.ul}><p>address</p>
                        <li><p className={styles.span}>street:</p> {user.address.street}</li>
                        <li><p className={styles.span}>suite:</p> {user.address.suite}</li>
                        <li><p className={styles.span}>city:</p> {user.address.city}</li>
                        <li><p className={styles.span}>zipcode:</p> {user.address.zipcode}</li>

                        <ul className={styles.ul}><p>geo</p>
                            <li><p className={styles.span}>lat:</p> {user.address.geo.lat}</li>
                            <li><p className={styles.span}>lng:</p> {user.address.geo.lng}</li>
                        </ul>
                    </ul>

                    <li><p className={styles.span}>phone:</p> {user.phone}</li>
                    <li><p className={styles.span}>website:</p> {user.website}</li>

                    <ul className={styles.ul}><p>company</p>
                        <li><p className={styles.span}>catchPhrase:</p> {user.company.catchPhrase}</li>
                        <li><p className={styles.span}>bs:</p> {user.company.bs}</li>
                    </ul>
                </ul>
            }

            <button onClick={() => navigate(-1)}>back</button>
        </main>
    )
        ;
};

export default UserDetail;