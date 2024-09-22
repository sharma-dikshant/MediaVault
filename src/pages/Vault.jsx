import { useSelector } from "react-redux";

import styles from "./Vault.module.css";

import Modal from "../ui/Modal";
import CreateBucketForm from "../features/bucket/CreateBucketForm";
import Bucket from "../features/bucket/Bucket";

function Vault() {
  const vault = useSelector((state) => state.bucket) || {};

  return (
    <div className={styles["vault-container"]}>
      <div className={styles["bucket-grid"]}>
        {Object.keys(vault).map((bucket, i) => {
          return (
            <div key={i} className={styles["bucket-item"]}>
              <Bucket bucket={bucket} vault={vault} />
            </div>
          );
        })}
      </div>
      <div className={styles["modal-button-container"]}>
        <Modal>
          <Modal.Open>
            <button className={styles["add-bucket-button"]}>
              ADD NEW BUCKET
            </button>
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
