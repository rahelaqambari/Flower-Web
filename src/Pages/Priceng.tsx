import React from 'react'
import Navbar from '../Componnents/Navbar'
import HeroPriceng from '../Componnents/HeroPriceng'
import Instagram from '../Componnents/Instagram'
import Footer from '../Componnents/Footer'
import WhyChooseUs from '../Componnents/WhyChooseUs'
import SpecialPricing from '../Componnents/SpecialPricing'
import FaqP from '../Componnents/FaqP'

function Priceng() {
  return (
    <div>
      <Navbar/>
      <HeroPriceng/>
      <SpecialPricing/>
      <WhyChooseUs/>
      <FaqP/>
      <Instagram/>
      <Footer/>
    </div>
  )
}

export default Priceng