import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from '@/pages/Home';

interface Props {
  children?: React.ReactNode;
}

const RouterProvider = ({ children }: Props) => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default RouterProvider;
