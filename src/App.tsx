import React from 'react';
import { Toaster } from 'react-hot-toast';
import { Navbar } from '@/components/layout/Navbar';
import { Hero } from '@/components/sections/Hero';
import { Services } from '@/components/sections/Services';
import { Courses } from '@/components/sections/Courses';
import { Mentorship } from '@/components/sections/Mentorship';

function App() {
  return (
    <div className="min-h-screen">
      <Toaster position="top-right" />
      <Navbar />
      <Hero />
      <Services />
      <Courses />
      <Mentorship />
    </div>
  );
}

export default App;