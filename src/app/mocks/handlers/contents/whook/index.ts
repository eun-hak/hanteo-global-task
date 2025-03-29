import { useMockContentsHandler } from '../useMockContentsHandler';
import { whookMockData } from './data';

export const getWhookContents = useMockContentsHandler({
  path: '/api/content/whook',
  data: whookMockData.data,
});
