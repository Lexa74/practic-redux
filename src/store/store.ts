import {configureStore} from "@reduxjs/toolkit";
import commentsReducer from './slices/commentsSlice'
import commentsApiReducer, {commentsApi} from "./api/commentsApi";

export const store = configureStore({
    reducer: {
        comments: commentsReducer,
        [commentsApi.reducerPath]: commentsApiReducer,

    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(commentsApi.middleware),
})