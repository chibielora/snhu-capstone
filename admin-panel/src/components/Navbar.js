import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../api/auth';
import { useUser } from '../account/UserContext';

const Navbar = ({ logo }) => {
  const user = useUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout()
    navigate('/login');
  };

  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center">
      <div className="flex items-center gap-4">
        <Link to="/">
          <img src={logo} alt="Travlr Getaways" className="h-8 mr-3" />
        </Link>
        <Link to="/">
          <span className="text-white font-bold text-lg">Travlr Getaways</span>
        </Link>
        {user && (
          <>
            <Link to="/trips">Trips</Link>
            <Link to="/blog-posts">Blog</Link>
          </>
        )}
      </div>
      <div>
        {user !== null ? (
          <div className="flex items-center">
            <span className="text-white mr-4">
              Welcome {user.name}
            </span>
            <button
              onClick={handleLogout}
              className="text-teal-400 hover:text-teal-300"
            >
              Log Out
            </button>
          </div>
        ) : (
          <Link to="/login" className="text-teal-400 hover:text-teal-300">
            Log In
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
