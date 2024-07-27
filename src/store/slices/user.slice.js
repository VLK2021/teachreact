import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {userService} from "../../services/userService";


export const getAllUsers = createAsyncThunk(
    'userSlice/getAllUsers',
    async (_, {rejectWithValue}) => {
        try {
            return await userService.getAll();
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
);


const initialState = {
    usersArray: [],
    status: null,
    error: null,
}

const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getAllUsers.pending, (state) => {
                state.status = 'Loading...';
            })
            .addCase(getAllUsers.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                state.usersArray = action.payload;
            })
            .addCase(getAllUsers.rejected, (state, action) => {
                state.status = 'rejected';
                state.error =  action.payload || 'Request failed';
            })
    }
});

export default userSlice.reducer;