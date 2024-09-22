import ReactPlayer from "react-player";

function VideoPlayer({ card }) {
  return (
    <div>
      <h2>{card?.name}</h2>
      <ReactPlayer
        url={card?.videoLink}
        width={450}
        height={450}
        controls={true}
      />
    </div>
  );
}

export default VideoPlayer;
