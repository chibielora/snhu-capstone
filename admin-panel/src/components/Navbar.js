import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ logo, onLogIn }) => {
  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center">
      <div className="flex items-center">
        <img src={logo} alt="Travlr Getaways" className="h-8 mr-3" />
        <span className="text-white font-bold text-lg">Travlr Getaways</span>
      </div>
      <Link to="/login" className="text-teal-400 hover:text-teal-300">Log In</Link>
    </nav>
  );
};

export default Navbar;
