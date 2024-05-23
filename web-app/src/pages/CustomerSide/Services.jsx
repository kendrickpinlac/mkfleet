import React from 'react'
import ServicesComponent from '../../components/CustomerSide/ServicesComponent';
import Header from '../../components/CustomerSide/Header';
import Footer from '../../components/CustomerSide/Footer';

const Home = () => {
  return (
    <div className="Services">
        <Header />
      <ServicesComponent />
      <Footer />
    </div>
  )
}

export default Home;
