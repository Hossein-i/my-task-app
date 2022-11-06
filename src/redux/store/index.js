import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "../slice/categories";
import tasksReducer from "../slice/tasks";

export default configureStore({
  reducer: {
    categories: categoriesReducer,
    tasks: tasksReducer,
  },
});
