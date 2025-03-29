export interface CartsItem {
  rank: number;
  title: string;
  artist: string;
  score: number;
  coverImage: string;
}

export interface ChartsResponse {
  data: CartsItem[];
  nextPage: number | null;
  hasNextPage: boolean;
}
