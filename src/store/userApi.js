import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

import {baseURL} from "../constanse/baseUrl";
import {urls} from "../constanse/urls";


export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({baseUrl: baseURL}),
    endpoints: (builder) => ({
        getUsers: builder.query({
            query: () => `${urls.users}`,
            providesTags: ['Users'],
        }),
        getById: builder.query({
            query: (id) => `${urls.users}/${id}`,
        }),
        getPostsUser: builder.query({
            query: (id) => `${urls.users}/${id}/posts`,
        })
    })

});

export const {
    useGetUsersQuery,
    useGetByIdQuery,
    useGetPostsUserQuery
} = userApi;