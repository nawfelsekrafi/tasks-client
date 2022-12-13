import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../utilities/axios";

const initialState = {
  myTasks: {
    data: [],
    status: "idle",
    error: null,
  },
  tasksSharedToMe: { data: [], status: "idle", error: null },
  newTask: {
    data: [],
    status: "idle",
    error: null,
  },
  status: "idle",
  error: null,
};

export const fetchTasks = createAsyncThunk("tasks", async () => {
  let data;
  try {
    const response = await axios.get(`/tasks`);
    data = await response.data.data;
    if ((response.status = 200)) {
      return data;
    }
    throw new Error(response.statusText);
  } catch (err) {
    console.log(err);
    return Promise.reject(err.message ? err.message : data?.message);
  }
});
export const fetchTasksSharedToMe = createAsyncThunk(
  "tasks/shared/me",
  async () => {
    let data;
    try {
      const response = await axios.get(`tasks/shared/me`);
      data = await response.data.data;
      if ((response.status = 200)) {
        return data;
      }
      throw new Error(response.statusText);
    } catch (err) {
      console.log(err);
      return Promise.reject(err.message ? err.message : data?.message);
    }
  }
);
export const createTask = createAsyncThunk("tasks/post", async (task) => {
  let data;
  try {
    const response = await axios.post(`tasks`, { ...task });
    data = await response.data.data;
    if ((response.status = 200)) {
      return data;
    }
    throw new Error(response.statusText);
  } catch (err) {
    console.log(err);
    return Promise.reject(err.message ? err.message : data?.message);
  }
});

const slice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    resetTasks: (state) => {
      state.myTasks.status = "idle";
      state.myTasks.data = [];
      state.tasksSharedToMe.data = [];
    },
  },
  extraReducers: {
    [fetchTasks.pending]: (state) => {
      state.myTasks.status = "loading";
    },
    [fetchTasks.fulfilled]: (state, action) => {
      state.myTasks.status = "succeeded";
      state.myTasks.data = action.payload;
    },
    [fetchTasks.rejected]: (state, action) => {
      state.myTasks.status = "failed";
      state.myTasks.error = action.payload;
    },
    [fetchTasksSharedToMe.pending]: (state) => {
      state.tasksSharedToMe.status = "loading";
    },
    [fetchTasksSharedToMe.fulfilled]: (state, action) => {
      state.tasksSharedToMe.status = "succeeded";
      state.tasksSharedToMe.data = action.payload;
    },
    [fetchTasksSharedToMe.rejected]: (state, action) => {
      state.tasksSharedToMe.status = "failed";
      state.tasksSharedToMe.error = action.payload;
    },
    [createTask.pending]: (state) => {
      state.newTask.status = "loading";
    },
    [createTask.fulfilled]: (state, action) => {
      state.newTask.status = "succeeded";
      state.newTask.data = action.payload;
    },
    [createTask.rejected]: (state, action) => {
      state.newTask.status = "failed";
      state.newTask.error = action.payload;
    },
  },
});
export const { resetTasks } = slice.actions;
export const reducer = slice.reducer;

export default slice;
