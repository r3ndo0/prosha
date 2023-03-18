import { createSlice } from "@reduxjs/toolkit";
export type user = {
  id: number;
  username: string;
  hasAccessToSettingsPage: boolean;
} | null;
const initialState: user = {
  id: 1,
  username: "user1",
  hasAccessToSettingsPage: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    altUserAccess: (state) => {
      state.hasAccessToSettingsPage = true;
    },
  },
});

export const { altUserAccess } = userSlice.actions;
export default userSlice.reducer;
