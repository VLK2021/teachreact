import React from 'react';
import {useLocation, useNavigate} from "react-router-dom";

import {useAuth} from "../../hooks/useAuth";


const Login = () => {
    const {login} = useAuth();
    let navigate = useNavigate();
    let {state: {pathname}} = useLocation();


    const submit = (e) => {
        e.preventDefault()
        const user = e.target.username.value;
        login(user, () => navigate(pathname, {replace: true}))
    }



    return (
        <div>
            <h1>Login</h1>

            <form onSubmit={submit}>
                <label>UserName<input type="text" name={'username'}/></label>
                <button>Login</button>
            </form>
        </div>
    );
};

export default Login;