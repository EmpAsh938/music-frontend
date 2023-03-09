import { useAppContext } from "../context";
import Card from "./Card";
import PCard from "./PCard";

const Home = () => {
  const { favoriteMusic, playlist } = useAppContext();
  return (
    <div>
      <div className="bg-white border-bottom d-flex align-items-center justify-content-between">
        <img
          src="/images/music-node.avif"
          className="img-fluid"
          style={{ width: "250px" }}
          alt="music node"
        />
        <p className="text-wrap" style={{ width: "300px" }}>
          Let the Music Speak! Music is the answer. Born to rock Force to Work.
        </p>
      </div>
      <div className="p-4">
        <h2>Favorite</h2>
        <div className="" style={{ overflowX: "scroll", whiteSpace: "nowrap" }}>
          {favoriteMusic.length > 0
            ? favoriteMusic.map((item) => {
                return (
                  <Card
                    key={item.track.key}
                    title={item.track.title}
                    images={item.track.images}
                  />
                );
              })
            : null}
        </div>
        <h2>Playlist</h2>
        <div className="" style={{ overflowX: "scroll", whiteSpace: "nowrap" }}>
          {playlist.length > 0
            ? playlist.map((item) => {
                return <PCard key={item.id} {...item} />;
              })
            : null}
        </div>
      </div>
    </div>
  );
};

export default Home;
