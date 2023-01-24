import React from 'react';
import {useForm} from "react-hook-form";


const Form = () => {
    const {handleSubmit, register, watch} = useForm();


    const submit = (data) => {
        console.log(data);
    }

    return (
        <div>

            <form onSubmit={handleSubmit(submit)}>
                <div>
                    <label>FirstName:<input type="text" defaultValue={''} {...register('firstName')}/></label>
                </div>
                <div>
                    <label>SecondName:<input type="text" defaultValue={''} {...register('secondName')}/></label>
                </div>
                <div>
                    <label>Phone:<input type="number" defaultValue={''} {...register('phone')}/></label>
                </div>
                <div>
                    <label>Email:<input type="email" defaultValue={''} {...register('emaile')}/></label>
                </div>
                <button>Send</button>
            </form>

        </div>
    );
};

export default Form;