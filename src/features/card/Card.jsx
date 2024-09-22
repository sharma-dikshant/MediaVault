import ReactPlayer from "react-player/youtube";
import { removeCard } from "../bucket/bucketSlice";
import { useDispatch } from "react-redux";
import Modal from "../../ui/Modal";
import VideoPlayer from "../videoplayer/VideoPlayer";
function Card({ card, index, bucketName }) {
  const dispatch = useDispatch();
  function handleDelete() {
    dispatch(removeCard({ bucketName, cardIndex: index }));
    console.log("Delete card", index);
  }

  return (
    <Modal>
      <Modal.Open>
        <div className="border p-3 m-1 bg-slate-200">
          <div>
            <ReactPlayer
              url={card?.videoLink}
              width={150}
              height={150}
              light={true}
            />
          </div>
          <div>
            <h2>{card?.name}</h2>
          </div>
          <div className="flex justify-between">
            <button onClick={handleDelete}>DELETE</button>
            <button>EDIT</button>
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
