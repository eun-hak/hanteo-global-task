import { useEffect, useRef } from 'react';
import { useCategorySwiper } from '@/shared/lib/store/useCategorySwiper';

export const useCategoryTabsController = () => {
  const { activeIndex, setActiveIndex } = useCategorySwiper();
  const tabRefs = useRef<Array<HTMLLIElement | null>>([]);
  const isFirstRender = useRef(true);

  useEffect(() => {
    const target = tabRefs.current[activeIndex];
    if (target) {
      target.scrollIntoView({
        behavior: isFirstRender.current ? 'auto' : 'smooth',
        inline: 'center',
        block: 'nearest',
      });
      isFirstRender.current = false;
    }
  }, [activeIndex]);

  return {
    activeIndex,
    setActiveIndex,
    tabRefs,
  };
};
