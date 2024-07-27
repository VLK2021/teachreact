import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {commentService} from "../../services/commentService";


const initialState = {
    commentsArray: [],
    status: null,
    error: null,
}

export const getAllComments = createAsyncThunk(
    'commentSlice/getAllComments',
    async (_, {rejectWithValue}) => {
        try {
            return await commentService.getAll();
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
);


const commentSlice = createSlice({
    name: 'commentSlice',
    initialState,
    reducers: {},

    extraReducers: (builder) => {
        builder
            .addCase(getAllComments.pending, (state) => {
                state.status = 'Loading...';
            })
            .addCase(getAllComments.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                state.commentsArray = action.payload;
            })
            .addCase(getAllComments.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.payload || 'Request failed';
            })
    }
});

export default commentSlice.reducer;