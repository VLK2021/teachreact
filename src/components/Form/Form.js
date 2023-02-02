import React from 'react';
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";

import {addUser} from "../../store/user.slice";


const Form = () => {
    const {handleSubmit, register, reset} = useForm();
    const dispatch = useDispatch();

    const submit = (data) => {
        dispatch(addUser({data}));
        reset();
    }

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <label>Name:<input type="text" {...register('name')}/></label>
                <label>City:<input type="text" {...register('city')}/></label>
                <label>Email:<input type="text" {...register('email')}/></label>
                <label>Phone:<input type="text" {...register('phone')}/></label>
                <button>save</button>
            </form>
        </div>
    );
};

export default Form;