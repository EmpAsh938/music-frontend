import { useState } from "react";
import { useAppContext } from "../context";
import Card from "./Card";
import PCard from "./PCard";

const Playlist = () => {
  const [playlistText, setPlaylistText] = useState<string>("");
  const { playlist, createNewPlaylist } = useAppContext();

  return (
    <div className="p-2">
      <div>
        <h2>Playlist</h2>

        <div>
          <div className="mb-3" style={{ width: "200px" }}>
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="playlist"
              onChange={(e) => setPlaylistText(e.target.value)}
              value={playlistText}
            />
          </div>
          <button
            onClick={() => createNewPlaylist(playlistText)}
            type="button"
            className="btn btn-primary"
          >
            Create new Playlist
          </button>
        </div>
      </div>
      <div className="d-flex flex-wrap gap-4 mt-4">
        {playlist.length > 0
          ? playlist.map((item) => {
              return <PCard key={item.id} {...item} />;
            })
          : null}
      </div>
    </div>
  );
};

export default Playlist;
