import { useDispatch } from "react-redux";
import ReactPlayer from "react-player/youtube";

import { removeCard } from "../bucket/bucketSlice";

import styles from "./Card.module.css";

import Modal from "../../ui/Modal";
import VideoPlayer from "../videoplayer/VideoPlayer";
import Button from "../../ui/Button";

function Card({ card, bucketName }) {
  const dispatch = useDispatch();
  function handleDelete() {
    dispatch(removeCard({ bucketName, cardId: card?.id }));
    console.log("Delete card", index);
  }

  return (
    <Modal>
      <Modal.Open>
        <div className={styles["card-container"]}>
          <div className={styles["card-video"]}>
            <ReactPlayer
              url={card?.videoLink}
              width="100%"
              height="150px"
              light={true}
            />
          </div>
          <div className={styles["card-title"]}>{card?.name}</div>
          <div className={styles["card-buttons"]}>
            <button className={styles["delete-button"]} onClick={handleDelete}>
              DELETE
            </button>
            <button className={styles["edit-button"]}>EDIT</button>
          </div>
        </div>
      </Modal.Open>
      <Modal.Window>
        <VideoPlayer card={card} />
      </Modal.Window>
    </Modal>
  );
}

export default Card;
