import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">About Page</h1>
      <p>Welcome to the About Page!</p>
      <Link to="/" className="text-blue-500 hover:underline">Go to Home Page</Link>
    </div>
  );
};

export default AboutPage;
