import React from 'react';
import { Link } from 'react-router-dom';

const Errorpage = () => {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-pink-100 to-blue-100 text-center p-4">
      <h1 className="text-7xl font-extrabold text-pink-600 mb-4">404</h1>
      <p className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2">Oops! Page not found</p>
      <p className="text-gray-600 mb-6 max-w-md">
        The page you're looking for doesn't exist. It might have been moved or deleted.
      </p>
      <Link to="/" className="btn btn-primary px-6 py-2 text-white text-lg">
        Go Home
      </Link>
    </div>
  );
};

export default Errorpage;
