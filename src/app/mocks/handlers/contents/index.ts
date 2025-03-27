// src/app/mocks/handlers/hanteo.ts
import { http, HttpResponse } from 'msw';
import { hanteoMockData } from '../data';

export const getContents = http.get('/api/hanteo', () => {
  return HttpResponse.json(hanteoMockData, {
    status: 200,
  });
});
