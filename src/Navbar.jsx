import React, { useState, useEffect } from 'react';
import { FaSearch, FaBell, FaUser, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll to change background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 w-full z-50 p-4 transition-colors duration-300 ${
        isScrolled || isMobileMenuOpen ? 'bg-black' : 'bg-gradient-to-b from-black/70 to-transparent'
      }`}
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center space-x-8">
          <h1 className="text-red-600 text-3xl font-bold cursor-pointer">ETHICS</h1>
          
          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center space-x-6 text-gray-200">
            <li className="hover:text-white cursor-pointer font-semibold">Home</li>
            <li className="hover:text-white cursor-pointer transition-colors">TV Shows</li>
            <li className="hover:text-white cursor-pointer transition-colors">Movies</li>
            <li className="hover:text-white cursor-pointer transition-colors">Latest</li>
            <li className="hover:text-white cursor-pointer transition-colors">My List</li>
          </ul>
        </div>

        <div className="flex items-center space-x-6 text-gray-200">
          <FaSearch className="hover:text-white cursor-pointer h-5 w-5" />
          <FaBell className="hover:text-white cursor-pointer h-5 w-5 hidden sm:block" />
          <FaUser className="hover:text-white cursor-pointer h-5 w-5" />
          
          {/* Mobile Menu Toggle Button */}
          <button 
            className="md:hidden text-white focus:outline-none" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black text-white flex flex-col items-center py-6 space-y-6 shadow-xl border-t border-gray-800 animate-in slide-in-from-top-5 duration-300">
          <span className="hover:text-red-600 cursor-pointer font-semibold text-xl">Home</span>
          <span className="hover:text-red-600 cursor-pointer text-xl text-gray-300">TV Shows</span>
          <span className="hover:text-red-600 cursor-pointer text-xl text-gray-300">Movies</span>
          <span className="hover:text-red-600 cursor-pointer text-xl text-gray-300">Latest</span>
          <span className="hover:text-red-600 cursor-pointer text-xl text-gray-300">My List</span>
        </div>
      )}
    </nav>
  );
};

export default Navbar;