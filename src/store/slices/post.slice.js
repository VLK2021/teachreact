import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {postService} from "../../services/postService";


export const getAllPosts = createAsyncThunk(
    'postSlice/getAllPosts',
    async (_, {rejectWithValue}) => {
        try {
            return await postService.getAll();
        }catch (e) {
            return rejectWithValue(e.message);
        }
    }
);


const initialState = {
    postsArray: [],
    status: null,
    error: null,
}


const postSlice = createSlice({
    name: 'postSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllPosts.pending, (state) => {
                state.status = 'Loading...';
            })
            .addCase(getAllPosts.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                state.postsArray = action.payload;
            })
            .addCase(getAllPosts.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.payload || 'Request failed';
            })
    }
});

export default postSlice.reducer;