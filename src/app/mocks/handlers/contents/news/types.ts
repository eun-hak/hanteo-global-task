export interface NewsItem {
  rank: number;
  title: string;
  artist: string;
  score: number;
  coverImage: string;
}

export interface NewsResponse {
  data: NewsItem[];
  nextPage: number | null;
  hasNextPage: boolean;
}
