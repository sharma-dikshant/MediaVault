import { useState } from "react";
import { useDispatch } from "react-redux";

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
    <div>
      <h1 className="text-2xl uppercase">
        <input
          type="text"
          defaultValue={bucket}
          onChange={(e) => setBucketName(e.target.value)}
          onBlur={() => handleUpdateBucketName(bucket)}
        />
      </h1>
      {vault[bucket]?.map((card, i) => (
        <Card card={card} key={i} bucketName={bucket} index={i} />
      ))}
      <Modal>
        <Modal.Open>
          <Button styleType="primary">ADD CARD</Button>
        </Modal.Open>
        <Modal.Window>
          <CreateCardForm bucketName={bucket} />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default Bucket;
