import React from 'react';

const Header = () => {
  return (
    <header className="bg-white bg-opacity-90 backdrop-blur-md shadow-md">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-indigo-700">My GitHub Project</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#" className="text-indigo-600 hover:text-indigo-800 transition-colors">Home</a></li>
            <li><a href="#" className="text-indigo-600 hover:text-indigo-800 transition-colors">About</a></li>
            <li><a href="#" className="text-indigo-600 hover:text-indigo-800 transition-colors">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;