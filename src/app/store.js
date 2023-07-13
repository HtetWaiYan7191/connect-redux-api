import { configureStore } from "@reduxjs/toolkit";
import userSlice from '../features/userSlice';
const store = configureStore({
    reducer:{
        users: userSlice.reducer
    }
})

export default store;