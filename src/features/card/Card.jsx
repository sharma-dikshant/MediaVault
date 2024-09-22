import { useDispatch } from "react-redux";
import ReactPlayer from "react-player/youtube";

import { removeCard } from "../bucket/bucketSlice";

import styles from "./Card.module.css";

import Modal from "../../ui/Modal";
import VideoPlayer from "../videoplayer/VideoPlayer";
import Button from "../../ui/Button";
import CreateEditCardForm from "./CreateEditCardForm";

function Card({ card, bucketName }) {
  const dispatch = useDispatch();
  function handleDelete() {
    dispatch(removeCard({ bucketName, cardId: card?.id }));
    console.log("Delete card", index);
  }

  return (
    <Modal>
      <div className={styles["card-container"]}>
        <Modal.Open>
          <div className={styles["card-video"]}>
            <ReactPlayer
              url={card?.videoLink}
              width="100%"
              height="150px"
              light={true}
            />
          </div>
        </Modal.Open>

        <div className={styles["card-title"]}>{card?.name}</div>
        <div className={styles["card-buttons"]}>
          <button className={styles["delete-button"]} onClick={handleDelete}>
            DELETE
          </button>
          <Modal>
            <Modal.Open>
              <button className={styles["edit-button"]}>EDIT</button>
            </Modal.Open>
            <Modal.Window>
              <CreateEditCardForm
                bucketName={bucketName}
                edit={true}
                card={card}
              />
            </Modal.Window>
          </Modal>
        </div>
      </div>
      <Modal.Window>
        <VideoPlayer card={card} />
      </Modal.Window>
    </Modal>
  );
}

export default Card;
