import React, {useState} from 'react';
import {createContext} from "react";


export const AuthContext = createContext(null);


const AuthProvider = ({children}) => {

    let [user, setUser] = useState(null);

    const login = (newUser, cb) => {
        setUser(newUser)
        cb()
    };

    const logOut = (cb) => {
        setUser(null)
        cb()
    };

    const value = {user, login, logOut};

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;