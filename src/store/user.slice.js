import {createSlice} from "@reduxjs/toolkit";




const initialState = {
    users: [],
}

const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        addUser: ((state, action) => {
            state.users.push({
                id: new Date().getTime(),
                ...action.payload.data
            })
        }),

        deleteUser: ((state, action) => {
            state.users = state.users.filter(user => user.id !== action.payload.id)
        }),
    }
});

const userReducer = userSlice.reducer;
export default userReducer;

export const {addUser, deleteUser} = userSlice.actions;