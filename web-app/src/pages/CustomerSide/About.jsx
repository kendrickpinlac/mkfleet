import React from 'react';

import AboutComponent from '../../components/CustomerSide/AboutComponent';
import Header from '../../components/CustomerSide/Header';
import Footer from '../../components/CustomerSide/Footer';

const About = () => {
  return (
    <div className="About">
        <Header />
        <AboutComponent />
        <Footer />
    </div>
  )
}

export default About