export interface HanteoItem {
  rank: number;
  title: string;
  artist: string;
  score: number;
  coverImage: string;
}

export interface HanteoResponse {
  data: HanteoItem[];
  nextPage?: number;
  hasNextPage: boolean;
}
