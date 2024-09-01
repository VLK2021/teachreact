import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query";

import {baseURL} from "../constanse/baseUrl";
import {urls} from "../constanse/urls";


export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({ baseUrl: baseURL }),

    endpoints: (builder) => ({
        getAllUsers: builder.query({
            query: () => urls.users,
        }),
        getUserById: builder.query({
            query: (id) => `${urls.users}/${id}`,
        }),
    }),
});

export const {useGetUserQuery, useGetUserByIdQuery} = userApi