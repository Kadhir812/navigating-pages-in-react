import React from 'react';

const Header = () => {
  return (
    <div className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="text-xl font-bold">Logo</div>
      <nav className="flex space-x-4">
        <a href="#" className="hover:text-gray-400">Home</a>
        <a href="#" className="hover:text-gray-400">About</a>
        <a href="#" className="hover:text-gray-400">Services</a>
        <a href="#" className="hover:text-gray-400">Contact</a>
      </nav>
      <div className="flex space-x-4">
        <a href="#" className="hover:text-gray-400">Login</a>
        <a href="#" className="hover:text-gray-400">Sign Up</a>
      </div>
    </div>
  );
};

export default Header;
