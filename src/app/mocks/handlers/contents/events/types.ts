export interface EventsItem {
  rank: number;
  title: string;
  artist: string;
  score: number;
  coverImage: string;
}

export interface EventsResponse {
  data: EventsItem[];
  nextPage: number | null;
  hasNextPage: boolean;
}
