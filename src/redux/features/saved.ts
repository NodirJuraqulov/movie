import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: JSON.parse(localStorage.getItem("saved") || "[]"),
};

export const savedSlice = createSlice({
  name: "saved",
  initialState,
  reducers: {
    toggleSaved: (state, action) => {
      const index = state.value.findIndex(
        (item: any) => item.id === action.payload.id
      );
      if (index < 0) {
        // add
        state.value.push(action.payload);
      } else {
        // remove
        state.value = state.value.filter(
          (item: any) => item.id !== action.payload.id
        );
      }
      localStorage.setItem("saved", JSON.stringify(state.value));
    },
  },
});

export const { toggleSaved } = savedSlice.actions;

export default savedSlice.reducer;
