import React, {useEffect, useState} from 'react';

import {userService} from "../../services/user.service";


const Users = () => {

    let [users, setUsers] = useState([]);

    useEffect(()=>{
        userService.getAll()
            .then(value => setUsers(value));
    },[]);



    return (
        <div>
            {
               users && <select name="users" id="use">{
                   users.map(value => <option value="" key={value.id}>
                       {value.id}) - {value.name}
                   </option>)
               }</select>
            }
        </div>
    );
};

export default Users;