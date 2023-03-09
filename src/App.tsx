import Home from "./components/Home";
import Search from "./components/Search";
import Favorite from "./components/Favorite";
import Playlist from "./components/Playlist";
import { useAppContext } from "./context";

export default function App() {
  const { appStatus, handleAppStatus } = useAppContext();

  return (
    <div className="py-4" style={{ marginLeft: "250px", minHeight: "100vh" }}>
      {/* Sidebar */}
      <div
        className="fixed-top bg-primary d-flex flex-column gap-4 pt-4"
        style={{ height: "100vh", width: "250px" }}
      >
        <p
          onClick={() => handleAppStatus("home")}
          className="text-white text-center font-weight-bold"
          style={{ cursor: "pointer" }}
        >
          Home
        </p>
        <p
          onClick={() => handleAppStatus("search")}
          className="text-white text-center font-weight-bold"
          style={{ cursor: "pointer" }}
        >
          Search
        </p>
        <p
          onClick={() => handleAppStatus("favorite")}
          className="text-white text-center font-weight-bold"
          style={{ cursor: "pointer" }}
        >
          Favorite
        </p>
        <p
          onClick={() => handleAppStatus("playlist")}
          className="text-white text-center font-weight-bold"
          style={{ cursor: "pointer" }}
        >
          Playlist
        </p>
      </div>
      {/* Home */}
      {appStatus === "home" ? <Home /> : null}
      {/* Search */}
      {appStatus === "search" ? <Search /> : null}
      {/* Favorite */}
      {appStatus === "favorite" ? <Favorite /> : null}
      {/* Playlist */}
      {appStatus === "playlist" ? <Playlist /> : null}
    </div>
  );
}
