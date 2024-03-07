import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {InitialStateInterface} from "./interfaces";

const initialState: InitialStateInterface = {
    commentAuthor: '',
    commentId: 0
}

export const commentsSlice = createSlice({
    name: 'commentsSlice',
    initialState,
    reducers : {
        setCommentAuthor: (state, action: PayloadAction<string>) => {
            state.commentAuthor = action.payload
        }
    }
})

export const { setCommentAuthor } = commentsSlice.actions

export default commentsSlice.reducer