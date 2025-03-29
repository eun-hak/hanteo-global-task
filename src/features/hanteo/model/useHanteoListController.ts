// features/hanteoList/model/useHanteoList.ts
import { useCallback, useRef } from 'react';
import { useInfiniteHanteoQuery } from './useInfiniteHanteoQuery';

export const useHanteoListController = () => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } = useInfiniteHanteoQuery();

  const isFetchingRef = useRef(false);

  const flatData = data?.pages.flatMap(page => page.data) ?? [];

  const loadMore = useCallback(() => {
    if (!hasNextPage || isFetchingRef.current) return;
    isFetchingRef.current = true;
    fetchNextPage().finally(() => {
      setTimeout(() => {
        isFetchingRef.current = false;
      }, 100);
    });
  }, [fetchNextPage, hasNextPage]);

  return {
    flatData,
    loadMore,
    isLoading,
    isFetchingNextPage,
  };
};
