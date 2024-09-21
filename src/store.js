import { configureStore } from "@reduxjs/toolkit";
import bucketReducer from "./features/bucket/bucketSlice";
import userReducer from "./features/user/userSlice";

export const store = configureStore({
  reducer: {
    bucket: bucketReducer,
    user: userReducer,
  },
});
