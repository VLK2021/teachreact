import React, {useState} from 'react';

import './LayoutStyle.css';
import {questions} from "../constants/Questions";


const Layout = () => {
    const [contentId, setContentId] = useState(null);

    const handleClick = (id) => {
        setContentId(id !== contentId ? id : null);
    }


    return (
        <div className={'layout flex-direction'}>
            <h1>Questions</h1>

            <div className={'questions-block flex'}>{
                questions.length > 0 &&
                questions.map(obj =>
                    <div key={obj.id}
                         className={`flex ${obj.id === contentId ? 'single-question-selected' : 'single-question'}`}
                         onClick={() => handleClick(obj.id)}
                    >
                        {obj.id === contentId ? obj.answer : obj.question}
                    </div>)
            }</div>
        </div>
    );
};

export {Layout};