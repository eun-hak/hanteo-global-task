import { useMockContentsHandler } from '../useMockContentsHandler';
import { chartMockData } from './data';

export const getChartsContents = useMockContentsHandler({
  path: '/api/content/charts',
  data: chartMockData.data,
});
