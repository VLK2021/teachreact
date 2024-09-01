import {configureStore} from "@reduxjs/toolkit";
import {setupListeners} from "@reduxjs/toolkit/query";

import {userApi} from "./userApi";


export const store = configureStore({
    reducer: {
        [userApi.reducerPath]: userApi.reducerPath,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(),
});

setupListeners(store.dispatch);