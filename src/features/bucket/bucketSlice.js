import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  entertainment: [
    {
      id: crypto.randomUUID(),
      name: "Top 10 Comedy Movies",
      videoLink: "https://www.youtube.com/watch?v=gJmz31JywM0",
    },
    {
      name: "Best Action Scenes",
      videoLink: "https://www.youtube.com/watch?v=gJmz31JywM0",
    },
  ],
  education: [
    {
      id: crypto.randomUUID(),
      name: "Introduction to JavaScript",
      videoLink: "https://www.youtube.com/watch?v=gJmz31JywM0",
    },
    {
      id: crypto.randomUUID(),
      name: "Advanced CSS Techniques",
      videoLink: "https://www.youtube.com/watch?v=gJmz31JywM0",
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
      const { bucketName, cardId } = action.payload;
      state[bucketName] = state[bucketName].filter(
        (card) => card.id !== cardId
      );
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
