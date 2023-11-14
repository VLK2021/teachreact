import React from 'react';

import './FriendStyle.css';
import {Button} from "../Button/Button";


const Friend = ({obj, selectedFriend, setSelectedFriend}) => {
    const isSelected = selectedFriend?.id === obj.id;


    return (
        <div className={'friend width flex'}>
            <div className={'friend-img'}>
                <img src={obj.image} alt={obj.name}/>
            </div>

            <div className={'friend-block-info flex-direction'}>
                <h3>{obj.name}</h3>

                {obj.balance < 0 && (
                    <p className="red">
                        You owe {obj.name} {Math.abs(obj.balance)}€
                    </p>
                )}

                {obj.balance > 0 && (
                    <p className="green">
                        {obj.name} owes you {Math.abs(obj.balance)}€
                    </p>
                )}

                {obj.balance === 0 && <p>You and {obj.name} are even</p>}
            </div>

            <Button onClick={() => setSelectedFriend(obj)}>
                {isSelected ? "Close" : "Select"}
            </Button>
        </div>
    );
};

export {Friend};