import { Outlet } from 'react-router-dom';
import BannerCarousel from '@/widgets/BannerCarousel';
import CategoryTabs from '@/widgets/CategoryTabs';

const CategoryLayout = () => {
  return (
    <>
      <CategoryTabs />
      <BannerCarousel />
      <Outlet />
    </>
  );
};

export default CategoryLayout;
