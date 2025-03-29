export interface ChargeItem {
  rank: number;
  title: string;
  artist: string;
  score: number;
  coverImage: string;
}

export interface ChargeResponse {
  data: ChargeItem[];
  nextPage: number | null;
  hasNextPage: boolean;
}
