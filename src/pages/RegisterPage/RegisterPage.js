import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {authService} from "../../services";


const RegisterPage = () => {
    const {register, handleSubmit} = useForm();
    const navigate = useNavigate();

    const [error, setError] = useState(null);


    const submit = async (user) => {
        try {
            console.log(user);
            await authService.register(user);
            console.log('www');

            navigate('/login');
        } catch (e) {
            console.log(e);
            setError(e.message)
        }
    };


    return (
        <div className={'registerPage'}>
            {error && <h3>{error}</h3>}

            <form onSubmit={handleSubmit(submit)}>
                <input type="text" placeholder={'username'} {...register('username')}/>
                <input type="text" placeholder={'password'} {...register('password')}/>
                <button>Register</button>
            </form>
        </div>
    );
};

export {RegisterPage};