import React from 'react';
import { Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-indigo-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="mb-4 md:mb-0">&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-indigo-300 transition-colors"><Github className="h-6 w-6" /></a>
            <a href="#" className="hover:text-indigo-300 transition-colors"><Twitter className="h-6 w-6" /></a>
            <a href="#" className="hover:text-indigo-300 transition-colors"><Linkedin className="h-6 w-6" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;