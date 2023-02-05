import React from 'react';
import {useForm} from "react-hook-form";


const Form = () => {
    const {register, handleSubmit, formState: {errors, isValid}, reset} = useForm({mode: 'onBlur'});


    const submit = (data) => {
        console.log(data);
        reset()
    }

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <label>FirstName:
                    <input type="text" {...register('firstName', {
                            required: 'Поле повинно бути заповнене',
                            minLength: {
                                value: 6,
                                message: 'мінімальна довжина імені 6 символів'
                            },
                            maxLength: {
                                value: 10,
                                message: 'максимальна довжина 10 символів'
                            }
                        })}/>
                </label>
                <div>
                    {errors?.firstName && <p>{errors?.firstName?.message || 'Error'}</p>}
                </div>

                <button disabled={!isValid}>Send</button>
            </form>

        </div>
    );
};

export default Form;