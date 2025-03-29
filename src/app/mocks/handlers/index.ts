import { getChargeContents } from './contents/charge';
import { getChartsContents } from './contents/charts';
import { getEventsContents } from './contents/events';
import { getNewsContents } from './contents/news';
import { getStoreContents } from './contents/store';
import { getWhookContents } from './contents/whook';

export const handlers = [
  getChargeContents,
  getEventsContents,
  getStoreContents,
  getChartsContents,
  getWhookContents,
  getNewsContents,
];
