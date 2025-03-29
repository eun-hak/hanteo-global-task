import { http, HttpResponse } from 'msw';

interface PaginatedHandlerOptions<T> {
  path: string;
  data: T[];
  delay?: number;
}

export function useMockContentsHandler<T>({ path, data, delay = 1000 }: PaginatedHandlerOptions<T>) {
  return http.get(path, async ({ request }) => {
    const url = new URL(request.url);
    const page = Number(url.searchParams.get('page') || '1');
    const limit = Number(url.searchParams.get('limit') || '10');

    const start = (page - 1) * limit;
    const end = page * limit;

    const slicedData = data.slice(start, end);
    const nextPage = end < data.length ? page + 1 : null;

    await new Promise(resolve => setTimeout(resolve, delay));

    return HttpResponse.json(
      {
        data: slicedData,
        nextPage,
        hasNextPage: nextPage !== null,
      },
      { status: 200 }
    );
  });
}
