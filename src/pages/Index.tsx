import React from 'react';
import Header from '../components/Header';
import ProjectInfo from '../components/ProjectInfo';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <ProjectInfo />
      </main>
      <Footer />
    </div>
  );
};

export default Index;