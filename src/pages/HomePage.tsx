import BannerCarousel from '@/widgets/BannerCarousel';
import CategorySwiper from '@/widgets/CategorySwiper';
import CategoryTabs from '@/widgets/CategoryTabs';

const HomePage = () => {
  return (
    <div>
      <CategoryTabs />
      <BannerCarousel />
      <CategorySwiper />
    </div>
  );
};

export default HomePage;
