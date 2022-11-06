import { createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../../../dexie";

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
  async ({ id }, thunkAPI) => {
    try {
      await db.table("categories").delete(id);
      return id;
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
