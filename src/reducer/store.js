import { configureStore } from "@reduxjs/toolkit";
import airbnbsSlice, { airbnbsReducerPath } from "./airbnbsSlice";

export const store = configureStore({
  reducer: {
    [airbnbsReducerPath]: airbnbsSlice,
  },
});
