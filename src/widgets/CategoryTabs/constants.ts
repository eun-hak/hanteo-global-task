import { ROUTES } from '@/shared/config/routes';

export const CATEGORIES = [
  { label: '차트', path: ROUTES.CHART },
  { label: 'Whook', path: ROUTES.WHOOK },
  { label: '이벤트', path: ROUTES.EVENT },
  { label: '뉴스', path: ROUTES.NEWS },
  { label: '스토어', path: ROUTES.STORE },
  { label: '충전소', path: ROUTES.CHARGE },
] as const;
