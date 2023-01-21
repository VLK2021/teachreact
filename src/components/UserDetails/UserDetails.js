import React, {useEffect, useState} from 'react';
import {useLocation, useParams, useNavigate} from "react-router-dom";

import {userService} from "../../services/user.servise";


const UserDetails = () => {
    const {id} = useParams();
    let {state} = useLocation();
    let navigate = useNavigate();

    let [user, setUser] = useState({});

    useEffect(() => {
        if (state) {
            setUser(state);
            return
        }

        userService.getById(id).then(value => setUser(value))
    }, [id]);

    const toHome = () => {
        navigate('/', {replace: true})
    };

    const toBack = () => {
        navigate(-1);
    };

    const toForward = () => {
        navigate(1);
    };


    return (
        <div>
            <button onClick={toHome}>Home</button>
            <button onClick={toBack}>Back</button>
            <button onClick={toForward}>Forward</button>
            {
                user && <div>{user.id} - {user.name} - {user.email}</div>
            }
        </div>
    );
};

export default UserDetails;