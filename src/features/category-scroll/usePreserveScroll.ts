import { useEffect, useRef } from 'react';
import { getSession, setSession } from '@/shared/lib/storage/session';

const STORAGE_KEY = 'categoryTabScroll';

export const usePreserveScroll = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const rememberScroll = () => {
    const pos = scrollRef.current?.scrollLeft ?? 0;
    setSession(STORAGE_KEY, pos);
  };

  useEffect(() => {
    const saved = getSession<number>(STORAGE_KEY);
    if (scrollRef.current && typeof saved === 'number') {
      scrollRef.current.scrollLeft = saved;
    }
  }, []);

  return { scrollRef, rememberScroll };
};
