import React, {useState} from 'react';

import './LayoutStyle.css';
import {data} from "../conponents/data";


const Layout = () => {

    const [step, setStep] = useState(1);

    const prev = () => {
        if (step > 1) {
            setStep(step - 1);
        }
    }

    const next = () => {
        if (step < 3) {
            setStep(step + 1);
        }
    }

    return (
        <div className={'layout'}>
            <div className={'numbers flex'}>
                <div className={step >= 1 ? 'active' : ''}>1</div>
                <div className={step >= 2 ? 'active' : ''}>2</div>
                <div className={step >= 3 ? 'active' : ''}>3</div>
            </div>

            <div className={'content flex'}>
                <p>Step {step}: {data[step - 1]}</p>
            </div>

            <div className={'buttons flex'}>
                <button className={'flex'} onClick={prev}>prev</button>
                <button className={'flex'} onClick={next}>next</button>
            </div>
        </div>
    );
};

export {Layout};