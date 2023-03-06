import React from 'react';
import {useForm} from "react-hook-form";


const Form = ({setQuery}) => {
    const {register, handleSubmit} = useForm();

    const submit = (data) => {
        setQuery({title: data.search});
    }


    return (
        <div className={'form'}>

            <form onSubmit={handleSubmit(submit)}>
                <input type="text" {...register('search')}/>

                <button>search</button>
            </form>

        </div>
    );
};

export default Form;