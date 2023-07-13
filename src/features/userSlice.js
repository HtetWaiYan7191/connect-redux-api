import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'users',
    initialState: {
        users: [],
        isLoading: true,
        error: undefined,
      },
    reducers: {

    },
    extraReducers: {}
})

export const {action, reducers} = userSlice;
export default userSlice;
