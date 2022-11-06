import { createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../../../dexie";

export const tasks = createAsyncThunk(
  "tasks/getTasksDB",
  async (args, thunkAPI) => {
    try {
      args?.forEach(async (arg) => await db.table("tasks").put(arg));
      const res = await db.table("tasks").toArray();
      return res;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const add = createAsyncThunk("tasks/add", async (args, thunkAPI) => {
  try {
    const id = await db.table("tasks").add(args);
    return { id, ...args };
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});
export const put = createAsyncThunk("tasks/put", async (args, thunkAPI) => {
  try {
    await db.table("tasks").put(args);
    return args;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});
export const remove = createAsyncThunk(
  "tasks/remove",
  async (args, thunkAPI) => {
    try {
      await db.table("tasks").delete(args);
      return args;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
