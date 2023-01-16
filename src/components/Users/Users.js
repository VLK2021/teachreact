import React, {useEffect, useState} from 'react';

import {userService} from "../../services/user.service";



const Users = () => {
    let [users, setUsers] = useState([]);

    useEffect(()=>{
        userService.getAll()
            .then(value => setUsers(value))
    }, [])


    return (
        <div>
            {
               users && <select>{
                   users.map(user=> <option key={user.id}>{user.id}) - {user.name}</option>)
               }</select>
            }
        </div>
    );
};

export default Users;