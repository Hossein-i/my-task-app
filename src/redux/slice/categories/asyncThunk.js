import { createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../../../dexie";
import { remove as removeTask } from "../tasks/asyncThunk";

export const categories = createAsyncThunk(
  "categories/getCategoriesDB",
  async (args, thunkAPI) => {
    try {
      args?.forEach(async (arg) => await db.table("categories").put(arg));
      const res = await db.table("categories").toArray();
      return res;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const add = createAsyncThunk(
  "categories/add",
  async (args, thunkAPI) => {
    try {
      const id = await db.table("categories").add(args);
      return { id, ...args };
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const remove = createAsyncThunk(
  "categories/remove",
  async (args, thunkAPI) => {
    try {
      await db.table("categories").delete(args);
      const tasks = await db.table("tasks").toArray();
      tasks.forEach((task) => {
        if (task.categoryId === args) thunkAPI.dispatch(removeTask(task.id));
      });
      return args;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const put = createAsyncThunk(
  "categories/put",
  async (args, thunkAPI) => {
    try {
      await db.table("categories").put(args);
      return args;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
