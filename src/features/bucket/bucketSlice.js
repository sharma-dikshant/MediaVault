import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("bucket")) || {};

const bucketSlice = createSlice({
  name: "bucket",
  initialState,
  reducers: {
    createBucket(state, action) {
      const { bucketName } = action.payload;
      state[bucketName] = [];
      localStorage.setItem("bucket", JSON.stringify(state));
    },
    deleteBucket(state, action) {
      const { bucketName } = action.payload;
      delete state[bucketName];
      localStorage.setItem("bucket", JSON.stringify(state));
    },
    updateBucketName(state, action) {
      const { oldBucketName, newBucketName } = action.payload;
      state[newBucketName] = state[oldBucketName];
      delete state[oldBucketName];
      localStorage.setItem("bucket", JSON.stringify(state));
    },
    addCard(state, action) {
      const { bucketName, card } = action.payload;
      state[bucketName].push(card);
      localStorage.setItem("bucket", JSON.stringify(state));
    },
    removeCard(state, action) {
      const { bucketName, cardId } = action.payload;
      state[bucketName] = state[bucketName].filter(
        (card) => card.id !== cardId
      );
      localStorage.setItem("bucket", JSON.stringify(state));
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
