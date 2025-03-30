import { useCallback, useRef } from 'react';
import { useInfiniteContentQuery } from '@/shared/infiniteContent/useInfiniteContentQuery';

export const useInfiniteContentLoader = (type: string) => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } = useInfiniteContentQuery(type);

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
