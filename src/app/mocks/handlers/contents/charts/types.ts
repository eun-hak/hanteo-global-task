export interface ChartsItem {
  rank: number;
  title: string;
  artist: string;
  score: number;
  coverImage: string;
}

export interface ChartsResponse {
  data: ChartsItem[];
  nextPage: number | null;
  hasNextPage: boolean;
}
