import React, {useEffect, useState} from 'react';

import './LayoutStyle.css';


const Layout = () => {
    const [amount, setAmount] = useState(1);
    const [fromCur, setFromCur] = useState('EUR');
    const [toCur, setToCur] = useState('USD');
    const [converted, setConverted] = useState('');


    useEffect(() => {
        if (fromCur === toCur) {
            setConverted(amount)
        }

        fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${fromCur}&to=${toCur}`)
            .then(response => response.json())
            .then(value => setConverted(value?.rates[toCur]));
    }, [amount, fromCur, toCur]);

    return (
        <main className={'layout'}>
            <input type="text" value={amount}
                   onChange={(e) => setAmount(Number(e.target.value))}/>

            <select value={fromCur} onChange={(e) => setFromCur(e.target.value)}>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="CAD">CAD</option>
                <option value="INR">INR</option>
            </select>

            <select value={toCur} onChange={(e) => setToCur(e.target.value)}>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="CAD">CAD</option>
                <option value="INR">INR</option>
            </select>

            <p>{converted} {toCur}</p>
        </main>
    );
};

export {Layout};