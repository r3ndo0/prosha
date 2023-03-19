import { createSlice } from "@reduxjs/toolkit";
export type UserSlice = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  username: string;
  accessToTheSettingsPage: boolean;
};
const initialState: UserSlice | null = null;

//userSlice is kinda pointless in the system I coded but to showCase I have a basic Knowledge of Redux

const userSlice = createSlice({
  name: "user",
  initialState: initialState as UserSlice | null,
  reducers: {
    setUser: (state, action) => {
      return (state = action.payload);
    },
    clearUser: (state) => {
      return (state = initialState);
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
