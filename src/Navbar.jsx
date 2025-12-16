import React from 'react';
import { FaSearch, FaBell, FaUser } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-gradient-to-b from-black/70 to-transparent p-4 transition-all duration-300">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center space-x-8">
          <h1 className="text-red-600 text-3xl font-bold cursor-pointer">ETHICS</h1>
          <ul className="flex items-center space-x-6 text-gray-200">
            <li className="hover:text-white cursor-pointer font-semibold">Home</li>
            <li className="hover:text-white cursor-pointer">TV Shows</li>
            <li className="hover:text-white cursor-pointer">Movies</li>
            <li className="hover:text-white cursor-pointer">Latest</li>
            <li className="hover:text-white cursor-pointer">My List</li>
          </ul>
        </div>
        <div className="flex items-center space-x-6 text-gray-200">
          <FaSearch className="hover:text-white cursor-pointer h-5 w-5" />
          <FaBell className="hover:text-white cursor-pointer h-5 w-5" />
          <FaUser className="hover:text-white cursor-pointer h-5 w-5" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;