import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ logo, isLoggedIn, setIsLoggedIn, isAdmin }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoggedIn(false);
    alert('You have been logged out');
    navigate('/login');
  };

  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center">
      <div className="flex items-center">
        <img src={logo} alt="Travlr Getaways" className="h-8 mr-3" />
        <span className="text-white font-bold text-lg">Travlr Getaways</span>
      </div>
      <div>
        {isLoggedIn ? (
          <div className="flex items-center">
            <span className="text-white mr-4">
              {isAdmin ? 'Welcome, Admin' : 'Welcome, User'}
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
