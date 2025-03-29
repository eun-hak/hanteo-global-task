import { useMockContentsHandler } from '../useMockContentsHandler';
import { storeMockData } from './data';

export const getStoreContents = useMockContentsHandler({
  path: '/api/content/store',
  data: storeMockData.data,
});
