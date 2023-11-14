import React from 'react';

import './FriendsListStyle.css';
import {Friend} from "../Friend/Friend";


const FriendsList = ({friends, setFriends, selectedFriend, setSelectedFriend}) => {


    return (
        <div className={'friendsList width'}>
            {friends.length > 0 &&
            friends.map(obj => <Friend key={obj.id}
                                       obj={obj}
                                       selectedFriend={selectedFriend}
                                       setSelectedFriend={setSelectedFriend}
            />)
            }
        </div>
    );
};

export {FriendsList};