import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from '@/pages/Home';

const RouterProvider = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default RouterProvider;
