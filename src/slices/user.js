import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../utilities/axios";

const initialState = {
  user: [],
  status: "idle",
  error: null,
};

export const fetchUser = createAsyncThunk("user/fetchUser", async () => {
  let data;
  try {
    const response = await axios.get(`/me`);
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
  name: "user",
  initialState,
  reducers: {
    resetUser: (state) => {
      state.status = "idle";
      state.user = [];
    },
  },
  extraReducers: {
    [fetchUser.pending]: (state) => {
      state.status = "loading";
    },
    [fetchUser.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.user = action.payload;
    },
    [fetchUser.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    },
  },
});
export const { resetUser } = slice.actions;
export const reducer = slice.reducer;

export default slice;
