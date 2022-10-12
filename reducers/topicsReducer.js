import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import * as topicAPI from "../api/topic";

export const loadTopics = createAsyncThunk(
  "channels/loadTopics",
  async (_, { rejectWithValue }) => {
    try {
      const response = await topicAPI.getChannels();
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response);
    }
  }
);

const initialState = {
  byId: {},
  allIds: [],
  loading: true,
  active: null,
};

const topicsSlice = createSlice({
  name: "topics",
  initialState,
  reducers: {
    setActiveTopic(state, action) {
      state.active = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadTopics.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(loadTopics.fulfilled, (state, action) => {
        state.byId = {};
        state.allIds = [];
        state.loading = false;
        action.payload.c.forEach((topic) => {
          state.byId[topic.topic] = topic;
          state.allIds.push(topic.topic);
        });
      });
  },
});

export const { setActiveTopic } = topicsSlice.actions;

export default topicsSlice.reducer;