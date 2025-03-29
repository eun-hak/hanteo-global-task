export interface WhookItem {
  rank: number;
  title: string;
  artist: string;
  score: number;
  coverImage: string;
}

export interface WhookResponse {
  data: WhookItem[];
  nextPage: number | null;
  hasNextPage: boolean;
}
