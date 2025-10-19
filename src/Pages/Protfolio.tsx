import React from 'react'
import Navbar from '../Componnents/Navbar'
import HeroPro from '../Componnents/HeroPro'
import Protfoliopost from '../Componnents/Protfoliopost'
import Instagram from '../Componnents/Instagram'
import Footer from '../Componnents/Footer'
import Counter from '../Componnents/Counter'

function Protfolio() {
  return (
    <div>
      <Navbar/>
      <HeroPro/>
      <Protfoliopost/>
      <Counter/>
      <Instagram/>
      <Footer/>
    </div>
  )
}

export default Protfolio