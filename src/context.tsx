import { useState, ReactNode, createContext, useContext } from "react";

import { IMusic, IPlaylist } from "./interfaces";
import { AppStatus } from "./types";

interface IAppContextValue {
  playlist: IPlaylist[];
  favoriteMusic: IMusic[];
  searchComplete: string[];
  appStatus: AppStatus;
  handleAppStatus: (str: AppStatus) => void;
  handleAddFavorite: (str: IMusic) => void;
  createNewPlaylist: (str: string) => void;
  addMusicToPlaylist: (id: string, music: IMusic) => void;
}

const AppContext = createContext<IAppContextValue>({} as IAppContextValue);

interface Props {
  children: ReactNode;
}

const AppProvider = ({ children }: Props) => {
  const [playlist, setPlaylist] = useState<IPlaylist[]>([]);
  const [favoriteMusic, setFavoriteMusic] = useState<IMusic[]>([]);
  const [searchComplete, setSearchComplete] = useState<string[]>([]);
  const [appStatus, setAppStatus] = useState<AppStatus>("home");

  const handleAppStatus = (param: AppStatus): void => {
    setAppStatus(param);
  };

  const handleAddFavorite = (param: IMusic) => {
    setFavoriteMusic([...favoriteMusic, param]);
  };

  const createNewPlaylist = (param: string) => {
    setPlaylist([
      ...playlist,
      { id: Date.now().toString(), name: param, music: [] },
    ]);
  };

  const addMusicToPlaylist = (id: string, music: IMusic) => {
    let newPlaylist = playlist.map((item) => {
      if (item.id === id) item.music = [...item.music, music];
      return item;
    });
    setPlaylist(newPlaylist);
  };
  return (
    <AppContext.Provider
      value={{
        playlist,
        favoriteMusic,
        searchComplete,
        appStatus,
        handleAppStatus,
        handleAddFavorite,
        createNewPlaylist,
        addMusicToPlaylist,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);

export default AppProvider;
