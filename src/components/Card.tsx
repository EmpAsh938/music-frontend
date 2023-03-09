import { ITrack } from "../interfaces";
const Card = ({ images, title }: ITrack) => {
  return (
    <div
      className="card d-inline-block mx-2 overflow-hidden"
      style={{ width: "200px" }}
    >
      <img className="img-fluid" src={images.coverart} alt={images.coverart} />

      <div className="card-body">
        <p className="card-text text-center" style={{ fontSize: "10px" }}>
          {title}
        </p>
      </div>
    </div>
  );
};

export default Card;
