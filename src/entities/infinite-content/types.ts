export interface ContentItem {
  rank: number;
  title: string;
  artist: string;
  score: number;
  coverImage: string;
}

export interface ContentResponse {
  data: ContentItem[];
  nextPage?: number;
  hasNextPage: boolean;
}
