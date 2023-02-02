import React from 'react';
import {useSelector} from "react-redux";

import User from "../User/User";



const Users = () => {
    const {users} = useSelector(store => store.userReducer);

    return (
        <div>
            {
                users && users.map(user => <User key={user.id} user={user}/>)
            }
        </div>
    );
};

export default Users;