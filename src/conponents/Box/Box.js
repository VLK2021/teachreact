import React, {useState} from 'react';

import './BoxStyle.css';


const Box = ({children}) => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div className={'box'}>
            <button className="btn-toggle" onClick={() => setIsOpen((open) => !open)}>
                {isOpen ? "–" : "+"}
            </button>

            {isOpen &&
                <div>
                    {children}
                </div>
            }
        </div>
    );
};

export {Box};