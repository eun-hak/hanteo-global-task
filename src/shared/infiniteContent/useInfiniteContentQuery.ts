import { useInfiniteQuery } from '@tanstack/react-query';
import { getRequest } from '@/shared/api/requestApi';
// getRequest 가져오기
import type { HanteoResponse } from './types';

const LIMIT = 10;

export const useInfiniteContentQuery = (type: string) => {
  return useInfiniteQuery({
    queryKey: ['List', type],
    queryFn: async ({ pageParam = 1 }) => {
      const url = `/api/content/${type}?page=${pageParam}&limit=${LIMIT}`;
      return getRequest<HanteoResponse>(url);
    },
    initialPageParam: 1,
    getNextPageParam: lastPage => (lastPage.hasNextPage ? lastPage.nextPage : undefined),
  });
};
