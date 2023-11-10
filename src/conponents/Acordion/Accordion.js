import React, {useState} from 'react';

import './AccordionStyle.css';


const Accordion = ({obj}) => {
    const {id, title, text} = obj;
    const [visible, setVisible] = useState(true);

    const handleCurrent = () => {
        setVisible(prev => !prev);
    }

    return (
        <div className={'accordion'}>
            <div className={'flex block-title'}>
                <div className={`flex ${visible ? 'visible' : 'title'}`}>
                    <p className={`${visible ? 'title-firs-w' : 'title-first'}`}>
                        {id < 9 ? `0${id}` : id}
                    </p>

                    <p className={'title-second'}>
                        {title}
                    </p>
                </div>

                <div className={'current'} onClick={handleCurrent}>
                    {visible ? '-' : '+'}
                </div>
            </div>

            {visible &&
            <div className={'text'}>
                {text}
            </div>
            }
        </div>
    );
};

export {Accordion};