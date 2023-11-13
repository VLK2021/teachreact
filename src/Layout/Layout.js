import React, {useState} from 'react';

import './LayoutStyle.css';


const Layout = () => {
    const [bill, setBill] = useState(0);
    const [selectYou, setSelectYou] = useState(0);
    const [selectFriend, setSelectFriend] = useState(0);

    const tip = bill * ((selectYou + selectFriend) / 2 / 100);

    const reset = () => {
        setBill(0);
        setSelectYou(0);
        setSelectFriend(0);
    }


    return (
        <div className={'layout'}>
            <h1>bill</h1>

            <form>
                <div>
                    <label>How much was the bill?
                        <input type="number"
                               placeholder={'bill value'}
                               value={bill}
                               onChange={(e) => setBill(Number(e.target.value))}
                        />
                    </label>
                </div>

                <div>
                    <label>How did you like the service?
                        <select value={selectYou}
                                onChange={(e) => setSelectYou(Number(e.target.value))}
                        >
                            <option value={0}>Dissatisfied(0%)</option>
                            <option value={5}>It was okay(5%)</option>
                            <option value={10}>It was good(10%)</option>
                            <option value={20}>Absolutely amazing(20%)</option>
                        </select>
                    </label>
                </div>

                <div>
                    <label>How did your friend like the service?
                        <select value={selectFriend}
                                onChange={(e) => setSelectFriend(Number(e.target.value))}
                        >
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
                    <p>You pay ${bill + tip} (${bill} + ${tip}tip) </p>
                </div>
            }

            <div>
                <button onClick={reset}>reset</button>
            </div>
        </div>
    );
};

export {Layout};