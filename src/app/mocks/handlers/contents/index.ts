import { http, HttpResponse } from 'msw';
import { hanteoMockData } from './data';

export const getContents = http.get('/api/hanteo', async ({ request }) => {
  const url = new URL(request.url);
  const page = Number(url.searchParams.get('page') || '1');
  const limit = Number(url.searchParams.get('limit') || '10');

  const start = (page - 1) * limit;
  const end = page * limit;

  const slicedData = hanteoMockData.data.slice(start, end);
  const nextPage = end < hanteoMockData.data.length ? page + 1 : null;

  // ⏱ 1초 지연
  await new Promise(resolve => setTimeout(resolve, 1000));
  return HttpResponse.json(
    {
      data: slicedData,
      nextPage,
      hasNextPage: nextPage !== null,
    },
    { status: 200 }
  );
});
