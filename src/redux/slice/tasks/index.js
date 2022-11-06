import { createSlice } from "@reduxjs/toolkit";
import { add, put, remove, tasks } from "./asyncThunk";

const initialState = {
  tasks: [],
  isLoading: true,
  error: null,
};

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  extraReducers: {
    [tasks.pending]: (state, action) => {
      state.isLoading = true;
    },
    [tasks.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.tasks = action.payload;
    },
    [tasks.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [add.fulfilled]: (state, action) => {
      state.tasks.push(action.payload);
    },
    [put.fulfilled]: (state, action) => {
      const taskIndex = state.tasks.findIndex(
        (task) => task.id === action.payload.id
      );

      state.tasks[taskIndex] = action.payload;
    },
    [remove.fulfilled]: (state, action) => {
      const filteredTasks = state.tasks.filter(
        (task) => task.id !== action.payload
      );

      state.tasks = filteredTasks;
    },
  },
});

export default tasksSlice.reducer;
