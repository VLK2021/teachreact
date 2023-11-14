import React, {useState} from 'react';

import './AddFriendsStyle.css';
import {Button} from "../Button/Button";


const AddFriends = ({onAddFriend}) => {
    const [name, setName] = useState("");
    const [image, setImage] = useState("https://i.pravatar.cc/48");


    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name || !image) return;

        const id = crypto.randomUUID();
        const newFriend = {
            id,
            name,
            image: `${image}?=${id}`,
            balance: 0,
        };

        onAddFriend(newFriend);

        setName("");
        setImage("https://i.pravatar.cc/48");
    }


    return (
        <div className={'addFriends'}>
            <form className="form-add-friend" onSubmit={handleSubmit}>
                <div className={'addFriends-block-first'}>
                    <label>👫 Friend name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div className={'addFriends-block-first'}>
                    <label>🌄 Image URL</label>
                    <input
                        type="text"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                    />
                </div>

                <Button>Add</Button>
            </form>
        </div>
    );
};

export {AddFriends};