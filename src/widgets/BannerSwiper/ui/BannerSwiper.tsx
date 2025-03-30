import { useMemo, useState } from 'react';
import styled from '@emotion/styled';
import debounce from 'lodash.debounce';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { bannerList } from '../model/bannerData';
import BannerCard from './BannerCard';
import CustomDots from './CustomDots';

const BannerSwiper = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const debouncedSetIndex = useMemo(() => debounce((index: number) => setActiveIndex(index), 100), []);
  return (
    <StyledSwiper
      spaceBetween={12}
      slidesPerView={1.12}
      longSwipes={false}
      touchRatio={0.4}
      threshold={20}
      freeMode={false}
      resistanceRatio={0}
      centeredSlides
      loop
      watchSlidesProgress
      onSlideChange={swiper => debouncedSetIndex(swiper.realIndex)}
    >
      {bannerList.map(banner => (
        <SwiperSlide key={banner.id}>
          <BannerCard banner={banner} />
        </SwiperSlide>
      ))}
      <CustomDots realIndex={activeIndex} />
    </StyledSwiper>
  );
};

export default BannerSwiper;

const StyledSwiper = styled(Swiper)`
  width: 100%;
  padding-top: 12px;
  padding-bottom: 12px;

  .swiper-pagination-bullets {
    display: flex;
    justify-content: center;
    gap: 6px;
  }

  .swiper-pagination-bullet {
    background-color: ${({ theme }) => theme.colors.gray};
    opacity: 1;
    width: 7px;
    height: 7px;
  }

  .swiper-pagination-bullet-active {
    background-color: ${({ theme }) => theme.colors.accent};
  }
`;
