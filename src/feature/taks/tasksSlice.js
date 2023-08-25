import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    title: "Task 1",
    description: "Task 1 Description",
    completed: false,
  },
  {
    id: "2",
    title: "Task 2",
    description: "Task 2 Description",
    completed: false,
  },
];

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
