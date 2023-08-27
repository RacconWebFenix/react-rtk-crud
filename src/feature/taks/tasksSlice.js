import { createSlice } from "@reduxjs/toolkit";
import data from "./mock/Mock.json";

const initialState = data;

export const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      return [...state, action.payload];
    },
    updateTask: (state, action) => {
      return [
        ...state.map((s) => {
          if (s.id === action.payload.id) {
            return {
              ...s,
              ...action.payload,
            };
          } else {
            return { ...s };
          }
        }),
      ];
    },
    removeTask: (state, action) => {
      return [...state.filter((f) => f.id !== action.payload)];
    },
  },
});

export const { addTask, removeTask, updateTask } = taskSlice.actions;

export default taskSlice.reducer;
