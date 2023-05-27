import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "users",
  initialState: {
    token: null,
    currentUser: JSON.parse(localStorage.getItem("user")) || null,
  },
  reducers: {
    getToken: (state, action) => {
      state.token = action.payload;
      localStorage.setItem("token", action.payload);
    },

    getUser: (state, action) => {
      state.currentUser = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },

    logoutUser: (state) => {
      state.token = null;
      state.currentUser = null;
      localStorage.clear();
    },
  },
});

export const { getToken, getUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;
