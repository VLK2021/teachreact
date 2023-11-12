import React, {useEffect, useState} from 'react';
import {useForm} from "react-hook-form";

import './LayoutStyle.css';


const Layout = () => {
    const {register, handleSubmit, setValue} = useForm();

    const [current, setCurrent] = useState({
        bill: 0,
        you: 0,
        friend: 0,
    });

    const [allBill, setAllBill] = useState(0);
    const [percent, setPercent] = useState(0);
    const [result, setResult] = useState(0);


    const submit = (data) => {
        setCurrent(data);
    }

    useEffect(() => {
        setAllBill(Number(current.bill));
        const sum = (Number(current.bill) / 100) * (Number(current.you) + (Number(current.friend))) / 2;
        setPercent(Math.ceil(sum));
        setResult(Number(current.bill) + Math.ceil(sum));
    }, [current]);

    const reset = () => {
        setAllBill(0);
        setResult(0);
        setPercent(0);
        setValue('bill', 0);
        setValue('you', 0);
        setValue('friend', 0);
    }


    return (
        <div className={'layout'}>
            <h1>bill</h1>

            <form onChange={handleSubmit(submit)}>
                <div>
                    <label>How much was the bill?
                        <input type="number" {...register('bill')}/>
                    </label>
                </div>

                <div>
                    <label>How did you like the service?
                        <select {...register('you')}>
                            <option value={0}>Dissatisfied(0%)</option>
                            <option value={5}>It was okay(5%)</option>
                            <option value={10}>It was good(10%)</option>
                            <option value={20}>Absolutely amazing(20%)</option>
                        </select>
                    </label>
                </div>

                <div>
                    <label>How did your friend like the service?
                        <select {...register('friend')}>
                            <option value={0}>Dissatisfied(0%)</option>
                            <option value={5}>It was okay(5%)</option>
                            <option value={10}>It was good(10%)</option>
                            <option value={20}>Absolutely amazing(20%)</option>
                        </select>
                    </label>
                </div>
            </form>


            {
                <div className={'block-bill'}>
                    <p>You pay ${result} (${allBill} + ${percent} tip) </p>
                </div>
            }

            <div>
                <button onClick={reset}>
                    Reset
                </button>
            </div>
        </div>
    );
};

export {Layout};