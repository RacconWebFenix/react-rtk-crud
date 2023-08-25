import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./feature/taks/tasksSlice";

export const store = configureStore({
  reducer: {
    tasks: taskReducer,
  },
});
