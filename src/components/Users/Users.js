import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {getAllUsers} from "../../store/slices/user.slice";


const Users = () => {
    const {usersArray} = useSelector(store => store.users);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllUsers());
    }, []);


    return (
        <main>
            {
                usersArray && usersArray.map(obj => <div key={obj.id}>{obj.name}</div>)
            }
        </main>
    );
};

export default Users;