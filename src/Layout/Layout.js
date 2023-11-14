import React, {useState} from 'react';

import './LayoutStyle.css';
import {InitialFriends} from "../constants";
import {AddFriends, Button, FriendsList, SplitBill} from "../conponents";


const Layout = () => {
    const [friends, setFriends] = useState(InitialFriends);
    const [showAddFriend, setShowAddFriend] = useState(false);
    const [selectedFriend, setSelectedFriend] = useState(null);


    const handleShowAddFriend = () => {
        setShowAddFriend((prev) => !prev);
    }

    const handleAddFriend = (friend) => {
        setFriends((friends) => [...friends, friend]);
        setShowAddFriend(false);
    }

    const handleSplitBill = (value) => {
        setFriends((friends) =>
            friends.map((friend) =>
                friend.id === selectedFriend.id
                    ? {...friend, balance: friend.balance + value}
                    : friend
            )
        );

        setSelectedFriend(null);
    }


    return (
        <div className={'layout width flex'}>
            <div className={'layout-block-first'}>
                <div className={'layout-listFriends width'}>
                    <FriendsList friends={friends}
                                 setFriends={setFriends}
                                 selectedFriend={selectedFriend}
                                 setSelectedFriend={setSelectedFriend}
                    />
                </div>

                {showAddFriend &&
                <div className={'layout-addFriends width'}>
                    <AddFriends onAddFriend={handleAddFriend}/>
                </div>
                }

                <div className={'layout-btn width'}>
                    <Button onClick={handleShowAddFriend}>
                        {showAddFriend ? "Close" : "Add friend"}
                    </Button>
                </div>
            </div>

            {selectedFriend && (
                <div className={'layout-block-second'}><SplitBill
                    selectedFriend={selectedFriend}
                    onSplitBill={handleSplitBill}
                    key={selectedFriend.id}
                /></div>
            )}
        </div>
    );
};

export {Layout};