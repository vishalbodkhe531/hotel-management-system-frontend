import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./features/userSlice";
import { TypedUseSelectorHook, useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});
export const useAppDispatch: () => typeof store.dispatch = useDispatch;

export const useAppSelectore: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;
