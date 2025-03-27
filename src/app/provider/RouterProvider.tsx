import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import CategoryLayout from '@/app/layouts/CategoryLayout';
import ChargePage from '@/pages/ChargePage';
import ChartPage from '@/pages/ChartPage';
import EventPage from '@/pages/EventPage';
import NewsPage from '@/pages/NewsPage';
import StorePage from '@/pages/StorePage';
import WhookPage from '@/pages/WhookPage';
import { ROUTES } from '@/shared/config/routes';

const RouterProvider = () => {
  return (
    <Router>
      <Routes>
        <Route path={ROUTES.CHART} element={<CategoryLayout />}>
          <Route index element={<ChartPage />} />
          <Route path={ROUTES.WHOOK} element={<WhookPage />} />
          <Route path={ROUTES.STORE} element={<StorePage />} />
          <Route path={ROUTES.CHARGE} element={<ChargePage />} />
          <Route path={ROUTES.EVENT} element={<EventPage />} />
          <Route path={ROUTES.NEWS} element={<NewsPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default RouterProvider;
