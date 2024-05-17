import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  messages: [],
};

const toasterSlice = createSlice({
  name: "toaster",
  initialState,
  reducers: {
    showToast(state, action) {
      state.messages.push(action.payload);
    },
    hideToast(state, action) {
      state.messages = state.messages.filter(
        (messages) => messages.id !== action.payload
      );
    },
  },
});

export const { showToast, hideToast } = toasterSlice.actions;
export default toasterSlice.reducer;
