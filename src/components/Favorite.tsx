import { useAppContext } from "../context";
import Card from "./Card";

const Favorite = () => {
  const { favoriteMusic } = useAppContext();
  return (
    <div className=" p-4">
      <h2>Favorite</h2>
      <div className="d-flex flex-wrap gap-4">
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
    </div>
  );
};

export default Favorite;
