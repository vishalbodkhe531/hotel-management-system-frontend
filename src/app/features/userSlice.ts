import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the type for the state
interface UserState {
  currentUser: { [key: string]: any } | null;
}

// Get initial state from localStorage
const initialState: UserState = {
  currentUser: localStorage.getItem("currentUser")
    ? JSON.parse(localStorage.getItem("currentUser") as string)
    : null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signInSuccess: (state, action: PayloadAction<{ [key: string]: any }>) => {
      console.log(action.payload);
      state.currentUser = action.payload;
      localStorage.setItem("currentUser", JSON.stringify(action.payload));
    },
  },
});

export const { signInSuccess } = userSlice.actions;

export default userSlice.reducer;
