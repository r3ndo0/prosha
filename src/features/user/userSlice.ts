import { createSlice } from "@reduxjs/toolkit";
export type UserSlice = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  username: string;
  password?: string;
  accessToTheSettingsPage: boolean;
};
const initialState: UserSlice | null = null;

const userSlice = createSlice({
  name: "user",
  initialState: initialState as UserSlice | null,
  reducers: {
    setUser: (state, action) => {
      return (state = action.payload);
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
