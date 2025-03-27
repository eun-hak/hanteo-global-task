import { Outlet } from 'react-router-dom';
import CategoryTabs from '@/widgets/CategoryTabs';

const CategoryLayout = () => {
  return (
    <>
      <CategoryTabs />
      <Outlet />
    </>
  );
};

export default CategoryLayout;
