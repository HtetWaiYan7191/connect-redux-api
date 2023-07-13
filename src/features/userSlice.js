import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk("user/fetchUsers", async () => {

    const api = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const data = await api.json();
    return data;
 
});

const userSlice = createSlice({
  name: "users",
  initialState: {
    users: ["htet", "may"],
    isLoading: false,
    error: undefined,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.users = action.payload;
      state.error = false;
    });

    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.users = [];
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export const { action, reducers } = userSlice;
export default userSlice;
