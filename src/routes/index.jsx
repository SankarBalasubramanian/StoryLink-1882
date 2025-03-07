import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Search from '../pages/Search';
import StorytellerProfile from '../pages/StorytellerProfile';
import Booking from '../pages/Booking';
import Login from '../pages/Login';
import ProtectedRoute from '../components/ProtectedRoute';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<Search />} />
      <Route path="/storyteller/:id" element={<StorytellerProfile />} />
      <Route
        path="/book/:id"
        element={
          <ProtectedRoute roles={['user', 'admin']}>
            <Booking />
          </ProtectedRoute>
        }
      />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default AppRoutes;