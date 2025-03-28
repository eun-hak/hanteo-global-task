import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import HomePage from '@/pages/HomePage';
import { ROUTES } from '@/shared/config/routes';

const RouterProvider = () => {
  return (
    <Router>
      <Routes>
        <Route path={ROUTES.HOME} element={<HomePage />} />
      </Routes>
    </Router>
  );
};

export default RouterProvider;
