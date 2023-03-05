import React from 'react';
import {useForm} from "react-hook-form";


const Form = () => {
    const {register, handleSubmit, reset, formState:{errors, isValid}, setValue, watch} = useForm({mode:'onBlur'});

    const submit = (data) => {
        console.log(data);
        setValue('search', data.search);
        watch(data.search);

        // reset();
    }


    return (
        <div className={'form'}>

            <form onSubmit={handleSubmit(submit)}>
                <input type="text" {...register('search',{
                    required: 'Поле має бути заповнене',
                })}/>

                <div>
                    {errors?.search && <p>{errors?.search?.message || 'Error'}</p>}
                </div>

                <button disabled={!isValid}>search</button>
            </form>

        </div>
    );
};

export default Form;