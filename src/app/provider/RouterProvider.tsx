import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import CategoryLayout from '@/app/layouts/CategoryLayout';
import ChargePage from '@/pages/ChargePage';
import ChartPage from '@/pages/ChartPage';
import EventPage from '@/pages/EventPage';
import NewsPage from '@/pages/NewsPage';
import StorePage from '@/pages/StorePage';
import WhookPage from '@/pages/WhookPage';

const RouterProvider = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CategoryLayout />}>
          <Route path="/" element={<ChartPage />} />
          <Route path="/whook" element={<WhookPage />} />
          <Route path="/store" element={<StorePage />} />
          <Route path="/charge" element={<ChargePage />} />
          <Route path="/event" element={<EventPage />} />
          <Route path="/news" element={<NewsPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default RouterProvider;
