import React from 'react';
import {useDispatch} from "react-redux";


import {deleteUser} from "../../store/user.slice";


const User = ({user}) => {
    const {id, name, phone, email, city} = user;
    const dispatch = useDispatch();


    return (
        <div>
            {name} - {city} - {email} - {phone}
            <button onClick={()=> dispatch(deleteUser({id}))}>delete</button>
        </div>
    );
};

export default User;