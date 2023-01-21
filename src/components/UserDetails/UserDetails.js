import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";

import {userService} from "../../services/user.servise";


const UserDetails = () => {
   const {id} = useParams();
   let {state} = useLocation();

    let [user, setUser] = useState({});

   useEffect(() => {
       if (state){
           setUser(state);
           return
       }

       userService.getById(id).then(value => setUser(value))
   }, [id]);


    return (
        <div>
            {
                user && <div>{user.id} - {user.name} - {user.email}</div>
            }
        </div>
    );
};

export default UserDetails;