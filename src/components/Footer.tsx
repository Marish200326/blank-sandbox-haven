import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-center items-center">
        <p className="text-gray-600">&copy; {new Date().getFullYear()} Real-Time App. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;