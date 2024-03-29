interface IEpisode {
  id: number;
  thumb: string;
  title?: string;
  description?: string;
  time?: string;
  url: string;
}

export interface IMovie {
  name: string;
  category: string;
  nameImage: string;
  year?: string;
  country?: string;
  description?: string;
  actor?: Array<string>;
  type?: Array<string>;
  totalEp: number;
  thumb: string;
  acceptable: string;
  tags?: Array<string>;
  episodes: Array<IEpisode>;
}
