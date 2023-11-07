import React, {useState} from 'react';

import './LayoutStyle.css';


const Layout = () => {
    const [description, setDescription] = useState('');
    const [quantity, setQuantity] = useState(5);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newItem = {description, quantity, id: Date.now()};
        console.log(newItem);
    }


    return (
        <div className={'layout'}>
            <form onSubmit={handleSubmit}>
                <h2>Create select with numbers</h2>

                <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
                    {Array.from({length: 20}, (_, i) => i + 1).map((num) => (
                        <option value={num} key={num}>
                            {num}
                        </option>
                    ))}
                </select>

                <input type="text"
                       name={'text'}
                       placeholder={'items...'}
                       value={description}
                       onChange={(e) => setDescription(e.target.value)}
                />
                <button>Add</button>
            </form>
        </div>
    );
};

export {Layout};