export interface StoreItem {
  rank: number;
  title: string;
  artist: string;
  score: number;
  coverImage: string;
}

export interface StoreResponse {
  data: StoreItem[];
  nextPage: number | null;
  hasNextPage: boolean;
}
