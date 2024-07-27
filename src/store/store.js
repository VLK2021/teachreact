import {combineReducers, configureStore} from "@reduxjs/toolkit";

import userSlice from "./slices/user.slice";
import postSlice from "./slices/post.slice";
import commentSlice from "./slices/comment.slice";


const rootReducer = combineReducers({
    users : userSlice,
    posts: postSlice,
    comments: commentSlice,
});

const store = configureStore({
    reducer: rootReducer
});

export default store