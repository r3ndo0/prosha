import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showLists: false,
  showSettings: false,
};

const uiSlice = createSlice({
  name: "uiState",
  initialState,
  reducers: {
    showListsSection: (state) => {
      state.showSettings = false;
      state.showLists = true;
    },
    showSettingsSection: (state) => {
      state.showLists = false;
      state.showSettings = true;
    },
  },
});

export const { showListsSection, showSettingsSection } = uiSlice.actions;

export default uiSlice.reducer;
