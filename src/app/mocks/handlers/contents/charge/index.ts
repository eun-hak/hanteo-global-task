import { useMockContentsHandler } from '../useMockContentsHandler';
import { chargeMockData } from './data';

export const getChargeContents = useMockContentsHandler({
  path: '/api/content/charge',
  data: chargeMockData.data,
});
