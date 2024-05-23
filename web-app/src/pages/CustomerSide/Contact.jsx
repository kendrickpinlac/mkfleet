import React from 'react'
import ContactComponent from '../../components/CustomerSide/ContactComponent'
import Header from '../../components/CustomerSide/Header'
import Footer from '../../components/CustomerSide/Footer'

const Cars = () => {
  return (
    <div className="Contact">
        <Header />
        <ContactComponent />
        <Footer />
    </div>
  )
}

export default Cars