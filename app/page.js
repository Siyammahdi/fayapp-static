import React from 'react';
import LandingPage from './LandingPage/LandingPage';
import Navbar from './Shared/Navbar/Navbar';
import Footer from './Shared/Footer/Footer';

const page = () => {
  return (
    <div>
      <Navbar />
      <LandingPage />
      <Footer />
    </div>
  );
};

export default page;