import BannerCarousel from '@/widgets/BannerSwiper';
import CategorySwiper from '@/widgets/CategorySwiper';
import CategoryTabs from '@/widgets/CategoryTabs';
import Footer from '@/widgets/Footer';

const HomePage = () => {
  return (
    <div>
      <CategoryTabs />
      <BannerCarousel />
      <CategorySwiper />
      <Footer />
    </div>
  );
};

export default HomePage;
