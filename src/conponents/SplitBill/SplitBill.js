import React, {useState} from 'react';

import './SplitBillStyle.css';
import {Button} from "../Button/Button";


const SplitBill = ({selectedFriend, onSplitBill}) => {
    const [bill, setBill] = useState("");
    const [paidByUser, setPaidByUser] = useState("");
    const [whoIsPaying, setWhoIsPaying] = useState("user");

    const paidByFriend = bill ? bill - paidByUser : "";


    const handleSubmit = (e) => {
        e.preventDefault();

        if (!bill || !paidByUser) return;
        onSplitBill(whoIsPaying === "user" ? paidByFriend : -paidByUser);
    }


    return (
        <div className={'SplitBill width'}>
            <form className="form-split-bill" onSubmit={handleSubmit}>
                <h2>Split a bill with {selectedFriend.name}</h2>

                <div>
                    <label>💰 Bill value</label>
                    <input
                        type="text"
                        value={bill}
                        onChange={(e) => setBill(Number(e.target.value))}
                    />
                </div>

                <div>
                    <label>🧍‍♀️ Your expense</label>
                    <input
                        type="text"
                        value={paidByUser}
                        onChange={(e) =>
                            setPaidByUser(
                                Number(e.target.value) > bill ? paidByUser : Number(e.target.value)
                            )
                        }
                    />
                </div>

                <div>
                    <label>👫 {selectedFriend.name}'s expense</label>
                    <input type="text" disabled value={paidByFriend}/>
                </div>

                <div>
                    <label>🤑 Who is paying the bill</label>
                    <select
                        value={whoIsPaying}
                        onChange={(e) => setWhoIsPaying(e.target.value)}
                    >
                        <option value="user">You</option>
                        <option value="friend">{selectedFriend.name}</option>
                    </select>
                </div>

                <div className={'btn'}>
                    <Button>Split bill</Button>
                </div>
            </form>
        </div>
    );
};

export {SplitBill};