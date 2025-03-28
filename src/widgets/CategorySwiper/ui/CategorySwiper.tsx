import { useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useCategorySwiper } from '@/shared/lib/store/useCategorySwiper';
import {
  ChargeContent,
  ChartContent,
  EventContent,
  NewsContent,
  StoreContent,
  WhookContent,
} from '@/widgets/CategoryContent';
import { CATEGORIES } from '@/widgets/CategoryTabs/model/constants';

const CategorySwiper = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  const isFirstRender = useRef(true);
  const { activeIndex, setActiveIndex } = useCategorySwiper();

  useEffect(() => {
    if (!swiperRef.current) return;
    swiperRef.current.slideTo(activeIndex, isFirstRender.current ? 0 : undefined);
    isFirstRender.current = false;
  }, [activeIndex]);

  return (
    <StyledSwiper
      onSwiper={swiper => (swiperRef.current = swiper)}
      onSlideChange={swiper => setActiveIndex(swiper.activeIndex)}
      slidesPerView={1}
      spaceBetween={12}
      touchRatio={0.4}
      threshold={20}
      freeMode={false}
      resistanceRatio={0}
      longSwipes={false}
      loop={false}
    >
      {/* lazy로딩 구현 필요 */}
      {CATEGORIES.map(({ label }) => (
        <SwiperSlide key={label}>
          {label === '차트' && <ChartContent />}
          {label === 'Whook' && <WhookContent />}
          {label === '이벤트' && <EventContent />}
          {label === '뉴스' && <NewsContent />}
          {label === '스토어' && <StoreContent />}
          {label === '충전소' && <ChargeContent />}
        </SwiperSlide>
      ))}
    </StyledSwiper>
  );
};

export default CategorySwiper;

const StyledSwiper = styled(Swiper)`
  width: 100%;
  height: 100%;
`;
