//Set up (copy trên Redux-toolkit)
import { configureStore } from "@reduxjs/toolkit";

import productReducer from "./slices/product.slice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

// configureStore => redux-devtool
export const store = configureStore({
  reducer: {
    productReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

//Custom hook, gộp useSelector ko cần định nghĩa state: <RootState>
// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;