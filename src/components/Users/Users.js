import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";

import {userService} from "../../services/user.servise";
import User from "../User/User";


const Users = () => {
    let [users, setUsers] = useState([]);





    useEffect(() => {
        userService.getAll().then(value => setUsers(value))
    }, []);

    return (
        <div>
            <h1>Users:</h1>
            {
                users.map(user => <User key={user.id} user={user}/>)
            }
            <hr/>
            <div>
                <Outlet/>
            </div>
        </div>
    );
};

export default Users;