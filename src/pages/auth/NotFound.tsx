import React from 'react';

const NotFound: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-[100vh]">
      <div className="text-center">
        <h1>404 - Page Not Found</h1>
        <p>Oops! The page you're looking for doesn't exist.</p>
      </div>
    </div>
  );
};

export default NotFound;
