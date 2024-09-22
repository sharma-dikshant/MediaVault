import { useState } from "react";
import { useDispatch } from "react-redux";

import { createBucket } from "./bucketSlice";

import Button from "../../ui/Button";

function CreateBucketForm() {
  const dispatch = useDispatch();
  const [bucketName, setBucketName] = useState("");
  function handleCreateBucket(e) {
    e.preventDefault();
    if (!bucketName) return;
    // dispatch action to create bucket
    dispatch(createBucket({ bucketName }));
    // reset bucket name
    setBucketName("");
  }

  return (
    <div>
      <form onSubmit={handleCreateBucket}>
        <label htmlFor="bucketName">Bucket Name</label>
        <input
          type="text"
          name="bucketName"
          onChange={(e) => setBucketName(e.target.value)}
        />
        <Button styleType="submitBtn">ADD BUCKET</Button>
      </form>
    </div>
  );
}

export default CreateBucketForm;
