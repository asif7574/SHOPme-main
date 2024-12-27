import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATUS = {
  loginStatus: false,
};

const authSlice = createSlice({
  name: "log",
  initialState: INITIAL_STATUS,
  reducers: {
    updateLoginStatus: (state, action) => {
      state.loginStatus = !state.loginStatus;
    },
  },
});

export const { updateLoginStatus } = authSlice.actions;
export default authSlice.reducer;
