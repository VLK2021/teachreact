import React from 'react';

import './LayoutStyle.css';
import {data} from "../constants";
import {Accordion} from "../conponents";


const Layout = () => {



    return (
        <div className={'layout flex-direction'}>
            {
                data.map(obj => <Accordion key={obj.id}
                                           obj={obj}
                    />)
            }
        </div>
    );
};

export {Layout};