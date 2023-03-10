import Home from "./components/Home";
import Search from "./components/Search";
import Favorite from "./components/Favorite";
import Playlist from "./components/Playlist";
import { useAppContext } from "./context";
import { useKeycloak } from "@react-keycloak/web";

export default function App() {
  const { appStatus, handleAppStatus } = useAppContext();
  const { keycloak } = useKeycloak();
  const isLoggedIn = keycloak.authenticated;
  if (!isLoggedIn) {
    return (
      <div className="position-fixed top-0 start-0 w-100 h-100 bg-white d-flex align-items-center justify-content-center">
        <div className="d-flex  flex-column gap-4">
          <h2 className="text-center fw-bold">Login with Keycloak</h2>
          <button
            className="btn btn-primary"
            style={{ width: "100px", margin: "auto" }}
            onClick={() => keycloak.login()}
          >
            Login
          </button>
        </div>
      </div>
    );
  }
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
        <p
          className="text-white text-center font-weight-bold"
          onClick={() => keycloak.logout()}
          style={{ cursor: "pointer" }}
        >
          Logout
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
