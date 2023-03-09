export interface ICoverPicture {
  coverart: string;
}

export interface ITrack {
  key: string;
  title: string;
  images: ICoverPicture;
}

export interface IMusic {
  track: ITrack;
}

export interface IPlaylist {
  id: string;
  name: string;
  music: IMusic[];
}
