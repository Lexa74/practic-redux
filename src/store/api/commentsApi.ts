import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {DataComment} from "./interfaces";

export const commentsApi = createApi({
    reducerPath: 'commentsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com',
        prepareHeaders: (headers) => {
            headers.set('Authorization', 'Bearer 123asdasd')
        }
    }),
    endpoints: (builder) => ({
        getComments: builder.query<DataComment[], void>({
            query: () => ({url: '/posts'})
        })
    })
})

export const {useGetCommentsQuery} = commentsApi

export default commentsApi.reducer
