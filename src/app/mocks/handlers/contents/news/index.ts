import { useMockContentsHandler } from '../useMockContentsHandler';
import { newsMockData } from './data';

export const getNewsContents = useMockContentsHandler({
  path: '/api/content/news',
  data: newsMockData.data,
});
