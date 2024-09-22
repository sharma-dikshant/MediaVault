import { useState } from "react";
import { useDispatch } from "react-redux";

import styles from "./Bucket.module.css";

import { updateBucketName } from "./bucketSlice";

import Card from "../card/Card";
import Modal from "../../ui/Modal";
import CreateCardForm from "../card/CreateCardForm";
import Button from "../../ui/Button";

function Bucket({ bucket, vault }) {
  const dispatch = useDispatch();

  const [bucketName, setBucketName] = useState("");
  function handleUpdateBucketName(oldBucketName) {
    if (!bucketName) return;
    // dispatch action to update bucket name
    dispatch(
      updateBucketName({
        oldBucketName,
        newBucketName: bucketName,
      })
    );
    // reset bucket name
    setBucketName("");
  }
  //   return <div>bucket</div>
  return (
    <div className={styles["bucket-container"]}>
      <div className={styles["bucket-header"]}>
        <input
          type="text"
          className={styles["bucket-title-input"]}
          defaultValue={bucket}
          onChange={(e) => setBucketName(e.target.value)}
          onBlur={() => handleUpdateBucketName(bucket)}
        />
      </div>
      <div className={styles["card-list"]}>
        {vault[bucket]?.map((card, i) => (
          <div key={i} className={styles["card-item"]}>
            <Card card={card} bucketName={bucket} index={i} />
          </div>
        ))}
      </div>
      <Modal>
        <Modal.Open>
          <button className={styles["add-card-button"]}>ADD CARD</button>
        </Modal.Open>
        <Modal.Window>
          <CreateCardForm bucketName={bucket} />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default Bucket;
