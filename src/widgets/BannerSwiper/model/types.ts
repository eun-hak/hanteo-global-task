export interface Banner {
  id: string;
  title: string;
  imageUrl: string;
  href: string;
  status?: 'ongoing' | 'ended';
  startDate: string;
  endDate: string;
  buttonLabel?: string;
}
