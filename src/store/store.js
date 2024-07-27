import {combineReducers, configureStore} from "@reduxjs/toolkit";

import userSlice from "./slices/user.slice";
import postSlice from "./slices/post.slice";


const rootReducer = combineReducers({
    users : userSlice,
    posts: postSlice,
});

const store = configureStore({
    reducer: rootReducer
});

export default store