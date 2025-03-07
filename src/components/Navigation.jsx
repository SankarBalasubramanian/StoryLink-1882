import { Link } from 'react-router-dom';
import { BiBook, BiSearch, BiUser, BiLogOut } from 'react-icons/bi';
import { useAuth } from '../contexts/AuthContext';

const Navigation = () => {
  const { user, logout, isAuthenticated } = useAuth();

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <BiBook className="text-2xl text-primary-600" />
            <span className="font-bold text-xl text-gray-800">StoryTime</span>
          </Link>
          <div className="flex items-center space-x-6">
            <Link
              to="/search"
              className="flex items-center space-x-1 text-gray-600 hover:text-primary-600"
            >
              <BiSearch className="text-xl" />
              <span>Find Storytellers</span>
            </Link>
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <span className="text-gray-600">Welcome, {user.name}</span>
                <button
                  onClick={logout}
                  className="flex items-center space-x-1 bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700"
                >
                  <BiLogOut className="text-xl" />
                  <span>Sign Out</span>
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="flex items-center space-x-1 bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700"
              >
                <BiUser className="text-xl" />
                <span>Sign In</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;