import { IPlaylist } from "../interfaces";

const PCard = (props: IPlaylist) => {
  return (
    <div className="card d-inline-block mx-2" style={{ width: "200px" }}>
      <div className="card-header text-capitalize bg-primary text-white">
        {props.name} ({props.music.length} songs)
      </div>
      <ol className="list-group list-group-numbered bg-secondary-subtle p-1 h-100">
        {props.music.length > 0
          ? props.music.map((item) => {
              return (
                <li style={{ fontSize: "12px" }} key={item.track.key}>
                  {item.track.title}
                </li>
              );
            })
          : null}
      </ol>
    </div>
  );
};

export default PCard;
