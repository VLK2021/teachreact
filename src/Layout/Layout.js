import React, {useEffect, useState} from 'react';

import './LayoutStyle.css';


const Layout = () => {
    const [fighters, setFighters] = useState();


    useEffect(() => {
        fetch('https://api.github.com/repos/binary-studio-academy/stage-2-es6-for-everyone/contents/resources/api/fighters.json')
            .then(response => response.json())
            .then(result => {
                setFighters(JSON.parse(atob(result.content)));
                console.log(JSON.parse(atob(result.content)))
            })
    }, []);


    return (
        <div className={'layout'}>
            {
                fighters &&
                fighters.map((obj) =>
                    <div key={obj.name}>
                        <img src={obj.source} alt="foto"/>
                    </div>
                )
            }
        </div>
    );
};

export {Layout};