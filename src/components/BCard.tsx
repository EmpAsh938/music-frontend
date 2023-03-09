import { SyntheticEvent, useState } from "react";
import { useAppContext } from "../context";
import { ITrack, IMusic } from "../interfaces";
import Card from "./Card";

const BCard = (props: IMusic) => {
  const [optionState, setOptionState] = useState<string>("default");
  const { handleAddFavorite, addMusicToPlaylist, playlist } = useAppContext();

  const handleChange = (event: SyntheticEvent<HTMLSelectElement>) => {
    setOptionState(event.currentTarget.value);
  };
  return (
    <div>
      <Card
        title={props.track.title}
        images={props.track.images}
        key={props.track.key}
      />
      <div className="d-flex flex-column gap-2">
        <button
          onClick={() => handleAddFavorite(props)}
          className="btn btn-primary"
        >
          {" "}
          Add to Favorite
        </button>
        <select
          className="form-select"
          aria-label="Default select example"
          value={optionState}
          onChange={handleChange}
        >
          <option value="default">Select Playlist</option>
          {playlist.length > 0
            ? playlist.map((item) => {
                return (
                  <option key={item.id} value={item.id}>
                    {item.name}
                  </option>
                );
              })
            : null}
        </select>
        <button
          onClick={() => addMusicToPlaylist(optionState, props)}
          className="btn btn-primary"
        >
          Add to Playlist
        </button>
      </div>
    </div>
  );
};

export default BCard;
