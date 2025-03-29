import { useInfiniteQuery } from '@tanstack/react-query';
import axios from 'axios';
import type { HanteoResponse } from './types';

const LIMIT = 10;

export const useInfiniteHanteoQuery = () => {
  return useInfiniteQuery({
    queryKey: ['hanteo'],
    queryFn: async ({ pageParam = 1 }) => {
      const res = await axios.get<HanteoResponse>(`/api/hanteo?page=${pageParam}&limit=${LIMIT}`);
      return res.data;
    },
    initialPageParam: 1,
    getNextPageParam: lastPage => (lastPage.hasNextPage ? lastPage.nextPage : undefined),
  });
};
