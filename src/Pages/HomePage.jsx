import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Home Page</h1>
      <p>Welcome to the Home Page!</p>
      <Link to="/about" className="text-blue-500 hover:underline">Go to About Page</Link>
    </div>
  );
};

export default HomePage;
