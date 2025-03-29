import { useMockContentsHandler } from '../useMockContentsHandler';
import { eventMockData } from './data';

export const getEventsContents = useMockContentsHandler({
  path: '/api/content/events',
  data: eventMockData.data,
});
