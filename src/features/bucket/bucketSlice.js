import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  entertainment: [
    {
      name: "Top 10 Comedy Movies",
      videoLink: "./newton_-_63040 (720p).mp4",
    },
    {
      name: "Best Action Scenes",
      videoLink: "./newton_-_63040 (720p).mp4",
    },
  ],
  education: [
    {
      name: "Introduction to JavaScript",
      videoLink: "./newton_-_63040 (720p).mp4",
    },
    {
      name: "Advanced CSS Techniques",
      videoLink: "./newton_-_63040 (720p).mp4",
    },
  ],
};

const bucketSlice = createSlice({
  name: "bucket",
  initialState,
  reducers: {
    createBucket(state, action) {
      const { bucketName } = action.payload;
      state[bucketName] = [];
    },
    deleteBucket(state, action) {
      const { bucketName } = action.payload;
      delete state[bucketName];
    },
    updateBucketName(state, action) {
      const { oldBucketName, newBucketName } = action.payload;
      state[newBucketName] = state[oldBucketName];
      delete state[oldBucketName];
    },
    addCard(state, action) {
      const { bucketName, card } = action.payload;
      state[bucketName].push(card);
    },
    removeCard(state, action) {
      const { bucketName, cardIndex } = action.payload;
      state[bucketName].splice(cardIndex, 1);
    },
  },
});

export const {
  removeCard,
  addCard,
  createBucket,
  deleteBucket,
  updateBucketName,
} = bucketSlice.actions;

export default bucketSlice.reducer;
