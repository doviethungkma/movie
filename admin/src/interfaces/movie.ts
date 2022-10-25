export interface IEpisode {
  id: number;
  thumb: string;
  title?: string;
  description?: string;
  time?: string;
  url: string;
}

export interface IMovie {
  _id: string;
  name: string;
  nameImage: string;
  year?: string;
  country?: string;
  description?: string;
  actor?: Array<string>;
  type?: Array<string>;
  totalEp: number;
  thumb: string;
  trailer: string;
  acceptable: string;
  tags?: Array<string>;
  episodes?: Array<IEpisode>;
}
