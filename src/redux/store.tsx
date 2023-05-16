import { configureStore } from "@reduxjs/toolkit";
import userAuth from './slices/userAuthSlice';
import chats from './slices/chatsSlice'


export const store = configureStore({
    reducer:{
        userAuth,
        chats
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
