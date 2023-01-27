import React from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import './FormStyle.css';
import {formValidator} from "../../validators/form.validator";


const Form = () => {
    const {handleSubmit, register, watch, formState: {errors}
    } = useForm({resolver: joiResolver(formValidator), mode:'onTouched'});


    const submit = (data) => {
        console.log(data);
    }

    return (
        <div>

            <form onSubmit={handleSubmit(submit)}>
                <div>
                    <label>firstName:<input type="text" defaultValue={''} {...register('firstName')}/></label>
                    {errors.firstName && <div className={'error'}>{errors.firstName.message}</div>}
                </div>
                <div>
                    <label>secondName:<input type="text" defaultValue={''} {...register('secondName')}/></label>
                    {errors.secondName && <div className={'error'}>{errors.secondName.message}</div>}
                </div>
                <div>
                    <label>phone:<input type="number" defaultValue={''} {...register('phone')}/></label>
                    {errors.phone && <div className={'error'}>{errors.phone.message}</div>}
                </div>
                <div>
                    <label>email:<input type="email" defaultValue={''} {...register('email')}/></label>
                    {errors.email && <div className={'error'}>{errors.email.message}</div>}
                </div>
                <button>Send</button>
            </form>

        </div>
    );
};

export default Form;