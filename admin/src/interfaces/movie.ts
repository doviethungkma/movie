export interface IEpisode {
  _id?: string;
  id?: number;
  title?: string;
  thumb?: string;
  description?: string;
  time?: string;
  url?: string;
}

export interface IMovie {
  _id?: string;
  name: string;
  category?: string;
  nameImage?: string;
  year?: string;
  country?: string;
  description?: string;
  actor?: Array<string>;
  type?: Array<string>;
  totalEp: number;
  thumb: string;
  trailer?: string;
  acceptable: string;
  tags?: Array<string>;
  episodes?: Array<IEpisode>;
  status?: string;
}
