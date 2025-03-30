import { useRef } from 'react';
import styled from '@emotion/styled';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  ChargeContent,
  ChartContent,
  EventContent,
  NewsContent,
  StoreContent,
  WhookContent,
} from '@/widgets/CategoryContent';
import { CATEGORIES } from '@/widgets/CategoryTabs/model/constants';
import { useCategorySwiperSlider } from '../model/useCategorySwiperSlider';

const CategorySwiper = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  const { handleSlideChange } = useCategorySwiperSlider(swiperRef);
  return (
    <StyledSwiper
      onSwiper={swiper => (swiperRef.current = swiper)}
      onSlideChange={swiper => handleSlideChange(swiper.activeIndex)}
      slidesPerView={1}
      spaceBetween={12}
      touchRatio={0.4}
      threshold={20}
      freeMode={false}
      resistanceRatio={0}
      longSwipes={false}
      loop={false}
    >
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
