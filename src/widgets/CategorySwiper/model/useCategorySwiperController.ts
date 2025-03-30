import { useEffect, useRef } from 'react';
import type { Swiper as SwiperType } from 'swiper';
import { useCategorySwiper } from '@/shared/lib/store/useCategorySwiper';

export const useCategorySwiperController = (swiperRef: React.RefObject<SwiperType | null>) => {
  const isFirstRender = useRef(true);
  const { activeIndex, setActiveIndex } = useCategorySwiper();

  useEffect(() => {
    if (!swiperRef.current) return;
    swiperRef.current.slideTo(activeIndex, isFirstRender.current ? 0 : undefined);
    isFirstRender.current = false;
  }, [activeIndex]);

  const handleSlideChange = (index: number) => {
    setActiveIndex(index);
  };

  return { handleSlideChange };
};
