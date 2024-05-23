import React from 'react'
import CarsComponent from '../../components/CustomerSide/CarsComponent'
import Header from '../../components/CustomerSide/Header'
import Footer from '../../components/CustomerSide/Footer'
import Filter from '../../components/CustomerSide/Filter'

const Cars = () => {
  return (
    <div className="Cars">
      <Header />
        <Filter />
        <CarsComponent />
      <Footer />
    </div>
  )
}

export default Cars