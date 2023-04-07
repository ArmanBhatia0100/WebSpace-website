import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const pageSlice = createSlice({
  name: "pageSlice",
  initialState: { explore: false },
  reducers: {
    explore(state) {
      state.explore = !state.explore;
    }
  }
});

export const pageActions = pageSlice.actions;

export const store = configureStore({ reducer: pageSlice.reducer });
