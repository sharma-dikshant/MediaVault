import ReactPlayer from "react-player";
import styles from "./VideoPlayer.module.css";

function VideoPlayer({ card }) {
  return (
    <div className={styles["video-player-container"]}>
      <h2 className={styles["video-title"]}>{card?.name}</h2>
      <div className={styles["video-player"]}>
        <ReactPlayer
          url={card?.videoLink}
          width="100%"
          height="300px"
          controls={true}
        />
      </div>
    </div>
  );
}

export default VideoPlayer;
