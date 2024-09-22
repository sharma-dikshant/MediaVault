import { useState } from "react";
import { useDispatch } from "react-redux";

import { createBucket } from "./bucketSlice";

import styles from "./CreateBucketForm.module.css";


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
    <div className={styles["form-container"]}>
      <form onSubmit={handleCreateBucket}>
        <label className={styles["form-label"]} htmlFor="bucketName">
          Bucket Name
        </label>
        <input
          className={styles["form-input"]}
          type="text"
          name="bucketName"
          onChange={(e) => setBucketName(e.target.value)}
          value={bucketName}
        />
        <button className={styles["submit-btn"]} type="submit">
          ADD BUCKET
        </button>
      </form>
    </div>
  );
}

export default CreateBucketForm;
