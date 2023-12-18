import { configureStore } from "@reduxjs/toolkit";
import videoList from "./videoListSlice";

export const store = configureStore({
  reducer: {
    videoList: videoList,
  },
});
