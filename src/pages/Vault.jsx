import { useSelector } from "react-redux";

import Modal from "../ui/Modal";
import CreateBucketForm from "../features/bucket/CreateBucketForm";
import Bucket from "../features/bucket/Bucket";
import Button from "../ui/Button";

function Vault() {
  const vault = useSelector((state) => state.bucket) || {};

  return (
    <div>
      <div className="flex">
        {Object.keys(vault).map((bucket, i) => {
          return (
            <div key={i}>
              <Bucket bucket={bucket} vault={vault} />
            </div>
          );
        })}
      </div>
      <div className="m-2">
        <Modal>
          <Modal.Open>
            <Button>ADD NEW BUCKET</Button>
          </Modal.Open>
          <Modal.Window>
            <CreateBucketForm />
          </Modal.Window>
        </Modal>
      </div>
    </div>
  );
}

export default Vault;
