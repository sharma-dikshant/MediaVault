import ReactPlayer from "react-player/youtube";
function Card({ card }) {
  return (
    <div>
      <div>
        <ReactPlayer
          url="https://www.youtube.com/watch?v=LXb3EKWsInQ"
          width={250}
          height={250}
        />
      </div>
      <div>
        <h2>{card.name}</h2>
      </div>
    </div>
  );
}

export default Card;
