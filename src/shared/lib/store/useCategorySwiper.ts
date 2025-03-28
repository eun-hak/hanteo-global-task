import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface CategorySwiperState {
  activeIndex: number;
  setActiveIndex: (index: number) => void;
}

export const useCategorySwiper = create(
  persist<CategorySwiperState>(
    set => ({
      activeIndex: 0,
      setActiveIndex: index => set({ activeIndex: index }),
    }),
    {
      name: 'category-swiper',
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
