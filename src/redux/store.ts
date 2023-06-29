import { configureStore } from '@reduxjs/toolkit'
import { likeReducer } from './likeReducer'
import comentsReduser from './comentsReduser'


export const store = configureStore({
    reducer: {
        articleLikeState: likeReducer,
        commentsState: comentsReduser,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch